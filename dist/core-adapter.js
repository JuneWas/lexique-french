// Keep the master ID and every master field unchanged; namespace only app records.
const POS_LABELS={function:'機能語',verb:'動詞',noun:'名詞',adverb:'副詞',adjective:'形容詞'};
const CORE_WORDS=CORE_MASTER.words.map(w=>({...w,sourceId:w.id,id:'core:'+w.id,course:'core',zone:Number(w.zone),rank:Number(w.learning_rank),termFr:w.word,termJa:w.meaning_ja,senses:[{pos:POS_LABELS[w.part_of_speech]||w.part_of_speech,meaning:w.meaning_ja}],category:'基礎フランス語 · Zone '+w.zone,aliases:[],relatedIds:[],shortDefinition:'',pitfalls:'',audio:{lang:'fr-FR',speechText:w.word,verified:false},reviewStatus:'v1.1 編集・QA版。外部辞書との全件照合は未完了',sourceNote:'提供マスター v1.1 / ID '+w.id,sourceSection:''}));
WORDS.push(...CORE_WORDS);
