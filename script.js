document.addEventListener("DOMContentLoaded", function () {

  function revealtimeline() {
    var timelineItems = document.querySelectorAll('.timeline-item');
    var windowHeight = window.innerHeight;
    var elementVisible = 150;

    timelineItems.forEach(function (item) {
      var elementTop = item.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  }

  function revealbar() {
    var barItems = document.querySelectorAll('.progress-bar');
    var windowHeight = window.innerHeight;
    var elementVisible = 50;

    barItems.forEach(function (item) {
      var elementTop = item.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        item.classList.add('show');
        item.style.width = item.getAttribute('data-width');
      } else {
        item.classList.remove('show');
        item.style.width = '0';
      }
    });
  }

  function flyball() {

    const ball2 = document.getElementById("ball2");
    const nobball2 = document.getElementById("nobball2");
    const nobball3 = document.getElementById("nobball3");

    ball2.addEventListener("click", () => {
      ball2.style.animation = "flyBall2 2s ease-in-out forwards";

      setTimeout(() => {
        ball2.style.animation = "flyBall2 2s ease-in-out forwards";
      }, 10);
    });

    nobball2.addEventListener("click", () => {
      nobball2.style.animation = "flynobBall2 2s ease-in-out forwards";

      setTimeout(() => {
        nobball2.style.animation = "flynobBall2 2s ease-in-out forwards";
      }, 10);
    });

    nobball3.addEventListener("click", () => {
      nobball2.style.animation = "flynobBall3 2s ease-in-out forwards";

      setTimeout(() => {
        nobball3.style.animation = "flynobBall3 2s ease-in-out forwards";
      }, 10);
    });

  }

  window.addEventListener('scroll', function () {
    revealtimeline();
    revealbar();
  });

  window.addEventListener('resize', function () {
    revealtimeline();
    revealbar();
  });

  // Initial check on page load
  
  revealtimeline();
  revealbar();
  flyball(); // Initialisiere die flyball-Funktion

});
