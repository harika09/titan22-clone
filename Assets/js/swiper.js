// ===== JS SWIPER ==== //
var mySwiper = new Swiper(".swiper-containers", {
  // Optional parameters
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: "auto",
  spaceBetween: 10,
  direction: "horizontal",
  loop: true,

  //AutoPlay
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  //Min-width
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});
