

function showsidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hidesidebar(){
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'none';
}

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var sections = document.querySelectorAll('.planet');
    var currentSection = '';
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('#navbar ul li a').forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = '#131a37'; 
    } else {
      navbar.style.backgroundColor = 'rgba(52, 45, 50, 0.8)'; 
    }
  });
  