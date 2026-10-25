// Measure actual rendered text so accents and each device font fit accurately.
function fitTerms(){
 document.querySelectorAll('.fr').forEach(el=>{
  el.style.fontSize='';
  const width=el.clientWidth;
  if(!width)return;
  const range=document.createRange();range.selectNodeContents(el);
  const natural=range.getBoundingClientRect().width;
  if(natural>width){
   const size=parseFloat(getComputedStyle(el).fontSize);
   el.style.fontSize=(Math.floor(size*(width-1)/natural*100)/100)+'px';
  }
 });
}
let fitFrame;
function scheduleTermFit(){cancelAnimationFrame(fitFrame);fitFrame=requestAnimationFrame(fitTerms);}
new MutationObserver(scheduleTermFit).observe(document.getElementById('app'),{childList:true,subtree:true});
new ResizeObserver(scheduleTermFit).observe(document.getElementById('app'));
window.addEventListener('resize',scheduleTermFit);
if(document.fonts)document.fonts.ready.then(scheduleTermFit);
fitTerms();
