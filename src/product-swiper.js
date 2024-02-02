var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    // tablet view
    768: {
      slidesPerView: 2.62,
      spaceBetween: 18,
    },
    // desktop view
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    // mobile view
    1: {
      slidesPerView: 1,
    },
  },
});
