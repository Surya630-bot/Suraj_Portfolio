const menuToggle=document.getElementById('menuToggle');
const navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{navMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%';});
if(window.AOS){AOS.init({duration:750,once:true,offset:70,easing:'ease-out-cubic'});}
if(window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  gsap.from('.availability',{y:18,opacity:0,duration:.7,delay:.15});
  gsap.from('.hero-copy h1',{y:35,opacity:0,duration:.9,delay:.25});
  gsap.from('.hero-copy h2,.hero-sub,.hero-message,.hero-actions,.hero-stats',{y:20,opacity:0,duration:.7,stagger:.12,delay:.45});
}
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-link')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>observer.observe(section));
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent('Portfolio enquiry for Suraj Vishwakarma');
  const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail or Phone: ${data.get('reply')}\n\nMessage:\n${data.get('message')}`);
  document.getElementById('formHint').textContent='Opening your email app…';
  window.location.href=`mailto:surajeducation67@gmail.com?subject=${subject}&body=${body}`;
});