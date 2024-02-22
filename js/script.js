// Dropdown Menu
const menuHamburger = document.querySelector('#menu-hamburger');
const menuDropdown = document.querySelector('#menu-dropdown');

const containerRotulo = document.querySelector('#container-rotulo');

menuHamburger.addEventListener('click', () => {
    menuDropdown.classList.toggle('active');
    
    const isActive = menuDropdown.classList.contains('active');

    if(isActive) {
        menuHamburger.style.backgroundImage = "url('../img/menu-white.svg')";
        containerRotulo.style.backgroundColor = "red";
    } else {
        menuHamburger.style.backgroundImage = "url('../img/menu.svg')";
        containerRotulo.style.backgroundColor = "#ffffff";
    }
});

// Swiper JS
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 8000,
    },
    speed: 800,
    spaceBetween: 100,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

// const swiperEl = document.querySelector('.swiper').swiper;
// setInterval(passarSlide, 5000);

// function passarSlide() {
//     swiperEl.slideNext();
// }

    