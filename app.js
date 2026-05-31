/* ===== Supo landing — dynamic bits ===== */

// ---- Testimonials ----
const TESTI = [
  {q:"Fast turnaround and excellent communication made the entire design process smooth and enjoyable. Will definitely use their services again.", n:"Marcelo Velez", r:"Marketing Manager", img:12},
  {q:"Their attention to detail and creative insights brought our vision to life beyond expectations.", n:"Sophie Chen", r:"Product Designer", img:16},
  {q:"Timely delivery and proactive updates kept our project on track and stress-free.", n:"Jamal Edwards", r:"Project Coordinator", img:33},
  {q:"The team was incredibly professional and brought my vision to life in ways I never imagined. Highly recommend for any creative project!", n:"Alana Ruiz", r:"Creative Director", img:20},
  {q:"A perfect blend of professionalism and creativity that elevated our brand.", n:"Elena Rodriguez", r:"Brand Strategist", img:47},
];

function card(t){
  return `<article class="tcard">
    <img class="av" src="https://i.pravatar.cc/128?img=${t.img}" alt="${t.n}">
    <p class="quote">${t.q}</p>
    <span class="qmark">&rdquo;</span>
    <div class="foot">
      <div><div class="nm">${t.n}</div><div class="role">${t.r}</div></div>
      <div class="glogo">Google</div>
    </div>
  </article>`;
}
function fill(id, order){
  const set = order.map(i=>card(TESTI[i])).join("");
  document.getElementById(id).innerHTML = set + set; // duplicate for seamless loop
}
fill("row1", [0,1,2,4]);
fill("row2", [3,0,4,1]);

// ---- Early Access Drops: colorful glowing dots + avatars ----
(function(){
  const el = document.getElementById("drops");
  if(!el) return;
  const dots = [
    {x:20,y:30,c:"#7c5cff"},{x:74,y:24,c:"#ff7ab8"},{x:50,y:62,c:"#ffd36b"},
    {x:30,y:74,c:"#4bd6c0"},{x:82,y:66,c:"#ff8a5c"}
  ];
  dots.forEach(d=>{
    const s=document.createElement("span");
    s.className="dot"; s.style.left=d.x+"%"; s.style.top=d.y+"%";
    s.style.setProperty("--g", d.c);
    s.style.background=d.c;
    el.appendChild(s);
  });
  const avs=[{x:42,y:18,i:5},{x:60,y:40,i:8},{x:24,y:50,i:30}];
  avs.forEach(a=>{
    const im=document.createElement("img");
    im.className="av"; im.src=`https://i.pravatar.cc/60?img=${a.i}`;
    im.style.left=a.x+"%"; im.style.top=a.y+"%";
    el.appendChild(im);
  });
})();

// ---- Stewardship glowing pillar sparkles ----
(function(){
  const el = document.querySelector(".viz-steward .glowbar");
  if(!el) return;
  for(let i=0;i<14;i++){
    const s=document.createElement("span");
    s.className="spk";
    s.style.left=Math.random()*100+"%";
    s.style.top=(Math.random()*70+20)+"%";
    s.style.opacity=(Math.random()*0.6+0.3).toFixed(2);
    el.appendChild(s);
  }
})();

// ---- Sticky topbar ----
(function(){
  const topbar=document.getElementById("topbar");
  if(!topbar) return;
  const onScroll=()=>topbar.classList.toggle("scrolled", window.scrollY>40);
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
})();

// ---- Menu overlay ----
(function(){
  const overlay=document.getElementById("menuOverlay");
  const openBtn=document.getElementById("menuOpen");
  const closeBtn=document.getElementById("menuClose");
  if(!overlay||!openBtn) return;
  const open=()=>{overlay.classList.add("open");document.body.classList.add("menu-open");openBtn.setAttribute("aria-expanded","true");overlay.setAttribute("aria-hidden","false");};
  const close=()=>{overlay.classList.remove("open");document.body.classList.remove("menu-open");openBtn.setAttribute("aria-expanded","false");overlay.setAttribute("aria-hidden","true");};
  openBtn.addEventListener("click", open);
  closeBtn && closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && overlay.classList.contains("open")) close(); });
  window.__closeMenu=close;
})();

// ---- Smooth-scroll for all in-page anchors (offset for fixed bar) ----
(function(){
  const overlay=document.getElementById("menuOverlay");
  function scrollToEl(target){
    const y=target.getBoundingClientRect().top+window.scrollY-88;
    window.scrollTo({top:y, behavior:"smooth"});
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", e=>{
      const href=a.getAttribute("href");
      if(!href || href[0]!=="#") return;
      e.preventDefault();
      const target = href.length>1 ? document.querySelector(href) : null;
      const wasOpen = overlay && overlay.classList.contains("open");
      if(wasOpen && window.__closeMenu) window.__closeMenu();
      if(!target) return;
      if(wasOpen){
        setTimeout(()=>requestAnimationFrame(()=>scrollToEl(target)), 160);
      } else {
        scrollToEl(target);
      }
    });
  });
})();

// ---- Plan-select toast ----
(function(){
  const toast=document.createElement("div");
  toast.className="toast";
  document.body.appendChild(toast);
  let t;
  function show(msg){ toast.innerHTML='<span class="dot"></span>'+msg; toast.classList.add("show"); clearTimeout(t); t=setTimeout(()=>toast.classList.remove("show"), 3400); }
  document.querySelectorAll("[data-plan]").forEach(b=>{
    b.addEventListener("click", e=>{ e.preventDefault(); show("\u201C"+b.dataset.plan+"\u201D plan selected \u2014 we\u2019ll be in touch."); });
  });
})();

// ---- Pro plan sparkle starfield ----
(function(){
  const el = document.getElementById("spark");
  if(!el) return;
  for(let i=0;i<26;i++){
    const s=document.createElement("i");
    const sz=Math.random()*2+1;
    s.style.width=s.style.height=sz+"px";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*55+"%";
    s.style.opacity=(Math.random()*0.6+0.2).toFixed(2);
    el.appendChild(s);
  }
})();
