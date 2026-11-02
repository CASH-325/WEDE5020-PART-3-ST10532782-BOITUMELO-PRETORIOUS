// Part 3 - ST10532782 Boitumelo Pretorious - All Functionality
document.addEventListener('DOMContentLoaded',()=>{
 // Dynamic Year SEO
 const yr=document.getElementById('year'); if(yr) yr.textContent=new Date().getFullYear();
 // Hamburger
 const ham=document.getElementById('hamburger'); const navUl=document.querySelector('nav ul');
 if(ham) ham.addEventListener('click',()=>navUl.classList.toggle('show'));
 // Accordions (About page)
 document.querySelectorAll('.accordion-header').forEach(h=>{
  h.addEventListener('click',()=>{h.nextElementSibling.classList.toggle('active'); h.classList.toggle('open')})
 });
 // Tabs (Products page)
 const tabBtns=document.querySelectorAll('.tab-btn'); const tabContents=document.querySelectorAll('.tab-content');
 tabBtns.forEach(b=>b.addEventListener('click',()=>{
  tabBtns.forEach(x=>x.classList.remove('active')); tabContents.forEach(c=>c.classList.remove('active'));
  b.classList.add('active'); document.getElementById(b.dataset.tab).classList.add('active');
 }));
 // Modal
 const modal=document.getElementById('modal'); const openModal=document.getElementById('openModal'); const closeModal=document.getElementById('closeModal');
 if(openModal) openModal.addEventListener('click',()=>modal.style.display='flex');
 if(closeModal) closeModal.addEventListener('click',()=>modal.style.display='none');
 window.addEventListener('click',(e)=>{if(e.target==modal) modal.style.display='none'});
 // Dynamic Product Loading + Search Filter (2.2)
 const products=[
  {name:"BMW 3 Series",price:"R800,000",img:"images/bmw-3series.jpg",cat:"sedan"},
  {name:"BMW X5",price:"R1,300,000",img:"images/bmw-x5.jpg",cat:"suv"},
  {name:"BMW M4",price:"R1,800,000",img:"images/bmw-m4.jpg",cat:"coupe"}
 ];
 const grid=document.getElementById('dynamic-grid');
 if(grid){
  function render(list){
   grid.innerHTML='';
   list.forEach(p=>{
    grid.innerHTML+=`<div class="card animate"><img src="${p.img}" srcset="${p.img} 480w, ${p.img} 800w" sizes="(max-width:768px) 100vw, 33vw" alt="${p.name} - BMW Pretoria dealer" class="card-image"><h3>${p.name}</h3><p>${p.price}</p><button onclick="document.getElementById('modal').style.display='flex'">Enquire</button></div>`;
   }); attachLightbox();
  }
  render(products);
  const search=document.getElementById('searchBox');
  if(search) search.addEventListener('input',()=>{
   const v=search.value.toLowerCase();
   render(products.filter(p=>p.name.toLowerCase().includes(v)||p.cat.includes(v)));
  });
 }
 // Lightbox
 function attachLightbox(){
  document.querySelectorAll('.card-image').forEach(img=>{
   img.addEventListener('click',()=>{
    const lb=document.createElement('div'); lb.className='lightbox';
    lb.innerHTML=`<img src="${img.src}"><span class="close-lightbox">&times;</span>`;
    lb.addEventListener('click',()=>lb.remove()); document.body.appendChild(lb);
   })
  });
 }
 attachLightbox();
 // Leaflet Map (Contact page)
 if(document.getElementById('map')){
  const map=L.map('map').setView([-25.7479,28.2293],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([-25.7479,28.2293]).addTo(map).bindPopup('BMW Pretoria - 123 Church St').openPopup();
 }
 // Form Validation + AJAX (Enquiry + Contact)
 function handleForm(formId){
  const form=document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit',(e)=>{
   e.preventDefault(); let valid=true;
   form.querySelectorAll('.error').forEach(el=>el.remove());
   const name=form.querySelector('[name=name]'); const email=form.querySelector('[name=email]'); const phone=form.querySelector('[name=phone]');
   const msg=form.querySelector('[name=message]');
   if(!name.value.trim()||name.value.length<2){showError(name,'Name min 2 chars'); valid=false}
   if(!email.value.includes('@')||!email.value.includes('.')){showError(email,'Valid email required'); valid=false}
   if(phone && !/^[0-9]{10}$/.test(phone.value)){showError(phone,'10 digit phone'); valid=false}
   if(!msg.value.trim()||msg.value.length<10){showError(msg,'Message min 10 chars'); valid=false}
   if(valid){
    const btn=form.querySelector('button'); btn.textContent='Sending...';
    setTimeout(()=>{ // AJAX simulation
     alert('Thank you '+name.value+'! Enquiry sent to info@bmwpretoria.co.za. Cost estimate: Will respond in 24h.');
     form.reset(); btn.textContent='Submit';
     if(formId==='contactForm'){window.location.href='mailto:info@bmwpretoria.co.za?subject=Contact&body='+encodeURIComponent(msg.value)}
    },1000);
   }
  });
 }
 handleForm('enquiryForm'); handleForm('contactForm');
 function showError(inp,txt){const p=document.createElement('p'); p.className='error'; p.style.color='red'; p.textContent=txt; inp.after(p)}
});