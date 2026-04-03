

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




const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    // Open current
    if (!isActive) {
      item.classList.add("active");
      item.querySelector(".icon").textContent = "−";
    }
  });
});