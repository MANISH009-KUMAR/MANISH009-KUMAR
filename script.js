// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Scroll progress
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scroll-progress').style.width = `${scrolled}%`;
});

// Scroll top button
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTop.style.display = window.scrollY > 100 ? 'block' : 'none';
});
scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate skill bars
window.addEventListener('scroll', () => {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.dataset.skill + '%';
    }
  });
});

// Project filter
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = category === 'all' || card.dataset.category === category ? 'block' : 'none';
    });
  });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (!email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  } else {
    alert('Message sent successfully!');
  }
});

// Modal popup
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
document.querySelectorAll('.view-project').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
