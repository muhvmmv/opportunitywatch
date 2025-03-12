document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      // Highlight active section in navigation
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');
  
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
  
      // Hide/Show header on scroll
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
      } else {
        // Scrolling up
        header.classList.remove('hidden');
      }
      lastScrollY = window.scrollY;
    });
  });
