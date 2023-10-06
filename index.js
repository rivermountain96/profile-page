$(document).ready(function () {
  $(
    'a[href="#about"],a[href="#skills"], a[href="#portfolio"], a[href="#contact"]'
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
});
