//= components/swiper-bundle.min.js
//= components/scrollHeader.js
//= components/valueAccordion.js
//= components/scrollSectionActiveLink.js
//= components/showScrollUp.js

var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
