const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const L=require('../dist/learning-engine.js');const dir=__dirname+'/../dist/';
const load=names=>names.map(n=>fs.readFileSync(dir+n,'utf8')).join('\n');
const {words,core,master}=vm.runInNewContext(load(['data.js','foucault.js','parts-of-speech.js','core1000.js','core-adapter.js'])+';({words:WORDS,core:CORE_WORDS,master:CORE_MASTER})');
assert.equal(words.length,1100);assert.equal(core.length,1000);assert.equal(new Set(words.map(w=>w.id)).size,1100);assert.equal(words.filter(w=>w.id.startsWith('lac-')).length,20);assert.equal(words.filter(w=>w.id.startsWith('fou-')).length,80);
for(let i=0;i<1000;i++){assert.equal(core[i].sourceId,master.words[i].id);assert.equal(core[i].termFr,master.words[i].word);assert.equal(core[i].termJa,master.words[i].meaning_ja);assert.equal(core[i].gender,master.words[i].gender);assert.equal(core[i].rank,Number(master.words[i].learning_rank));}
for(let z=1;z<=5;z++)assert.equal(core.filter(w=>w.zone===z).length,200);
let s=L.empty();s.startDate='2026-10-01';
assert.equal(L.scheduled(s,'2026-10-01'),1);assert.equal(L.scheduled(s,'2026-10-30'),30);assert.equal(L.scheduled(s,'2026-11-02'),33);assert.equal(s.currentDay,1);
for(let d=1;d<=30;d++){
 assert.equal(L.dayZone(d),(d-1)%5+1);assert.equal(L.round(d),Math.floor((d-1)/5)+1);
 const day=L.ensureDay(s,d,core);assert.equal(day.wordIds.length,200);
 for(let i=0;i<199;i++)L.judge(s,d,day.wordIds[i],d%2===0,core);
 assert.equal(L.stats(day).complete,false);
 // Reload from a real JSON serialization at the 199th word.
 s=L.validate(JSON.parse(JSON.stringify(s)));assert.equal(s.days[d].position,199);
 L.judge(s,d,s.days[d].wordIds[199],true,core);assert.equal(L.stats(s.days[d]).complete,true);assert.equal(s.days[d].position,200);
}
assert.equal(Object.values(s.days).reduce((n,d)=>n+L.stats(d).done,0),6000);
const id=core[0].id;assert.equal(s.days[1].results[id][0].known,false);assert.equal(s.days[6].results[id][0].known,true);assert.equal(s.days[11].results[id][0].known,false);
const before=JSON.stringify(s.days);L.judgeWeak(s,id,true);assert.equal(JSON.stringify(s.days),before);assert.equal(s.weak[id],false);assert.equal(s.weakHistory[id].length,1);
L.judge(s,1,id,true,core);assert.equal(s.days[1].results[id].length,2);assert.equal(s.days[6].results[id].length,1);assert.equal(L.stats(s.days[1]).done,200);
assert.deepEqual(L.validate(JSON.parse(JSON.stringify(s))),s);
for(const bad of [{...s,currentDay:31},{...s,startDate:'2026-02-30'},{...s,weak:{[id]:'yes'}},{...s,days:{1:{wordIds:[id],position:0,results:{}}}}])assert.throws(()=>L.validate(bad));
console.log('PASS: exact master mapping, 1100 IDs, legacy 100, 5 zones × 200, 30-day schedule, 6000 decisions, 199/200 boundary, JSON reload, six independent rounds, repeated decisions, isolated weak history, validation.');
