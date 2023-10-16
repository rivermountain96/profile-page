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
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* waypoint 라이브러리 */
  var skillPercentages = {
    HTML: 0,
    CSS: 0,
    Javascript: 0,
    jQuery: 0,
    React: 0,
    PHP: 0,
    Nodejs: 0,
    Laravel: 0,
    MySQL: 0,
    Bootstrap: 0,
    HWP: 0,
    Excel: 0,
    PowerPoint: 0,
    Figma: 0,
    Photoshop: 0,
  };

  // 애니메이션 퍼센트 증가
  function animateSkills() {
    $.each(skillPercentages, function (skill, startPercentage) {
      var endPercentage = parseInt(
        $(`.skill_${skill} p`).text().replace("%", "")
      );
      $({ percentage: startPercentage }).animate(
        { percentage: endPercentage },
        {
          duration: 2000,
          step: function () {
            $(`.skill_${skill} p`).text(Math.round(this.percentage) + "%");
          },
        }
      );
    });
  }

  // 라이브러리 구문
  $("#skills").waypoint(
    function () {
      animateSkills(); // section 에 도착했을때
      this.destroy();
    },
    {
      offset: "bottom-in-view", // 섹션의 하단이 화면 뷰의 하단과 일치할 때 트리거
    }
  );

  var aboutMeAnimation = function () {
    $(".About_info_1").addClass("animate-right");
    $(".About_info_2").addClass("animate-left");
  };

  var advantageAnimation = function () {
    $(".myImg1").addClass("animate-left");
    $(".myImg2").addClass("animate-up");
    $(".myImg_h3").addClass("animate-up");
    $(".myImg3").addClass("animate-right");
  };

  var mainHistoryAnimation = function () {
    $(".table").addClass("animate-up");
    $(".history_title").addClass("animate-up");
  };

  // Waypoints for different sections
  $(".About").waypoint(aboutMeAnimation, { offset: "50%" });
  $(".Adventage").waypoint(advantageAnimation, { offset: "50%" });
  $(".Mainhistory").waypoint(mainHistoryAnimation, { offset: "50%" });
});
