function toggleMenu(){document.getElementById('mobileNav').classList.toggle('open')}
function closeMenu(){document.getElementById('mobileNav').classList.remove('open')}
(function(){var p=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav-links a,.mobile-nav a').forEach(function(a){if(a.getAttribute('href')===p)a.classList.add('active')})})();
var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('revealed')})},{threshold:.08});
document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el)});
