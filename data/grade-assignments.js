// data/grade-assignments.js
// 配当漢字定義の唯一の source of truth。
// Phase 0 で MeCab/Sudachi 連携時に各学年配列を充実させる予定。
// Phase 1a 現在は空配列のままで運用 (配当漢字は data/kanji-*.js から派生)。

window.GRADE_ASSIGNMENTS = {
  meta: {
    gradeRevision: "R2",
    source: "文部科学省 学年別漢字配当表 (令和2年改訂)"
  },
  g1: [],
  g2: [],
  g3: [],
  g4: [],
  g5: [],
  g6: [],
  jhs1: [],
  jhs2: [],
  jhs3: []
};
