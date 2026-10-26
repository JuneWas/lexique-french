const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const path=require('node:path'),root=path.join(__dirname,'..');
const files=['data.js','foucault.js','parts-of-speech.js','core1000.js','core-adapter.js','examples.js'];
const {words,examples}=vm.runInNewContext(files.map(f=>fs.readFileSync(path.join(root,'dist',f),'utf8')).join('\n')+';({words:WORDS,examples:WORD_EXAMPLES})');
assert.equal(words.length,1100);
assert.deepEqual(Object.keys(examples).sort(),Array.from(words,w=>w.id).sort());
for(const w of words){
 const e=examples[w.id];
 assert.ok(e.fr.trim()&&e.ja.trim(),w.id);
 assert.match(e.fr,/[.!?]$/,w.id);
 assert.match(e.ja,/[。！？]$/,w.id);
 assert.doesNotMatch(e.fr+e.ja,/[<>\t\n]/,w.id);
}
let count=0;
for(const file of fs.readdirSync(path.join(root,'content/examples')).filter(f=>f.endsWith('.tsv'))){
 for(const line of fs.readFileSync(path.join(root,'content/examples',file),'utf8').trim().split('\n')){
  const [id,fr,ja]=line.split('\t'),key=file.startsWith('core-')?'core:'+id:id;
  assert.equal(examples[key].fr,fr,key);assert.equal(examples[key].ja,ja,key);count++;
 }
}
assert.equal(count,1100);
assert.equal(examples['core:1'].fr,'Je parle français.');
assert.equal(examples['core:1'].ja,'私はフランス語を話します。');
console.log('PASS: 1100 mapped French/Japanese example pairs, source/build parity, punctuation and safe text');
