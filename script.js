// Swiper inicialização
const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperPacientes = new Swiper(".mySwiperPacientes", {
  loop: true,
  autoplay: {
    delay: 2500, // tempo por slide
    reverseDirection: true,
    disableOnInteraction: false,
  },
  speed: 800, // transição
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1, // 👉 mostra 1 de cada vez
  spaceBetween: 20,
  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  }
});

// Atualiza ano no footer
document.getElementById("year").textContent = new Date().getFullYear();

// -------------------- MENU HAMBURGUER --------------------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
