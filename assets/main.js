

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {

        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

// Slick version 1.5.8




