document.addEventListener("DOMContentLoaded",function(){
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

  function toggleMenu() {

    const menu = document.querySelector('.nav-menu');
    const items = document.querySelectorAll('.nav-item');

    if(!menu){
      console.error("Element with class nav-menu not found");
      return;
    }

    if(items.length===0){
      console.error("Element with class nav-item not found");
      return;
    }

    menu.addEventListener('click', () => {
      items.forEach(item=>item.classList.toggle('show'));
    }
  )

    
    
  }
  
  window.addEventListener('scroll', function () {
    revealtimeline();
    revealbar();
  });

  window.addEventListener('resize', function () {
    revealtimeline();
    revealbar();
  });

  revealtimeline();
  revealbar();
  toggleMenu();
})