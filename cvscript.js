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

  



function backgroundfade() {
  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollPosition / documentHeight;

    const background2 = document.querySelector('.background');
    background2.style.opacity = 0.5 + scrollRatio * 2;

    const background3 = document.querySelector('.background-t');
    background3.style.opacity = scrollRatio * 2;

    const background4 = document.querySelector('.background-k');
    background4.style.opacity = scrollRatio * 0.95;
  })
}






window.addEventListener('scroll', function () {
  revealtimeline();
  revealbar();
  backgroundfade();
});

window.addEventListener('resize', function () {
  revealtimeline();
  revealbar();

});

revealtimeline();
revealbar();
backgroundfade();

})