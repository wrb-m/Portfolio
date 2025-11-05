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

(function(){
  const map = {
    '': 'Home',             // when served as /Portfolio/
    'index.html': 'Home',
    'research.html': 'Research',
    'publications.html': 'Publications',
    'projects.html': 'Projects',
    'datasets.html': 'Datasets',
    'talks.html': 'Talks',
    'cv.html': 'CV',
    'contact.html': 'Contact'
  };
  const here = (location.pathname.split('/').pop() || '');
  if (map[here]) document.title = map[here] + '';
})();
gtag('config', 'G-BTPSF8WYK4', { 'anonymize_ip': true });


