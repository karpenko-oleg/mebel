

const picturesSwiper = new Swiper('.pictures__swiper', {
    speed: 700,
    spaceBetween: 0,
    loop:true,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
  });

  const portfolioSwiper = new Swiper('.portfolioSwiper', {
    speed: 700,
    spaceBetween: 20,
    slidesPerView:3.5,
    autoplay: {
      delay: 1000,
    },
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
    spaceBetween: 20,
    slidesPerView:1.5,
    loop:true,
    parallax:true,
    autoplay: {
      delay: 2000,
    },
    centeredSlides: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 1.5,
      },
    }
  });

  const presentsSwiper = new Swiper('.presents__swiper', {
    speed: 1000,
    spaceBetween: 20,
    slidesPerView:4.5,
    autoplay: {
      delay: 500,
    },
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



  // открытие и закрытие меню бургера
  document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.getElementById('menu');
  
    burgerBtn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('open');
    });
  
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickOnBurgerBtn = burgerBtn.contains(event.target);
      if (!isClickInsideMenu && !isClickOnBurgerBtn && menu.classList.contains('open')) {
        menu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // pop-Up
    // Функция для открытия pop-up окна
    function openPopup() {
      document.getElementById("popup").style.display = "block";
    };
    // Функция для закрытия pop-up окна
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    };
//pop-up sale
  // Функция для отображения pop-up окна через определенное время
  function showPopupAfterDelay() {
    setTimeout(function() {
      document.getElementById("popup__sale").style.display = "block";
    }, 30000); // Показать окно через 30 секунд (30000 миллисекунд)
  }
  // Функция для закрытия pop-up окна
  function closePopupSale() {
    document.getElementById("popup__sale").style.display = "none";
  }

  // Вызвать функцию для отображения pop-up окна через определенное время
  showPopupAfterDelay();
