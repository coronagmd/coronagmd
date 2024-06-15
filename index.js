// const scrollElements = document.querySelectorAll(".js-scroll");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });

// function toggleMenu() {
//   document.querySelector("#nav").classList.toggle("hide");
// }

const primaryNav = document.querySelector('.dropdown-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', false);
  } else {
    if (visibility === 'true') {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', true);
    }
  }
});

//1st slide
const slides = document.querySelectorAll('.pic');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    const translateXNum = 80 * (i - slide);
    let translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum;
    if (translateXNum === 0) {
      translateYNum = 0;
      rotateDeg = 0;
      grayscaleNum = 0;
      zIndexNum = 1;
      opacityNum = 100;
    } else if (translateXNum < 0) {
      translateYNum = 5;
      rotateDeg = -5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 20;
    } else {
      translateYNum = 5;
      rotateDeg = 5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 20;
    }
    s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
    s.style.filter = `grayscale(${grayscaleNum})`;
    s.style.zIndex = zIndexNum;
    s.style.opacity = `${opacityNum}%`;
  });
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//2nd slide
const slides1 = document.querySelectorAll('.pic1');
const btnRight1 = document.querySelector('.btn-right1');
const btnLeft1 = document.querySelector('.btn-left1');

let curSlide1 = 0;
const maxSlide1 = slides.length;

const goToSlide1 = function (slide) {
  slides1.forEach(function (s, i) {
    const translateXNum = 80 * (i - slide);
    let translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum;
    if (translateXNum === 0) {
      translateYNum = 0;
      rotateDeg = 0;
      grayscaleNum = 0;
      zIndexNum = 1;
      opacityNum = 100;
    } else if (translateXNum < 0) {
      translateYNum = 5;
      rotateDeg = -5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 20;
    } else {
      translateYNum = 5;
      rotateDeg = 5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 20;
    }
    s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
    s.style.filter = `grayscale(${grayscaleNum})`;
    s.style.zIndex = zIndexNum;
    s.style.opacity = `${opacityNum}%`;
  });
};
goToSlide1(0);

const nextSlide1 = function () {
  if (curSlide1 === maxSlide1 - 1) {
    curSlide1 = 0;
  } else {
    curSlide1++;
  }
  goToSlide1(curSlide1);
};

const prevSlide1 = function () {
  if (curSlide1 === 0) {
    curSlide1 = maxSlide1 - 1;
  } else {
    curSlide1--;
  }
  goToSlide1(curSlide1);
};

btnRight1.addEventListener('click', nextSlide1);
btnLeft1.addEventListener('click', prevSlide1);
