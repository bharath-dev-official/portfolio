// ============================================================
// script.js
// Small, beginner-friendly interactions for the portfolio.
// Every function below is written to be easy to read and tweak.
// ============================================================

// ---- 1. Data: skills list (edit this array to add/remove skills) ----
const skills = [
  "Core Java",
  "Java 8",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate",
  "MySQL",
  "Oracle SQL",
  "REST APIs",
  "OOP Concepts",
  "Postman",
  "Maven",
  "HTML / CSS / JavaScript"
];

// ---- 2. Build the skills grid from the array above ----
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  skills.forEach((skill) => {
    const chip = document.createElement("div");
    chip.className = "skill-chip";
    chip.innerHTML = `<span class="dot-bullet"></span>${skill}`;
    grid.appendChild(chip);
  });
}

// ---- 3. Typing effect in the hero terminal ----
function typeText(el, text, speed = 45) {
  let i = 0;
  el.textContent = "";
  function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

function startTerminalAnimation() {
  const line = document.getElementById("typedLine");
  if (!line) return;
  typeText(line, "Bharath P — Backend Developer (Fresher)");
}

// ---- 4. Mobile menu toggle ----
function setupMobileMenu() {
  const btn = document.getElementById("menuBtn");
  const tabbar = document.getElementById("tabbar");
  if (!btn || !tabbar) return;

  btn.addEventListener("click", () => {
    tabbar.classList.toggle("menu-open");
  });

  // Close the menu after a link is tapped
  document.querySelectorAll(".tab").forEach((link) => {
    link.addEventListener("click", () => {
      tabbar.classList.remove("menu-open");
    });
  });
}

// ---- 5. Highlight the nav tab for the section currently in view ----
function setupActiveTabOnScroll() {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const tabs = document.querySelectorAll(".tab");

  if (!sections.length || !tabs.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          tabs.forEach((tab) => {
            const matches = tab.getAttribute("href") === `#${id}`;
            tab.classList.toggle("active-tab", matches);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---- 6. Show/hide the "back to top" button ----
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---- 7. Run everything once the page has loaded ----
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  startTerminalAnimation();
  setupMobileMenu();
  setupActiveTabOnScroll();
  setupBackToTop();
});
