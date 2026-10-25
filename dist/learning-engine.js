/* Pure learning state, separate from vocabulary. No network or DOM dependencies. */
const Learning = (()=>{
 const key='lexique.learning.v13';
 const empty=()=>({schema:1,masterVersion:'1.1',startDate:'',currentDay:1,course:'core',days:{},weak:{},weakHistory:{},weakSession:null});
 const validDate=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!isNaN(Date.parse(s+'T00:00:00Z'))&&new Date(s+'T00:00:00Z').toISOString().slice(0,10)===s;
 const dayZone=d=>(d-1)%5+1,round=d=>Math.floor((d-1)/5)+1;
 const localDate=(date=new Date())=>[date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');
 function scheduled(s,today=localDate()){if(!s.startDate)return null;return Math.floor((Date.parse(today+'T00:00:00Z')-Date.parse(s.startDate+'T00:00:00Z'))/86400000)+1;}
 function ensureDay(s,d,words){if(!Number.isInteger(d)||d<1||d>30)throw Error('Dayが不正です');if(!s.days[d])s.days[d]={wordIds:words.filter(w=>w.zone===dayZone(d)).map(w=>w.id),position:0,results:{}};return s.days[d];}
 function stats(day){const ids=day?.wordIds||[];const done=ids.filter(id=>day.results[id]?.length);const known=done.filter(id=>day.results[id].at(-1).known).length;return {done:done.length,total:ids.length||200,known,complete:ids.length>0&&done.length===ids.length,rate:done.length?Math.round(known/done.length*100):0};}
 function judge(s,d,id,known,words,at=new Date().toISOString()){const day=ensureDay(s,d,words);if(!day.wordIds.includes(id)||typeof known!=='boolean')throw Error('学習結果が不正です');(day.results[id]||=([])).push({known,at});s.weak[id]=!known;day.position=Math.min(day.wordIds.indexOf(id)+1,day.wordIds.length);return stats(day);}
 function judgeWeak(s,id,known,at=new Date().toISOString()){if(typeof known!=='boolean'||!/^core:/.test(id))throw Error('苦手語の結果が不正です');(s.weakHistory[id]||=[]).push({known,at});s.weak[id]=!known;if(s.weakSession)s.weakSession.position++;}
 function validate(input){
  const s=JSON.parse(JSON.stringify(input));const obj=x=>x&&typeof x==='object'&&!Array.isArray(x);const id=x=>typeof x==='string'&&/^core:[a-zA-Z0-9_-]{1,100}$/.test(x);const integer=(x,a,b)=>Number.isInteger(x)&&x>=a&&x<=b;
  const histories=x=>{if(!obj(x))throw Error('履歴が不正です');for(const [k,events] of Object.entries(x)){if(!id(k)||!Array.isArray(events)||events.length>100000||events.some(e=>!obj(e)||typeof e.known!=='boolean'||typeof e.at!=='string'||isNaN(Date.parse(e.at))))throw Error('単語履歴が不正です');}};
  if(!obj(s)||s.schema!==1||!['core','thought'].includes(s.course)||!integer(s.currentDay,1,30)||!(s.startDate===''||validDate(s.startDate))||!obj(s.days)||!obj(s.weak))throw Error('30日学習データが不正です');
  for(const [d,v] of Object.entries(s.days)){if(!integer(Number(d),1,30)||!obj(v)||!Array.isArray(v.wordIds)||v.wordIds.length!==200||new Set(v.wordIds).size!==200||v.wordIds.some(x=>!id(x))||!integer(v.position,0,200))throw Error('Dayの内容が不正です');histories(v.results);if(Object.keys(v.results).some(k=>!v.wordIds.includes(k)))throw Error('Dayと単語が一致しません');}
  for(const [k,v] of Object.entries(s.weak))if(!id(k)||typeof v!=='boolean')throw Error('苦手語が不正です');histories(s.weakHistory);
  if(s.weakSession!==null){const v=s.weakSession;if(!obj(v)||!Array.isArray(v.ids)||v.ids.length>10000||new Set(v.ids).size!==v.ids.length||v.ids.some(x=>!id(x))||!integer(v.position,0,v.ids.length))throw Error('復習位置が不正です');}
  return s;
 }
 return {key,empty,validDate,dayZone,round,localDate,scheduled,ensureDay,stats,judge,judgeWeak,validate};
})();
if(typeof module!=='undefined')module.exports=Learning;
