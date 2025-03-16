document.addEventListener('DOMContentLoaded', function () {

    const navToggle = document.createElement('button');
    navToggle.innerText = 'Menu';
    navToggle.classList.add('nav-toggle');
    document.querySelector('header').appendChild(navToggle);
  
    const navMenu = document.querySelector('nav ul');
  
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  

    const contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        alert(`Thank you, ${name}! Your message has been sent.`);
  
        // Clear the form
        contactForm.reset();
      });
    }
  });