// ===========================
// Portfolio Script - Updated
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  /* =====================
     Contact Form (Formspree)
  ====================== */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "Sending...";
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          status.textContent = "Thank you! Your message has been sent.";
          form.reset();
        } else {
          status.textContent = "Oops! There was a problem. Please try again.";
        }
      } catch {
        status.textContent = "Network error. Please try again.";
      }
    });
  }

  /* =====================
     Typing Animation for Title
  ====================== */
  const typedTitle = document.getElementById("typed-title");
  const cursor = document.querySelector(".typed-cursor");
  const titles = [
    "Lecturer",
    "AI & ML Researcher",
    "Empowering Future Innovators",
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeTitle() {
    if (!typedTitle) return;

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

  ====================== */
// Smooth scrolling for internal links with header offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const yOffset = -80; // height of your fixed header
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});


  /* =====================
     Responsive Navigation Toggle
  ====================== */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* =====================
     Fade-In Animation on Scroll
  ====================== */
const fadeEls = document.querySelectorAll(".fade-in");
const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  fadeEls.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("animated");
      el.style.opacity = 1;
      el.style.transform = "none";
    }
  });
};
window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();


  /* =====================
     Back to Top Button
  ====================== */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

/* Smart Navbar: hide on scroll down, show near top or when mouse at top */
const header = document.querySelector("header");
let lastScroll = 0;

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > 150) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});

document.addEventListener("mousemove", (e) => {
  if (e.clientY <= 100) {
    header.classList.remove("hidden");
  }
});


