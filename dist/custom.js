// User vocabulary is stored separately from the supplied teaching material.
function validateCustom(input){
 if(!Array.isArray(input)||input.length>5000)throw Error('追加単語の形式が不正です（最大5000語）');
 const ids=new Set();return input.map(w=>{
  if(!w||typeof w!=='object'||typeof w.id!=='string'||!/^usr-[a-z0-9-]{8,80}$/.test(w.id)||ids.has(w.id))throw Error('追加単語のIDが不正・重複しています');ids.add(w.id);
  const clean={id:w.id};for(const [key,max,required] of [['termFr',120,true],['termJa',200,true],['shortDefinition',500,false],['explanation',5000,false],['speechText',200,false],['sourceNote',2000,false]]){
   const value=w[key]===undefined&&!required?'':w[key];if(typeof value!=='string'||value.length>max||required&&!value.trim())throw Error('フランス語・日本語訳は必須です。入力文字数も確認してください。');clean[key]=value.trim();
  }return clean;
 });
}
function materialize(w){return {...w,custom:true,category:'自分の単語',aliases:[],relatedIds:[],pitfalls:'',shortDefinition:w.shortDefinition||w.termJa,audio:{lang:'fr-FR',speechText:w.speechText||w.termFr,verified:false},reviewStatus:'自分で追加した単語',sourceSection:''};}
