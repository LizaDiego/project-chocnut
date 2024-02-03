var swiper = new Swiper('.review-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  pagination: {
    el: '.review-swiper-pagination',
    clickable: true,
  },
});
