// JavaScript functionality for the portfolio website

// Loader
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
});

// Animate on scroll
function revealOnScroll() {
    document.querySelectorAll('.animate').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Dark/Light mode toggle
const themeSwitch = document.getElementById('themeSwitch');
if (themeSwitch) {
    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation for contact form
document.querySelector('#contactForm').addEventListener('submit', function (e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            if (filterValue === 'all' || project.classList.contains(filterValue)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Typewriter effect
const typewriterText = ["Hi, I'm Your Name.", "Web Developer.", "UI/UX Enthusiast.", "Let's Build Something Great!"];
let twIndex = 0, charIndex = 0, isDeleting = false;
function type() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    let current = typewriterText[twIndex];
    el.textContent = current.substring(0, charIndex) + (charIndex % 2 === 0 ? '|' : '');
    if (!isDeleting && charIndex < current.length) {
        charIndex++;
        setTimeout(type, 80);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 40);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) twIndex = (twIndex + 1) % typewriterText.length;
        setTimeout(type, 1000);
    }
}
type();

// Animated gradient background (simple example)
const canvas = document.getElementById('hero-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    let t = 0;
    function draw() {
        const w = canvas.width, h = canvas.height;
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, `hsl(${(t)%360},70%,60%)`);
        grad.addColorStop(1, `hsl(${(t+60)%360},70%,60%)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        t += 0.2;
        requestAnimationFrame(draw);
    }
    draw();
}

// Navbar highlight on scroll
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 80;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Bootstrap validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

// Animate skill bars on scroll
function animateSkills() {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('DOMContentLoaded', animateSkills);