// Contact form AJAX submission (Formspree)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            status.textContent = 'Sending...';
            const data = new FormData(form);
            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    status.textContent = 'Thank you! Your message has been sent.';
                    form.reset();
                } else {
                    status.textContent = 'Oops! There was a problem. Please try again.';
                }
            } catch {
                status.textContent = 'Network error. Please try again.';
            }
        });
    }
});
// Smooth scrolling and responsive nav

document.addEventListener('DOMContentLoaded', function () {
    // Typing animation for title
    const typedTitle = document.getElementById('typed-title');
    const cursor = document.querySelector('.typed-cursor');
    const titles = [
        'Lecturer',
        'AI & ML Researcher',
        'Empowering Future Innovators'
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let typing = true;
    function typeTitle() {
        if (typing) {
            if (charIndex < titles[titleIndex].length) {
                typedTitle.textContent += titles[titleIndex][charIndex];
                charIndex++;
                setTimeout(typeTitle, 70);
            } else {
                typing = false;
                setTimeout(typeTitle, 1200);
            }
        } else {
            if (charIndex > 0) {
                typedTitle.textContent = titles[titleIndex].slice(0, charIndex - 1);
                charIndex--;
                setTimeout(typeTitle, 35);
            } else {
                typing = true;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(typeTitle, 400);
            }
        }
    }
    if (typedTitle) typeTitle();
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Responsive nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Fade-in animation on scroll
    const fadeEls = document.querySelectorAll('.fade-in');
    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.92;
        fadeEls.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add('animated');
                el.style.opacity = 1;
                el.style.transform = 'none';
            }
        });
    };
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
