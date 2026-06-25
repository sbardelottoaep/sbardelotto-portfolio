// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuButton = document.getElementById("menuButton");
const navLinks   = document.getElementById("navLinks");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", false);
  })
);

// Fade-in on scroll
const fadeItems = document.querySelectorAll(".fade-in");
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
fadeItems.forEach(el => observer.observe(el));

// Inline video player — click thumb → replace with iframe, plays immediately
document.querySelectorAll(".inline-thumb").forEach(thumb => {
  function play() {
    const videoId = thumb.dataset.video;
    const player  = thumb.closest(".inline-player");
    const wrap    = player.querySelector(".inline-iframe-wrap");
    const iframe  = wrap.querySelector(".inline-iframe");

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    thumb.style.display = "none";
    wrap.removeAttribute("hidden");
  }

  thumb.addEventListener("click", play);
  thumb.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") play(); });
});
