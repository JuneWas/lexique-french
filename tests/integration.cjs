const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');const root=__dirname+'/../dist/';
const disk=new Map(),nodes=new Map();let fail=false;
const legacy={records:{'lac-012':{favorite:true,level:'known',reviewCount:3,lastReviewedAt:null}},customWords:[],settings:{rate:.9,voice:'fr-test'}};disk.set('lacan.lexique.v1',JSON.stringify(legacy));
function context(){const node=()=>({textContent:'',style:{},classList:{toggle(){}},setAttribute(){},value:''});const ctx={console,Date,JSON,Number,Math,Set,Map,Blob,setTimeout:()=>0,clearTimeout(){},location:{hash:'#dictionary'},confirm:()=>true,URL:{createObjectURL:()=>'',revokeObjectURL(){}},localStorage:{getItem:k=>disk.get(k)||null,setItem:(k,v)=>{if(fail)throw Error('quota');disk.set(k,v);},removeItem:k=>disk.delete(k)},document:{querySelector:s=>{if(!nodes.has(s))nodes.set(s,node());return nodes.get(s)},querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){},scrollTo(){}},SpeechSynthesisUtterance:function(text){this.text=text},speechSynthesis:{cancel(){},getVoices:()=>[{lang:'fr-FR',voiceURI:'fr-test'}],speak:u=>ctx.spoken=u}};ctx.window.speechSynthesis=ctx.speechSynthesis;ctx.speechSynthesis.addEventListener=()=>{};vm.createContext(ctx);
 for(const f of ['data.js','foucault.js','parts-of-speech.js','core1000.js','core-adapter.js','learning-engine.js','custom.js','examples.js','app.js','bulk-speech.js','learning-ui.js']){let code=fs.readFileSync(root+f,'utf8');if(f==='learning-ui.js')code=code.replace("render();if(learningLoadError)","if(learningLoadError)");vm.runInContext(code,ctx);}
 vm.runInContext('render=()=>{};',ctx);return ctx;}
(async()=>{let c=context();const run=s=>vm.runInContext(s,c);
 assert.match(run("meaningHtml(CORE_WORDS[0])"),/Je parle français\./);
 assert.match(run("meaningHtml(CORE_WORDS[0])"),/私はフランス語を話します。/);
 assert.equal(run("exampleHtml({id:'usr-example'})"),'');
 assert.equal(run("record('lac-012').favorite"),true);assert.equal(run("filtered().length"),1000);
 assert.equal(run("q='私（主語）';filtered().length"),1);assert.equal(run("q='';zoneFilter='5';filtered().length"),200);assert.equal(run("zoneFilter='';posFilter='verb';filtered().length"),270);assert.equal(run("posFilter='';learning.course='thought';q='desir';filtered()[0].id"),'lac-012');
 run("sound(CORE_WORDS[0])");assert.equal(c.spoken.text,'je');assert.equal(c.spoken.lang,'fr-FR');assert.equal(c.spoken.rate,.9);
 run("learning.course='core';q='';fav('core:1')");assert.equal(run("record('core:1').favorite"),true);
 run("changeLearning(s=>{s.startDate='2026-10-25';Learning.ensureDay(s,1,CORE_WORDS);Learning.judge(s,1,'core:1',false,CORE_WORDS)})");
 run('state.settings.wordGap=2.5;save()');
 c=context();assert.equal(run('state.settings.wordGap'),2.5);assert.equal(run('learning.days[1].position'),1);assert.equal(run("record('core:1').favorite"),true);
 const before=disk.get('lexique.learning.v13');fail=true;assert.equal(run("changeLearning(s=>Learning.judge(s,1,'core:2',true,CORE_WORDS))"),false);assert.equal(run('learning.days[1].position'),1);assert.equal(disk.get('lexique.learning.v13'),before);fail=false;
 run('downloadBackup=(data)=>{globalThis.backup=JSON.parse(JSON.stringify(data))};exportAll()');const backup=c.backup;assert.equal(backup.version,3);assert.equal(backup.settings.wordGap,2.5);assert.equal(backup.learning.days[1].position,1);
 c.file={size:1000,text:async()=>JSON.stringify(backup)};await run('importAll({target:{files:[file]}})');assert.equal(run('learning.days[1].position'),1);
 for(const version of [1,2]){c.file={size:1000,text:async()=>JSON.stringify({version,records:legacy.records,customWords:[]})};await run('importAll({target:{files:[file]}})');assert.equal(run("record('lac-012').reviewCount"),3);assert.equal(run("record('core:1').favorite"),true);assert.equal(run('learning.days[1].position'),1);}
 c.file={size:100,text:async()=>JSON.stringify({...backup,learning:{...backup.learning,currentDay:99}})};const saved=disk.get('lacan.lexique.v1');await run('importAll({target:{files:[file]}})');assert.equal(disk.get('lacan.lexique.v1'),saved);
 assert.equal(run('state.settings.wordGap'),2.5);
 console.log('PASS: actual app load with old records, French/Japanese search, course/zone/POS filters, favorites persistence, mocked French speech request, actual storage reload, save-failure no advancement, v3 round-trip, v1/v2 import preservation, invalid-backup rejection.');
})().catch(e=>{console.error(e);process.exit(1)});
