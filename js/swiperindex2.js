var swiperHead = new Swiper(".swiper-headline-news-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerSlide: "true",
  grabCursor: "true",
  fade:"true",
  // breakpoints: {
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },

  //   720: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },

  //   900: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay:{
    delay:6000,
    disableOnInteraction:true,
  }
});
var swiperGeneralNews = new Swiper(".swiper-general-news-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerSlide: "true",
  grabCursor: "true",
  fade:"true",
  // breakpoints: {
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },

  //   720: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },

  //   900: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay:2000,
    disableOnInteraction:false,
    pauseOnMouseEnter:true
  }
});