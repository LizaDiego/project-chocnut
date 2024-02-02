var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
