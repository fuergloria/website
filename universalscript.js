document.addEventListener("DOMContentLoaded", function () {

  let lastScrollTop = 0;
  let menuExpandedByClick = false;

  

  
  function toggleMenuscroll() {
    const currentScrollTop = window.scrollY;
    const items = document.querySelector('.second');
    const dropdown = document.querySelector('.first');

    if (!items) {
      console.error("Element with class 'second' not found");
      return;
    }

    if(!dropdown){
      console.error("Element with class 'first' not found");
    }

    const isMobileView = window.innerWidth <= 768; // Check if screen width is 768px or less

    if(menuExpandedByClick){
      menuExpandedByClick = false;
      return;
    }

    if (isMobileView) {
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        items.classList.remove('noshow');
        dropdown.classList.add('show');
      }
      else if(currentScrollTop===0){
        items.classList.add('noshow');
        dropdown.classList.remove('show');
      }
      // else: Scrolling up, no need to show menu since 'show' state should be managed by toggleMenu click
    }
     else {
      if (currentScrollTop > lastScrollTop) {
        items.classList.add('noshow');
        dropdown.classList.add('show');
        // Scrolling down, handle differently if needed for desktop view
      } else if(currentScrollTop===0){
        items.classList.remove('noshow');
        dropdown.classList.remove('show');
        // Scrolling up, handle differently if needed for desktop view
      }
    }

    lastScrollTop = currentScrollTop;
  }

  function toggleMenu() {
    const menu = document.querySelector('.first');
    const items = document.querySelector('.second');

    if (!menu) {
      console.error("Element with class 'first' not found");
      return;
    }

    if (!items) {
      console.error("Element with class 'second' not found");
      return;
    }

    menu.addEventListener('click', () => {
      items.classList.toggle('noshow');
      menuExpandedByClick = true;
    });
  }


  

  window.addEventListener('scroll', function () {
   toggleMenuscroll();

  });

  toggleMenu();
})


