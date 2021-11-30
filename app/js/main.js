$(function(){
  $(".photos__slider").slick({
    dots: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg width="28" height="67" viewBox="0 0 28 67" fill="none"><path d="M27 66L1 33.5L27 1" stroke="#BFCBCF"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="28" height="67" viewBox="0 0 28 67" fill="none"><path d="M1 66L27 33.5L1 1" stroke="#BFCBCF"/></svg></button>',
  });
});