// Labels describe the displayed reading sense, not every possible use of a word.
const SENSE_OVERRIDES={
 'fou-024':[{pos:'名詞',meaning:'権力'},{pos:'動詞',meaning:'〜できる'}],
 'fou-029':[{pos:'名詞',meaning:'臨床'},{pos:'形容詞',meaning:'臨床の'}],
 'fou-090':[{pos:'代名詞',meaning:'自己'}]
};
const NOUN_PHRASES=new Set(['lac-015','lac-020','fou-091']);
for(const w of WORDS){w.senses=SENSE_OVERRIDES[w.id]||[{pos:NOUN_PHRASES.has(w.id)?'名詞句':'名詞',meaning:w.termJa}];}
