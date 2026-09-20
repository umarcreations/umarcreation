(function(){
 const root=document.documentElement;
 const saved=localStorage.getItem('uc-theme'); if(saved) root.dataset.theme=saved;
 document.addEventListener('click',e=>{
  const theme=e.target.closest('[data-theme-toggle]');
  if(theme){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('uc-theme',root.dataset.theme)}
  const menu=e.target.closest('.menu-btn'), nav=document.querySelector('.navlinks');
  if(menu&&nav){nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='64px';nav.style.left='4%';nav.style.right='4%';nav.style.flexDirection='column';nav.style.alignItems='stretch';nav.style.background='var(--surface)';nav.style.padding='12px';nav.style.border='1px solid var(--line)';nav.style.borderRadius='16px'}
 });
 const top=document.querySelector('.floating-top'); window.addEventListener('scroll',()=>top&&top.classList.toggle('show',scrollY>450)); if(top) top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 window.copyText=async t=>{try{await navigator.clipboard.writeText(t);alert('Copied!')}catch(e){prompt('Copy this text:',t)}};
 const q=document.querySelector('[data-site-search]'); if(q) q.addEventListener('keydown',e=>{if(e.key==='Enter') location.href='pages/search.html?q='+encodeURIComponent(q.value)});
})();
