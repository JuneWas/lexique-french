// Keep a strong reference to the current utterance until it finishes.
let bulkSpeech=null,bulkGeneration=0,bulkZone='1',bulkTimer=null;
function bulkGap(){const gap=state.settings.wordGap;return Number.isFinite(gap)&&gap>=0&&gap<=5?gap:0;}
function clearBulkTimer(){if(bulkTimer!==null){clearTimeout(bulkTimer);bulkTimer=null;}}
function bulkSpeechPanel(){
 if(learning.course!=='core')return '';
 return `<section class="bulk-speech" aria-label="200語の連続読み上げ"><h2>200語をまとめて聞く</h2><div class="bulk-options"><div><label for="speech-zone">読み上げるZone</label><select id="speech-zone">${[1,2,3,4,5].map(z=>`<option value="${z}" ${bulkZone==z?'selected':''}>Zone ${z}（${(z-1)*200+1}〜${z*200}語）</option>`).join('')}</select></div><div><label for="bulk-rate">速度 <span id="bulk-rate-value">${state.settings.rate.toFixed(2)}</span>倍</label><input id="bulk-rate" type="range" min="0.6" max="1.2" step="0.05" value="${state.settings.rate}"></div></div><label for="bulk-gap">単語の間隔 <span id="bulk-gap-value">${bulkGap().toFixed(1)}</span>秒</label><input id="bulk-gap" type="range" min="0" max="5" step="0.5" value="${bulkGap()}" aria-describedby="bulk-gap-help"><p id="bulk-gap-help" class="notes">読み終わってから次の単語までの待ち時間（0〜5秒）。変更は次の待ち時間から反映されます。</p><div class="actions"><button id="bulk-start" class="primary">200語を読む</button><button id="bulk-pause" disabled>一時停止</button><button id="bulk-stop" disabled>停止</button></div><p id="bulk-status" role="status" aria-live="polite">選んだZoneのフランス語を学習順に読みます。</p><details class="speech-help"><summary>読み上げについて</summary><p class="notes">検索・品詞の絞り込みに関係なく200語を読みます。速度変更は次の単語から反映されます。画面を開いたままお使いください。</p></details></section><button id="bulk-floating-pause" class="bulk-floating-pause" hidden aria-label="連続読み上げを一時停止">一時停止</button>`;
}
function updateFloatingPause(){
 const floating=$('#bulk-floating-pause'),original=$('#bulk-pause');
 if(!floating||!original||typeof original.getBoundingClientRect!=='function')return;
 const nav=document.querySelector('nav');
 const navTop=nav?nav.getBoundingClientRect().top:window.innerHeight;
 const rect=original.getBoundingClientRect();
 const visible=rect.top>=0&&rect.bottom<=Math.min(navTop,window.innerHeight);
 floating.hidden=!bulkSpeech||visible;
 floating.textContent=bulkSpeech?.paused?'再開':'一時停止';
 floating.setAttribute('aria-label',bulkSpeech?.paused?'連続読み上げを再開':'連続読み上げを一時停止');
 floating.style.bottom=`${Math.max(0,window.innerHeight-navTop)+10}px`;
}
function updateBulkSpeech(message){
 const status=$('#bulk-status');if(status)status.textContent=message;
 const pause=$('#bulk-pause'),stop=$('#bulk-stop');
 if(pause){pause.disabled=!bulkSpeech;pause.textContent=bulkSpeech?.paused?'再開':'一時停止';}
 if(stop)stop.disabled=!bulkSpeech;
 updateFloatingPause();
}
function stopBulkSpeech(){
 clearBulkTimer();
 bulkGeneration++;
 bulkSpeech=null;
 updateBulkSpeech('停止しました。');
}
function speakBulkWord(){
 const session=bulkSpeech;if(!session||session.paused)return;
 const generation=++bulkGeneration;
 const w=session.words[session.index];
 const u=new SpeechSynthesisUtterance(w.audio.speechText);
 session.utterance=u;u.lang='fr-FR';u.voice=session.voice;u.rate=state.settings.rate;
 updateBulkSpeech(`${session.index+1} / ${session.words.length}語 · ${w.termFr}`);
 u.onend=()=>{
  if(generation!==bulkGeneration||bulkSpeech!==session||session.paused)return;
  const waitingGeneration=++bulkGeneration;
  session.index++;
  if(session.index===session.words.length){bulkSpeech=null;updateBulkSpeech('200語の読み上げが完了しました。');return;}
  const gap=bulkGap();
  if(gap===0){speakBulkWord();return;}
  updateBulkSpeech(`${session.index} / ${session.words.length}語を再生済み · 次の単語まで${gap.toFixed(1)}秒`);
  bulkTimer=setTimeout(()=>{
   if(waitingGeneration!==bulkGeneration||bulkSpeech!==session||session.paused)return;
   bulkTimer=null;speakBulkWord();
  },gap*1000);
 };
 u.onerror=()=>{
  if(generation!==bulkGeneration||bulkSpeech!==session)return;
  // Preserve the current word so a user gesture can retry it on mobile browsers.
  session.paused=true;updateBulkSpeech('読み上げが中断しました。「再開」でこの単語から再試行できます。');
 };
 speechSynthesis.speak(u);
}
function startBulkSpeech(){
 stopSound();
 if(!('speechSynthesis'in window)){toast('この環境は読み上げに対応していません。Safariでお試しください。');return;}
 const voices=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('fr'));
 if(!voices.length){toast('フランス語の音声が見つかりません。端末に音声を追加し、もう一度お試しください。');return;}
 const words=CORE_WORDS.filter(w=>w.zone===Number(bulkZone)).sort((a,b)=>a.rank-b.rank);
 if(words.length!==200){toast('このZoneの200語を読み込めませんでした。');return;}
 bulkSpeech={words,index:0,paused:false,voice:voices.find(v=>v.voiceURI===state.settings.voice)||voices.find(v=>v.lang==='fr-FR')||voices[0]};
 speakBulkWord();
}
function toggleBulkPause(){
 if(!bulkSpeech)return;
 if(bulkSpeech.paused){bulkSpeech.paused=false;speakBulkWord();return;}
 clearBulkTimer();bulkSpeech.paused=true;bulkGeneration++;speechSynthesis.cancel();
 updateBulkSpeech(`一時停止 · ${bulkSpeech.index+1} / 200語（再開時はこの単語から）`);
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.id==='bulk-start')startBulkSpeech();
 if(b.id==='bulk-pause'||b.id==='bulk-floating-pause')toggleBulkPause();
 if(b.id==='bulk-stop')stopSound();
});
document.addEventListener('change',e=>{
 if(e.target.id==='speech-zone'){stopSound();bulkZone=e.target.value;}
});
document.addEventListener('input',e=>{
 if(e.target.id==='bulk-gap'){
  const gap=Number(e.target.value);if(!Number.isFinite(gap)||gap<0||gap>5)return;
  state.settings.wordGap=gap;$('#bulk-gap-value').textContent=gap.toFixed(1);save();return;
 }
 if(e.target.id!=='bulk-rate')return;
 const rate=Number(e.target.value);if(!Number.isFinite(rate)||rate<.6||rate>1.2)return;
 state.settings.rate=rate;$('#bulk-rate-value').textContent=rate.toFixed(2);save();
});
window.addEventListener('pagehide',()=>stopSound());

window.addEventListener('scroll',updateFloatingPause,{passive:true});
window.addEventListener('resize',updateFloatingPause);
