

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


  function sameheight(){
    const aboutmetext = document.getElementById('aboutmetext');
    const bildcontainerselbst = document.getElementById('bild-container-selbst');
  
    const textHeight = aboutmetext.offsetHeight;
    
  
    bildcontainerselbst.style.height = textHeight + 'px';

    
    
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
    sameheight();
    revealtimeline();
    revealbar();

  });
