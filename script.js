// Swiper para Resultados dos Pacientes
const swiperPacientes = new Swiper(".mySwiperPacientes", {
  loop: true,
  autoplay: {
    delay: 500, // 3 segundos por slide
    disableOnInteraction: false,
  },
  speed: 800, // velocidade da transição
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1, // padrão (mobile)
  spaceBetween: 20, // espaçamento entre imagens
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30, // no desktop pode dar mais espaço
    },
  },
});

// Swiper para Conquistas
const swiperConquistas = new Swiper(".mySwiperConquistas", {
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
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
// Config base
const particlesConfig = {
  background: { color: "#000" },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.5 } },
      push: { quantity: 4 }
    }
  },
}
