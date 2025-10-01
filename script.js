document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', ()=> navLinks.classList.toggle('show'));
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
      }
    });
  });
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  window.openModal = function(key){
    let html = '';
    if(key==='mit'){
      html = `
        <h2>Aplikasi Manajemen Pendaftaran Lomba MIT Week</h2>
        <p>Detail: Form pendaftaran, dashboard admin, export peserta.</p>
        <ul>
          <li>Fitur: Pendaftaran, Kelompok/Category, Export CSV</li>
        </ul>
      `;
    } else if(key==='play'){
      html = `
        <h2>Manajemen Tiket Mini Playground</h2>
        <p>Detail: Pembelian tiket, manajemen harga/durasi, laporan kunjungan.</p>
        <ul>
          <li>Fitur: CRUD tiket, Search Cepat</li>
        </ul>
      `;
    } else if(key==='hot'){
      html = `
        <h2>Manajemen Toko HotWheels</h2>
        <p>Detail: Inventaris, kasir sederhana, laporan penjualan, kategori barang.</p>
        <ul>
          <li>Fitur: CRUD produk, Search Cepat</li>
        </ul>
      `;
    }
    modalContent.innerHTML = html;
    modal.setAttribute('aria-hidden','false');
  }
  modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true') });
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold:0.12});

  document.querySelectorAll('.fade-in').forEach(el=> observer.observe(el));
  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  const sectObserver = new IntersectionObserver((ents)=>{
    ents.forEach(ent=>{
      if(ent.isIntersecting){
        navItems.forEach(i=> i.classList.toggle('active', i.getAttribute('href') === `#${ent.target.id}`));
      }
    })
  }, {threshold:0.45});
  sections.forEach(s=> sectObserver.observe(s));

});
const faders = document.querySelectorAll('.fade-section');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  fadeObserver.observe(fader);
});
