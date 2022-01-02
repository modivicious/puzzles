$(function () {
  $(".photos__slider").slick({
    dots: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg width="28" height="67" viewBox="0 0 28 67" fill="none"><path d="M27 66L1 33.5L27 1" stroke="#BFCBCF"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="28" height="67" viewBox="0 0 28 67" fill="none"><path d="M1 66L27 33.5L1 1" stroke="#BFCBCF"/></svg></button>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
        },
      },
    ],
  });

  function toggleMenu() {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu .overlay").toggleClass("overlay--active");
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".socials").toggleClass("socials--active");
    $("body").toggleClass("hide-overflow");
  }

  $(".menu__btn").on("click", () => toggleMenu());
  $(".menu .overlay").on("click", () => toggleMenu());

  var lastScroll = 0;
  const header = document.querySelector(".header");

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  window.addEventListener("scroll", () => {
    if (screenWidth < 769) {
      if (scrollPosition() > screenHeight)
        header.classList.add("header--fixed");
      else header.classList.remove("header--fixed");

      if (scrollPosition() > lastScroll || scrollPosition() < screenHeight)
        //scroll down
        header.classList.remove("header--pinned");
      else if (scrollPosition() < lastScroll)
        //scroll up
        header.classList.add("header--pinned");
    }
    lastScroll = scrollPosition();
  });


  // logo animation
  var logo = document.querySelector('.menu__logo');

  function getAllElementsAttr(elem, attr) {
    var array = [];
    elem.forEach((e) => {
      array.push(e.getAttribute(attr));
    });
    return array;
  }

  function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }

  function setValue(elem, attr, array, index) {
    var value = array[index];
    array.splice(index, 1);
    elem.setAttribute(attr, value);
  }

  function changeAttributes(elemsArray, valuesArray, attr) {
    elemsArray.forEach((e) => {
      var randomIndex = getRandomIndex(valuesArray);
      setValue(e, attr, valuesArray, randomIndex);
    });
  }

  function puzzlesShuffle() {
    var paths = document.querySelectorAll('.puzzle');
    var colors = getAllElementsAttr(paths, 'fill');
    changeAttributes(paths, colors, 'fill');
  }

  setTimeout(() => {
    for (var i = 0; i < 2; i++) setTimeout(() => puzzlesShuffle(), i * 500);
  }, 620)

  logo.addEventListener("mouseenter", puzzlesShuffle);
});
