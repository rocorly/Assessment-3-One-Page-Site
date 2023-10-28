/* Scroll Events - Navigation Bar */

/* line 4-13 selects id "menu", Const defines variables under "menu" are tied scroll event. */
const nav = document.querySelector("menu");

const activeMenu = () => {
  const elem = document.querySelector('.active');
  const home = document.querySelector('#home_pg');
  const back = document.querySelector('#background_pg')
  const sum = document.querySelector('#summary_pg')
  const timeline = document.querySelector('#timeline_pg');
  const stats = document.querySelector('#stat_pg');
  let scrollPos = window.scrollY;

  /* lines 18-57 select class active(navigation highlight) and changes once scrolling
    down to the according section. Removes 'active' adds changes when scrollPos condition is met */

  if(scrollPos < 800) {
    home.classList.add('active');
    back.classList.remove('active');
    return;

  } else if (scrollPos < 2000) {
    back.classList.add('active');
    sum.classList.remove('active');
    home.classList.remove('active');
    timeline.classList.remove('active');
    stats.classList.remove('active');
    return;

  } else if (scrollPos < 3000) {
    sum.classList.add('active');
    back.classList.remove('active');
    timeline.classList.remove('active');
    stats.classList.remove('active');
    return;

  } else if (scrollPos < 4000) {
    sum.classList.remove('active');
    back.classList.remove('active');
    timeline.classList.add('active');
    stats.classList.remove('active');
    return;
  
  } else if (scrollPos < 6000) {
  sum.classList.remove('active');
  back.classList.remove('active');
  home.classList.remove('active');
  timeline.classList.remove('active');
  stats.classList.add('active');
  return;
}

if((elem && scrollPos < 800) || elem) {
  elem.classList.remove('active');
}
};

/* Sticky Navigation - Lines 61-71. */

/* activeMenu(Sticky Nav) function execute on event type scroll and active on click. - Lines 62-71*/
window.addEventListener('scroll', activeMenu);
window.addEventListener('click', activeMenu);
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  } 
};

/* FlipCards. */

/* Select all elements ".hidden" forEach loop perform actions toggle "flipped" on event type 'click'. These actions manipulate the DOM toggling
class "card__inner" and "card__inner flipped" Lines 77-84 */
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const card = document.querySelectorAll(".card__inner");
function flipCard() {
  this.classList.toggle("flipped");
}
card.forEach((card) => card.addEventListener("click", flipCard));

/* Slideshow / carousel */

/* Slides(SlideFace) Slide Display. Function nextSlide are prev and next buttons.
Lines 90-95*/
let slideFace = 1;
showSlides(slideFace);

function nextSlide(n) {
  showSlides((slideFace += n));
}

/* Image Control. For Loop scroll through image and select the points(dots). 
Array access to show and remove slide when slide is changed. Lines 100-122*/

function currentSlide(n) {
  showSlides((slideFace = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let points = document.getElementsByClassName("point");
  if (n > slides.length) {
    slideFace = 1;
  }
  if (n < 1) {
    slideFace = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < points.length; i++) {
    points[i].className = points[i].className.replace(" on", "");
  }
  slides[slideFace- 1].style.display = "block";
  [slideFace - 1].className += " on";
};

