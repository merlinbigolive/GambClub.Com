const toast=document.getElementById('toast');
function copied(){
  toast.classList.add('show');
  clearTimeout(window.__t);
  window.__t=setTimeout(()=>toast.classList.remove('show'),1700);
}
document.querySelectorAll('[data-code]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const code=btn.dataset.code;
    try{await navigator.clipboard.writeText(code)}catch(e){}
    const old=btn.innerHTML;
    btn.innerHTML='COPIED ✓';
    copied();
    setTimeout(()=>btn.innerHTML=old,1300);
  });
});
const filter=document.getElementById('filter');
filter.addEventListener('change',()=>{
  const v=filter.value;
  document.querySelectorAll('#clubTable tbody tr').forEach(row=>{
    let show=true;
    if(v==='rating') show=+row.dataset.rating>=4.8;
    if(v==='payout') show=row.dataset.payout==='1';
    if(v==='crypto') show=row.dataset.crypto==='1';
    row.style.display=show?'':'none';
  });
});
const search=document.getElementById('searchInput');
search.addEventListener('input',()=>{
  const q=search.value.toLowerCase();
  document.querySelectorAll('#clubTable tbody tr').forEach(row=>{
    row.style.display=row.innerText.toLowerCase().includes(q)?'':'none';
  });
});
document.getElementById('menuBtn').addEventListener('click',()=>{
  document.querySelector('.nav').style.display=document.querySelector('.nav').style.display==='flex'?'none':'flex';
  document.querySelector('.nav').style.position='absolute';
  document.querySelector('.nav').style.top='68px';
  document.querySelector('.nav').style.left='0';
  document.querySelector('.nav').style.right='0';
  document.querySelector('.nav').style.padding='18px 5%';
  document.querySelector('.nav').style.background='#080e13';
  document.querySelector('.nav').style.borderBottom='1px solid #1b292f';
  document.querySelector('.nav').style.flexDirection='column';
});
