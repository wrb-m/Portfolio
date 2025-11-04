(function(){
  const links = document.querySelectorAll('.navlinks a');
  const here = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const file = a.getAttribute('href').split('/').pop();
    if((here==='index.html' && (file===''||file==='index.html')) || file===here){
      a.classList.add('active');
    }
  });
  const y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }
})();

