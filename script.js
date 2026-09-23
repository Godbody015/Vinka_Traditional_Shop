function goPage(name){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('nav.links button').forEach(b => b.classList.toggle('active', b.dataset.page === name));
  window.scrollTo({top:0, behavior:'smooth'});
}
function filterProducts(cat, btn){
  document.querySelectorAll('.filter-row button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#product-grid .p-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}
