
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    //Breakpoints
    breakpoints:{
      600:{
          slidesPerView:1,
          slidesPerGroup:1,
          allowSlideNext:true,
          allowSlidePrev:true,
      },
      1000: {
          slidesPerView:3,
          slidesPerGroup:3,
          allowSlideNext:true,
          allowSlidePrev:true,
      }
  }

  });
  
  // You can also add custom logic for changing slides with mouse events
  swiperContainer.addEventListener('mousedown', () => {
    swiper.slideNext(); // Go to the next slide on mouse click
  });
