const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const nodes=new Map(),events={},spoken=[],timers=new Map();let timerId=0;
function nextTimer(){assert.equal(timers.size,1);const [id,t]=timers.entries().next().value;timers.delete(id);t.fn();return t.ms;}
let voices=[{lang:'fr-FR',voiceURI:'test'}];
const ctx={console,Map,Set,setTimeout:(fn,ms)=>{const id=++timerId;timers.set(id,{fn,ms});return id},clearTimeout:id=>timers.delete(id),SpeechSynthesisUtterance:function(text){this.text=text},state:{settings:{rate:.85,voice:'test'}},learning:{course:'core'},toast:m=>ctx.notice=m,save:()=>ctx.saved=true,
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
events.input({target:{id:'bulk-gap',value:'2.5'}});
assert.equal(ctx.state.settings.wordGap,2.5);assert.equal(nodes.get('#bulk-gap-value').textContent,'2.5');
run('startBulkSpeech()');const first=spoken.at(-1);n=spoken.length;first.onend();
assert.equal(spoken.length,n);assert.equal(timers.size,1);first.onend();assert.equal(timers.size,1);
assert.equal(nextTimer(),2500);assert.equal(spoken.length,n+1);
// A change during an existing wait applies to the following wait.
spoken.at(-1).onend();events.input({target:{id:'bulk-gap',value:'5'}});assert.equal(nextTimer(),2500);
spoken.at(-1).onend();assert.equal([...timers.values()][0].ms,5000);
const cancelled=[...timers.values()][0].fn;const upcoming=run('bulkSpeech.words[bulkSpeech.index].audio.speechText');
run('toggleBulkPause()');assert.equal(timers.size,0);n=spoken.length;cancelled();assert.equal(spoken.length,n);
run('toggleBulkPause()');assert.equal(spoken.at(-1).text,upcoming);
spoken.at(-1).onend();const stopped=[...timers.values()][0].fn;run('stopSound()');n=spoken.length;stopped();assert.equal(spoken.length,n);assert.equal(timers.size,0);
run('startBulkSpeech()');spoken.at(-1).onend();events.change({target:{id:'speech-zone',value:'3'}});assert.equal(timers.size,0);
for(const value of ['-1','6','NaN'])events.input({target:{id:'bulk-gap',value}});
assert.equal(ctx.state.settings.wordGap,5);
run('startBulkSpeech();bulkSpeech.index=199;speakBulkWord()');spoken.at(-1).onend();assert.equal(timers.size,0);assert.equal(run('bulkSpeech'),null);
console.log('PASS: gap timing, no duplicate end callbacks, next-wait updates, pause/resume during wait, stop/zone cancellation, bounds, no wait after final word');
voices=[];n=spoken.length;run('startBulkSpeech()');assert.equal(spoken.length,n);assert.match(ctx.notice,/音声が見つかりません/);
console.log('PASS: all 5 zones in order, 200-word completion, pause/retry, rate persistence, stale events, stop, zone change, missing voice');
