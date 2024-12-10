const marqueeWrap = document.querySelector('.marquee_wrap');
const originalContent = marqueeWrap.innerHTML;


while (marqueeWrap.scrollWidth < window.innerWidth * 2) {
    marqueeWrap.innerHTML += originalContent;
}
var swiper = new Swiper(".matchSwiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: {
            slidesPerView: 2,
           
          },
        
        992: {
          slidesPerView: 3,
         
        },
        1600: {
          slidesPerView: 4,
         
        },
      },
    navigation: {
      nextEl: ".swiper-1-next",
      prevEl: ".swiper-1-prev",
      
    },
  });
  var swiper2 = new Swiper(".newsSwiper", {
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
      768: {
          slidesPerView: 2,
         
        },
      
      992: {
        slidesPerView: 3,
       
      },
     
    },
    navigation: {
      nextEl: ".swiper-2-next",
      prevEl: ".swiper-2-prev",
    },
  });
  var swiper3 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
          slidesPerView: 2,
         
        },
      
      992: {
        slidesPerView: 3,
       
      },
      1200: {
        slidesPerView: 4,
       
      },
     
    },

    navigation: {
      nextEl: ".swiper-3-next",
      prevEl: ".swiper-3-prev",
    },
  });