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

    // Modal functionality
const modalContent = {
  // Scholarships
  scholarship1: {
    title: "Fully Funded Masters in the USA",
    description: "Deadline: December 1, 2023",
    details: "This scholarship covers full tuition, living expenses, and travel costs for outstanding students pursuing master's degrees in STEM fields. Eligibility requires a minimum 3.5 GPA and two recommendation letters."
  },
  scholarship2: {
    title: "Undergraduate Scholarships in Canada",
    description: "Deadline: November 15, 2023",
    details: "Open to international students from developing countries. Covers 50% of tuition fees for undergraduate programs in social sciences. Requires proof of financial need."
  },
  
  // Jobs
  job1: {
    title: "Software Engineer at Google",
    description: "Location: Remote | Full-time",
    details: "Requirements: 3+ years experience with Python/Java, strong understanding of algorithms. Benefits include health insurance, stock options, and flexible working hours."
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');

  // Handle Learn More buttons
  document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', function() {
      const itemId = this.dataset.modal;
      const content = modalContent[itemId];
      
      document.querySelector('.modal-title').textContent = content.title;
      document.querySelector('.modal-description').textContent = content.description;
      document.querySelector('.modal-details').textContent = content.details;
      modal.style.display = 'block';
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Original navigation toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if(hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
  });