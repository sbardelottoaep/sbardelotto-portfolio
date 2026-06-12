const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const fadeItems = document.querySelectorAll(".fade-in");

document.querySelector("#year").textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeItems.forEach((item) => observer.observe(item));

// VIDEO MODAL
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoIframe');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openModal(videoId) {
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

// Click on thumb or button
document.querySelectorAll('.work-card').forEach(card => {
  const videoId = card.dataset.video;
  if (!videoId) return;
  card.querySelector('.thumb').addEventListener('click', () => openModal(videoId));
  card.querySelector('.view-video-btn').addEventListener('click', () => openModal(videoId));
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
