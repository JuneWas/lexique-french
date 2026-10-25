const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const nodes=new Map(),events={},spoken=[];let voices=[{lang:'fr-FR',voiceURI:'test'}];
const ctx={console,Map,Set,SpeechSynthesisUtterance:function(text){this.text=text},state:{settings:{rate:.85,voice:'test'}},learning:{course:'core'},toast:m=>ctx.notice=m,save:()=>ctx.saved=true,
 $:s=>{if(!nodes.has(s))nodes.set(s,{});return nodes.get(s)},
 speechSynthesis:{getVoices:()=>voices,speak:u=>spoken.push(u),cancel(){}},
 document:{addEventListener:(t,f)=>events[t]=f},window:{addEventListener(){}}};
ctx.window.speechSynthesis=ctx.speechSynthesis;vm.createContext(ctx);
for(const f of ['data.js','foucault.js','parts-of-speech.js','core1000.js','core-adapter.js','bulk-speech.js'])vm.runInContext(fs.readFileSync(__dirname+'/../dist/'+f,'utf8'),ctx);
const run=s=>vm.runInContext(s,ctx);
run('function stopSound(){stopBulkSpeech();speechSynthesis.cancel()}');
for(let z=1;z<=5;z++){
 spoken.length=0;run(`bulkZone='${z}';startBulkSpeech()`);
 const expected=run(`CORE_WORDS.filter(w=>w.zone===${z}).sort((a,b)=>a.rank-b.rank).map(w=>w.audio.speechText)`);
 for(let i=0;i<200;i++){assert.equal(spoken.length,i+1);assert.equal(spoken[i].text,expected[i]);assert.equal(spoken[i].lang,'fr-FR');spoken[i].onend();}
 assert.equal(spoken.length,200);assert.equal(run('bulkSpeech'),null);
}
run('startBulkSpeech()');const interrupted=spoken.at(-1);run('toggleBulkPause()');let n=spoken.length;
interrupted.onend();assert.equal(spoken.length,n);
run('toggleBulkPause()');assert.equal(spoken.at(-1).text,interrupted.text);
events.input({target:{id:'bulk-rate',value:'0.6'}});assert.equal(ctx.saved,true);
spoken.at(-1).onend();assert.equal(spoken.at(-1).rate,.6);
const stale=spoken.at(-1);run('stopSound()');n=spoken.length;stale.onend();stale.onerror();assert.equal(spoken.length,n);assert.equal(run('bulkSpeech'),null);
run('startBulkSpeech()');const failed=spoken.at(-1);failed.onerror();assert.equal(run('bulkSpeech.paused'),true);
run('toggleBulkPause()');assert.equal(spoken.at(-1).text,failed.text);
events.change({target:{id:'speech-zone',value:'2'}});assert.equal(run('bulkSpeech'),null);
voices=[];n=spoken.length;run('startBulkSpeech()');assert.equal(spoken.length,n);assert.match(ctx.notice,/音声が見つかりません/);
console.log('PASS: all 5 zones in order, 200-word completion, pause/retry, rate persistence, stale events, stop, zone change, missing voice');
