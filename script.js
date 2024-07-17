var listArray = ["","","", "",""];

const swiper = new Swiper('.swiper', {
  // autoplay: {
  //   delay: 5000,
  // },
  autoplayDisableOnInteraction: false,
  slidesPerView: 1,        
  autoHeight: true,
  loop: true,
  observer: true,
  observeParents: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-100%", 0, -1],
    },
    next: {
      translate: ["20%", 0, 0],
    },
  },
  watchSlidesProgress: true,
  watchOverFlow: true,
  simulateTouch: true,
  // spaceBetween: 19,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    type: 'bullets',
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
      },
    },
  on: {
    slideChangeTransitionStart: function () {
      const activeIndex = this.activeIndex;
      const slides = this.slides;

      slides.forEach((slide, index) => {
        const textElements = slide.querySelectorAll('.text-element');
        if (index === activeIndex) {
          textElements.forEach(element => element.classList.add('textTransform'));

        } else {
          textElements.forEach(element => element.classList.remove('textTransform'));
        }
      });
    },
  },
});


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const closeBtn = document.getElementById('closeBtn')

btn.addEventListener('click', () => {
  nav.classList.remove('close')
  nav.classList.remove('hidden')
  nav.classList.add('open')
})

closeBtn.addEventListener('click', () => {
  nav.classList.add('close')
  nav.classList.remove('open')
})

