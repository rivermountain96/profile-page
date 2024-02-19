$(document).ready(function () {

  $(window).scroll(function() {
    
    // 링크별 위치 설정
    let aboutNav = $('header nav ul li:first-child a'), aboutNavSpan = $('header nav ul li:first-child a span');
    let skillsNav = $('header nav ul li:nth-child(2) a'), skillsNavSpan = $('header nav ul li:nth-child(2) a span');
    let projectsNav = $('header nav ul li:nth-child(3) a'), projectsNavSpan = $('header nav ul li:nth-child(3) a span');
    let contactNav = $('header nav ul li:nth-child(4) a'), contactNavSpan = $('header nav ul li:nth-child(4) a span');

    // 섹션 별 스크롤 높이 지정
    let scrollPosition = $(this).scrollTop() + 400;
    let aboutSectionHeight = $('#about').offset().top;
    let skillsSectionHeight = $('#skills').offset().top;
    let projectsSectionHeight = $('#projects').offset().top;
    let contactSectionHeight = $('#contact').offset().top;
    

    if (scrollPosition >= aboutSectionHeight && scrollPosition < skillsSectionHeight) {
      // 현재 스크롤 위치가 #about 섹션의 위치와 #skills 섹션의 위치 사이에 있을 때
      aboutNav.css("color", "#eeeeee");
      aboutNavSpan.css("color", "#eeeeee");
      skillsNav.css("color", "#393e46");
      skillsNavSpan.css("color", "#393e46");
      projectsNav.css("color", "#393e46");
      projectsNavSpan.css("color", "#393e46");
      contactNav.css("color", "#393e46");
      contactNavSpan.css("color", "#393e46");
    } else if (scrollPosition >= skillsSectionHeight && scrollPosition < projectsSectionHeight){
      // 현재 스크롤 위치가 #skills 섹션의 위치와 #projects 섹션의 위치 사이에 있을 때
      aboutNav.css("color", "#393e46");
      aboutNavSpan.css("color", "#393e46");
      skillsNav.css("color", "#eeeeee");
      skillsNavSpan.css("color", "#eeeeee");
      projectsNav.css("color", "#393e46");
      projectsNavSpan.css("color", "#393e46");
      contactNav.css("color", "#393e46");
      contactNavSpan.css("color", "#393e46");
    } else if (scrollPosition >= projectsSectionHeight && scrollPosition < contactSectionHeight){
      // 현재 스크롤 위치가 #projects 섹션의 위치와 #contact 섹션의 위치 사이에 있을 때
      aboutNav.css("color", "#393e46");
      aboutNavSpan.css("color", "#393e46");
      skillsNav.css("color", "#393e46");
      skillsNavSpan.css("color", "#393e46");
      projectsNav.css("color", "#eeeeee");
      projectsNavSpan.css("color", "#eeeeee");
      contactNav.css("color", "#393e46");
      contactNavSpan.css("color", "#393e46");
    } else {
      // 현재 스크롤 위치가 #contact에 있을 때
      aboutNav.css("color", "#393e46");
      aboutNavSpan.css("color", "#393e46");
      skillsNav.css("color", "#393e46");
      skillsNavSpan.css("color", "#393e46");
      projectsNav.css("color", "#393e46");
      projectsNavSpan.css("color", "#393e46");
      contactNav.css("color", "#eeeeee");
      contactNavSpan.css("color", "#eeeeee");
    }

  });

  // 클릭 시 해당 섹션으로 스크롤
  $('a[href="#about"], a[href="#skills"], a[href="#projects"], a[href="#contact"]').click(function (e) {
    e.preventDefault();
    let targetSection = $($(this).attr("href"));
    let targetOffset = targetSection.offset().top;

    // 미세한 위치 조정 (스킬 섹션의 아래쪽으로 70px 이동)
    targetOffset += 70;

    $("html, body").animate({
      scrollTop: targetOffset
    }, 1000);
  });

  // 바로 따라오는 curser 효과
  const circle = document.querySelector('#circle');

  circle.style.display = 'none';

  window.addEventListener('mousedown', () => {
    circle.classList.add('active'); // 마우스 왼쪽 버튼을 누르면 'active' 클래스 추가
  });

  window.addEventListener('mouseup', () => {
    circle.classList.remove('active'); // 마우스 왼쪽 버튼을 뗄 때 'active' 클래스 제거
  });

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    circle.style.display = 'block';
    circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;


  });



  // type 라이브러리
  new TypeIt("#topic_skills",  {
    speed: 175,
    deleteSpeed: 150,
    loop: false,
    waitUntilVisible: true,
  }).go();

  // topic_about2에 대한 TypeIt 인스턴스 생성
  new TypeIt("#topic_project", {
    speed: 175,
    deleteSpeed: 150,
    loop: false,
    waitUntilVisible: true,
  }).go();

  // 내가 바라본 나만의 장점
  new TypeIt(".myImg_h3", {
    speed: 175,
    deleteSpeed: 150,
    loop: false,
    waitUntilVisible: true,
    startDelay: 1000,
  }).go();

  /* text scroll 효과 */

  let pTag1 = $('.first_text_scroll');
  let pTag2 = $('.second_text_scroll');

  let textArr1 = 'This is Lee Kang San Portfolio, Hello Worlds.'.split(' ');
  let textArr2 = 'Where Ideas Come to Life: Explore My Portfolio.'.split(' ');

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element.html(element.html() + textArray[i] + '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  }
  initTexts(pTag1, textArr1);
  initTexts(pTag2, textArr2);

  let count1 = 0;
  let count2 = 0;

  function marqueeText(count, element, direction) {
    if (count > element[0].scrollWidth / 2) {
      element.css('transform', 'translateX(0)');
      count = 0;
    }
    element.css('transform', `translateX(${count * direction}px)`);
    return count;
  }

  function animate() {
    count1++;
    count2++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, 1);

    window.requestAnimationFrame(animate);
  }

  animate();



  /* swiper 라이브러리 */
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

  // About과 마찬가지로 홈페이지가 열리자마자 실행되도록 설정
  aboutMeAnimation(); 
  advantageAnimation(); 
  mainHistoryAnimation();

  /* 반응형 */
  if (window.matchMedia("(max-width: 480px)").matches) {
    let historyTitle = document.querySelector('.history_title');
    let h3Elements = historyTitle.querySelectorAll('h3');
    h3Elements.forEach(element => element.style.display = 'inline');
  }

  if (window.matchMedia("(max-width: 480px)").matches) {
    // 화면이 480px 이하인 경우에만 실행되도록 조건을 설정합니다.
    // TypeIt 라이브러리 인스턴스를 생성하기 전에 조건을 검사합니다.
    new TypeIt("#topic_skills",  {
        speed: 0,  // 실행되지 않도록 속도를 0으로 설정합니다.
        loop: false,
    });
    new TypeIt("#topic_project", {
        speed: 0,  // 실행되지 않도록 속도를 0으로 설정합니다.
        loop: false,
    });
    new TypeIt(".myImg_h3", {
        speed: 0,  // 실행되지 않도록 속도를 0으로 설정합니다.
        loop: false,
    });
}

});
