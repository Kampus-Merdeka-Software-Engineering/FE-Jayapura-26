var swiperHead = new Swiper(".swiper-headline-news-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerSlide: "true",
  grabCursor: "true",
  fade:"true",
  speed:2000,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay:{
    delay:6000,
    disableOnInteraction:false,
  },
  loop:true
});
var swiperGeneralNews = new Swiper(".swiper-general-news-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerSlide: "true",
  grabCursor: "true",
  fade:"true",
  speed:1000,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    740:{
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
    pauseOnMouseEnter:true
  },
  loop:true
});