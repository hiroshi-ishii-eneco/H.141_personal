#!/usr/bin/env node
// 漢字データ品質検証スクリプト
//
// 使い方:
//   node scripts/validate-kanji-data.mjs            # 全学年検証
//   node scripts/validate-kanji-data.mjs g3          # 学年指定
//   node scripts/validate-kanji-data.mjs --strict    # warningも失敗扱い
//   node scripts/validate-kanji-data.mjs --json      # JSON出力
//
// チェック項目:
//   [error]   1. word に対象漢字が含まれていない
//   [error]   2. sentence に ○ プレースホルダがない / 複数箇所ある
//   [error]   3. word が空文字
//   [error]   4. reading が空文字 / 非ひらがな含む
//   [error]   5. 必須フィールド欠落
//   [error]   6. word 文字数が MAX_ANSWER_LEN (5) を超える
//   [warn]    7. sentence が学年別推奨範囲を超える
//   [warn]    8. sentence 内の他漢字が「当該学年の配当範囲外」(GRADE_ASSIGNMENTS 未設定時はスキップ)
//   [warn]    9. 同一 entry 内で同じ word が重複登録されている
//   [info]   10. メタデータ (status, generator) のサマリ

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_DIR = resolve(__dirname, "..", "data");

const GRADES = ["g1", "g2", "g3", "g4", "g5", "g6", "jhs1", "jhs2", "jhs3"];

// 実データのp95+1を上限に設定 (warning は最悪~5%のみフラグする目安)
const SENTENCE_LIMIT = {
  g1: 14, g2: 14, g3: 14, g4: 16, g5: 19, g6: 23,
  jhs1: 25, jhs2: 25, jhs3: 25
};

const MAX_ANSWER_LEN = 5;

// reading はひらがな + カタカナ (外来語 メダル/パン 等を含むため) + 長音符を許容
const READING_RE = /^[぀-ゟ゠-ヿーー]+$/;
const KANJI_RE = /[一-鿿]/g;

function loadGradeFile(grade) {
  const path = resolve(DATA_DIR, `kanji-${grade}.js`);
  if (!existsSync(path)) return { entries: [], meta: null, missing: true };
  const src = readFileSync(path, "utf8");

  const sandbox = { window: {} };
  const fn = new Function("window", src);
  fn(sandbox.window);

  const dataVar = `KANJI_DATA_${grade.toUpperCase()}`;
  const metaVar = `${dataVar}_META`;
  const entries = sandbox.window[dataVar] || [];
  const meta = sandbox.window[metaVar] || null;
  return { entries, meta, missing: false };
}

function loadAssignments() {
  const path = resolve(DATA_DIR, "grade-assignments.js");
  if (!existsSync(path)) return null;
  const src = readFileSync(path, "utf8");
  const sandbox = { window: {} };
  new Function("window", src)(sandbox.window);
  return sandbox.window.GRADE_ASSIGNMENTS || null;
}

function cumulativeKanjiSet(assignments, grade) {
  if (!assignments) return null;
  const set = new Set();
  for (const g of GRADES) {
    const list = assignments[g];
    if (Array.isArray(list)) {
      for (const k of list) set.add(k);
    }
    if (g === grade) break;
  }
  return set.size > 0 ? set : null;
}

function validateEntry(entry, grade, allowedKanjiSet) {
  const findings = [];
  const limit = SENTENCE_LIMIT[grade] ?? 20;
  const seen = new Set();

  if (!entry || typeof entry.kanji !== "string" || entry.kanji.length === 0) {
    findings.push({ level: "error", code: "MISSING_KANJI", message: "entry に kanji がない" });
    return findings;
  }

  if (!Array.isArray(entry.words) || entry.words.length === 0) {
    findings.push({ level: "error", code: "NO_WORDS", message: `${entry.kanji}: words が空` });
    return findings;
  }

  for (let i = 0; i < entry.words.length; i++) {
    const w = entry.words[i];
    const tag = `${entry.kanji}/words[${i}]`;
    if (!w || typeof w !== "object") {
      findings.push({ level: "error", code: "INVALID_WORD", message: `${tag}: 無効な word エントリ` });
      continue;
    }
    const { word, reading, sentence } = w;

    if (typeof word !== "string" || word.length === 0) {
      findings.push({ level: "error", code: "EMPTY_WORD", message: `${tag}: word が空` });
      continue;
    }
    if (word.length > MAX_ANSWER_LEN) {
      findings.push({ level: "error", code: "WORD_TOO_LONG", message: `${tag}: word "${word}" が${MAX_ANSWER_LEN}文字超 (${word.length}字)` });
    }
    if (!word.includes(entry.kanji)) {
      findings.push({ level: "error", code: "KANJI_MISSING_IN_WORD", message: `${tag}: word "${word}" に対象漢字 "${entry.kanji}" が含まれていない` });
    }
    if (seen.has(word)) {
      findings.push({ level: "warn", code: "DUPLICATE_WORD", message: `${tag}: word "${word}" が同 entry 内で重複` });
    }
    seen.add(word);

    if (typeof reading !== "string" || reading.length === 0) {
      findings.push({ level: "error", code: "EMPTY_READING", message: `${tag}: reading が空` });
    } else if (!READING_RE.test(reading)) {
      findings.push({ level: "error", code: "READING_INVALID_CHARS", message: `${tag}: reading "${reading}" にかな以外を含む` });
    }

    if (typeof sentence !== "string" || sentence.length === 0) {
      findings.push({ level: "error", code: "EMPTY_SENTENCE", message: `${tag}: sentence が空` });
    } else {
      const placeholderMatches = sentence.match(/○+/g) || [];
      if (placeholderMatches.length === 0) {
        findings.push({ level: "error", code: "NO_PLACEHOLDER", message: `${tag}: sentence "${sentence}" に ○ プレースホルダがない` });
      } else if (placeholderMatches.length > 1) {
        findings.push({ level: "error", code: "MULTIPLE_PLACEHOLDERS", message: `${tag}: sentence "${sentence}" に ○ ブロックが ${placeholderMatches.length} 箇所` });
      }
      if (sentence.length > limit) {
        findings.push({ level: "warn", code: "SENTENCE_TOO_LONG", message: `${tag}: sentence "${sentence}" が ${sentence.length} 字 (推奨上限 ${limit} 字)` });
      }

      if (allowedKanjiSet) {
        const sentenceWithoutWord = sentence.replace(/○+/, "");
        const kanjiInSentence = sentenceWithoutWord.match(KANJI_RE) || [];
        const offenders = [...new Set(kanjiInSentence.filter((k) => !allowedKanjiSet.has(k)))];
        if (offenders.length > 0) {
          findings.push({ level: "warn", code: "OUT_OF_GRADE_KANJI", message: `${tag}: sentence "${sentence}" に配当外漢字 ${offenders.join("")}` });
        }
      }
    }
  }

  return findings;
}

function validateGrade(grade, assignments) {
  const { entries, meta, missing } = loadGradeFile(grade);
  if (missing) {
    return { grade, missing: true, entries: 0, words: 0, errors: 0, warnings: 0, findings: [], meta: null };
  }

  const allowed = cumulativeKanjiSet(assignments, grade);
  const allFindings = [];

  for (const entry of entries) {
    const findings = validateEntry(entry, grade, allowed);
    for (const f of findings) allFindings.push({ ...f, kanji: entry?.kanji ?? "<unknown>" });
  }

  const errors = allFindings.filter((f) => f.level === "error").length;
  const warnings = allFindings.filter((f) => f.level === "warn").length;
  const wordCount = entries.reduce((n, e) => n + (Array.isArray(e?.words) ? e.words.length : 0), 0);

  return {
    grade,
    missing: false,
    entries: entries.length,
    words: wordCount,
    errors,
    warnings,
    findings: allFindings,
    meta
  };
}

function summarizeByCode(findings) {
  const map = new Map();
  for (const f of findings) {
    const key = `${f.level}/${f.code}`;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function printReport(results, opts) {
  const reset = "\x1b[0m";
  const red = "\x1b[31m";
  const yellow = "\x1b[33m";
  const green = "\x1b[32m";
  const dim = "\x1b[2m";
  const bold = "\x1b[1m";

  const useColor = process.stdout.isTTY && !opts.json;

  const c = (col, s) => (useColor ? col + s + reset : s);

  if (opts.json) {
    process.stdout.write(JSON.stringify(results, null, 2) + "\n");
    return;
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalEntries = 0;
  let totalWords = 0;

  for (const r of results) {
    if (r.missing) {
      console.log(c(dim, `\n[${r.grade}] (ファイルなし)`));
      continue;
    }
    console.log(c(bold, `\n[${r.grade}] ${r.entries} entries / ${r.words} words`));
    if (r.meta) {
      const tag = [r.meta.status || "?", r.meta.generator || "?", r.meta.reviewedBy ? `reviewed:${r.meta.reviewedBy}` : "unreviewed"].join(" / ");
      console.log(c(dim, `  meta: ${tag}`));
    }
    console.log(`  ${c(r.errors === 0 ? green : red, `errors: ${r.errors}`)}, ${c(r.warnings === 0 ? green : yellow, `warnings: ${r.warnings}`)}`);

    const summary = summarizeByCode(r.findings);
    for (const [key, count] of summary) {
      const [level, code] = key.split("/");
      const col = level === "error" ? red : yellow;
      console.log(`    ${c(col, level.padEnd(5))} ${code.padEnd(28)} × ${count}`);
    }

    if (opts.verbose) {
      // エラー優先 → 警告
      const sorted = [...r.findings].sort((a, b) => {
        if (a.level === b.level) return 0;
        return a.level === "error" ? -1 : 1;
      });
      const sample = sorted.slice(0, 30);
      for (const f of sample) {
        const col = f.level === "error" ? red : yellow;
        console.log(`      ${c(col, f.level)} ${f.message}`);
      }
      if (sorted.length > 30) {
        console.log(c(dim, `      ... 他 ${sorted.length - 30} 件`));
      }
    }

    totalErrors += r.errors;
    totalWarnings += r.warnings;
    totalEntries += r.entries;
    totalWords += r.words;
  }

  console.log(c(bold, `\n=== TOTAL ===`));
  console.log(`  entries: ${totalEntries}, words: ${totalWords}`);
  console.log(`  ${c(totalErrors === 0 ? green : red, `errors: ${totalErrors}`)}, ${c(totalWarnings === 0 ? green : yellow, `warnings: ${totalWarnings}`)}`);

  if (totalEntries > 0) {
    const errRate = (totalErrors / totalWords) * 100;
    const warnRate = (totalWarnings / totalWords) * 100;
    console.log(`  error rate: ${errRate.toFixed(2)}%, warning rate: ${warnRate.toFixed(2)}%`);
    const cleanRate = 100 - errRate - warnRate;
    const passLine = cleanRate >= 95 ? green : (cleanRate >= 90 ? yellow : red);
    console.log(`  clean rate: ${c(passLine, cleanRate.toFixed(2) + "%")} ${cleanRate >= 95 ? "(目標 95% 達成)" : ""}`);
  }
}

function main() {
  const args = process.argv.slice(2);
  const opts = {
    strict: args.includes("--strict"),
    json: args.includes("--json"),
    verbose: args.includes("--verbose") || args.includes("-v")
  };
  const targets = args.filter((a) => !a.startsWith("-"));
  const gradesToCheck = targets.length > 0 ? targets : GRADES.filter((g) => g.startsWith("g"));

  const assignments = loadAssignments();
  const results = gradesToCheck.map((g) => validateGrade(g, assignments));

  printReport(results, opts);

  const totalErrors = results.reduce((n, r) => n + (r.errors || 0), 0);
  const totalWarnings = results.reduce((n, r) => n + (r.warnings || 0), 0);
  const exitCode = totalErrors > 0 ? 1 : (opts.strict && totalWarnings > 0 ? 2 : 0);
  process.exit(exitCode);
}

main();
