

const picturesSwiper = new Swiper('.pictures__swiper', {
    speed: 700,
    spaceBetween: 0,
    loop:true,
  });

  const portfolioSwiper = new Swiper('.portfolioSwiper', {
    speed: 700,
    spaceBetween: 20,
    slidesPerView:3.5,
    loop:true,
    pagination: {
      el: '.portfolioSwiper_pagination',
    },
    navigation: {
      nextEl: '.portfolioSwiper_navNext',
      prevEl: '.portfolioSwiper_navPrev',
    },
    pagination: {
      el: ".portfolioSwiper_pagination",
      clickable: true,
      dynamicBullets: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3.5,
      },
      1500: {
        slidesPerView: 4.5,
      }
    }
  });

  const commentsSwiper = new Swiper('.commentsSwiper', {
    speed: 700,
    spaceBetween: -50,
    slidesPerView:1.5,
    loop:true,
    parallax:true,
    autoplay: true,
    delay: 1000,
    centeredSlides: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1.5,
      },
    }
  });

  const presentsSwiper = new Swiper('.presents__swiper', {
    speed: 1000,
    spaceBetween: 20,
    slidesPerView:4.5,
    autoplay: true,
    delay: 500,
    loop:true,
    breakpoints: {
      300: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 3.5,
      },
      1500: {
        slidesPerView: 4.5,
      }
    }
  });