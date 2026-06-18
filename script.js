const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const fadeItems = document.querySelectorAll(".fade-in");

document.querySelector("#year").textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeItems.forEach((item) => observer.observe(item));

// VIDEO THUMBNAILS + MODAL
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoIframe");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

function openModal(videoId) {
  if (!videoId) return;

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  iframe.src = "";
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".work-card").forEach((card) => {
  const videoId = card.dataset.video;
  const thumb = card.querySelector(".thumb");
  const button = card.querySelector(".view-video-btn");

  if (!videoId || !thumb || !button) return;

  thumb.style.backgroundImage =
    `linear-gradient(to top, rgba(10,11,13,.38), rgba(10,11,13,.02)), ` +
    `url("https://img.youtube.com/vi/${videoId}/maxresdefault.jpg")`;

  thumb.addEventListener("click", () => openModal(videoId));
  button.addEventListener("click", () => openModal(videoId));
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
