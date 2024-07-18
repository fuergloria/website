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

  function backgroundfade(){
    document.addEventListener('scroll',()=>{
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollPosition/documentHeight;

      const background2 = document.querySelector('.background');
      background2.style.opacity = scrollRatio*4;

      const background3 = document.querySelector('.background-t');
      background3.style.opacity = scrollRatio;

      const background4 = document.querySelector('.background-k');
      background4.style.opacity = scrollRatio;
    })
  }

  function breakpoint(){
    var $targetElement = $('#breakpoint1');
    var scrollBreakpoint = $targetElement.offset().top + $targetElement.outerHeight();
    var hasStopped = false;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= scrollBreakpoint && !hasStopped) {
            hasStopped = true;
            $('html, body').animate({ scrollTop: scrollBreakpoint }, 0);
        } else if ($(window).scrollTop() < scrollBreakpoint) {
            hasStopped = false;
        }
    });
  }

    
    
  
  
  window.addEventListener('scroll', function () {
    revealtimeline();
    revealbar();
    backgroundfade();
  });

  window.addEventListener('resize', function () {
    revealtimeline();
    revealbar();
    breakpoint();
  });

  revealtimeline();
  revealbar();
  toggleMenu();
  backgroundfade();
  breakpoint();
})