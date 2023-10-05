var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centerSlide: "true",
    grabCursor: "true",
    fade:"true",
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      720: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 4,
        spaceBetween: 40
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
      delay:2000,
      disableOnInteraction:false,
      pauseOnMouseEnter:true
    }
  });