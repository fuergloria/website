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

    const nobball2 = document.getElementById("nobball2");
    const nobball3 = document.getElementById("nobball3");


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
  /*
    function revealflower() {
      var vase = document.querySelectorAll('.flower');
      var windowHeight = window.innerHeight;
      var elementVisible = 2000;
  
      vase.forEach(function (item) {
        var elementTop = item.getBoundingClientRect().top;
  
        if (elementTop < windowHeight - elementVisible) {
          item.classList.add('show');
          item.style.clipPath='inset(0 0 0 0)';
        } else {
          item.classList.remove('show');
          item.style.clipPath='inset(100% 0 0 0)';
        }
      });
    }
  */

  function vanishflower() {
    const booty = document.getElementById('booty');
    const flower = document.querySelector('.flower');

    if(!flower){
      console.error("Element with class flower not found");
    }

    booty.addEventListener('click', () => {
  
      if (!flower.classList.contains('show')) {
        flower.classList.add('show');
      }
      else {
        flower.classList.remove('show');
      }

    })
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
  vanishflower();


});
