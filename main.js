import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 首頁/精選文章/Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 48,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
