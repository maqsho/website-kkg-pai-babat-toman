const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
if(toggle){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open);
  });
}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:.08});
document.querySelectorAll('.card,.event,.profile-panel,.contact-card').forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(18px)';
  el.style.transition='opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
