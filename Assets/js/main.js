function imgGallery() {
  const mainImg = document.querySelector('.details_img'),
   smallImg = document.querySelectorAll('.details_small-img');

smallImg.forEach((img) => {
  img.addEventListener('click' , function () {
    mainImg.src = this.src;
  });
}) ;  
}

imgGallery();

var swiper = new Swiper(".swiper", {
  spaceBetween:24,
  loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
});

var swiperProducts = new Swiper('.new_container', {
  spaceBetween:24,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll ('[content]');

tabs.forEach((tab)=> {
  tab.addEventListener('click' , ()=> {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});