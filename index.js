$(document).ready(function () {
  $(
    'a[href="#about"],a[href="#skills"], a[href="#projects"], a[href="#contact"]'
  ).click(function (e) {
    e.preventDefault();

    let targetSection = $($(this).attr("href"));

    $("html, body").animate(
      {
        scrollTop: targetSection.offset().top,
      },
      1000 // 1초 이동
    );
  });

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
