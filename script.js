function scrollToSection() {
    document.getElementById('about-me').scrollIntoView({
        behavior: 'smooth'
    });
}



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });

// JavaScript for Lightbox Functionality
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('show');
  document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('show');
}
