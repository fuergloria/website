document.addEventListener("DOMContentLoaded", function () {

  let lastScrollTop = 0;
  let menuExpandedByClick = false;

  

  
  function toggleMenuscroll() {
    requestAnimationFrame(()=>{
      const currentScrollTop = window.scrollY;
    const items = document.querySelector('.nav-second');
    const dropdown = document.querySelector('.nav-first');

    if (!items) {
      console.error("Element with class 'nav-second' not found");
      return;
    }

    if(!dropdown){
      console.error("Element with class 'nav-first' not found");
    }

    const isMobileView = window.innerWidth <= 768; // Check if screen width is 768px or less

    if(menuExpandedByClick){
      menuExpandedByClick = false;
      return;
    }

    if (isMobileView) {
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        items.classList.remove('show');
        dropdown.classList.remove('noshow');
      }
      else if(currentScrollTop===0){
        
      }
      // else: Scrolling up, no need to show menu since 'show' state should be managed by toggleMenu click
    }
     else {
      if (currentScrollTop > lastScrollTop) {
        items.classList.add('noshow');
        dropdown.classList.add('show');
        // Scrolling down, handle differently if needed for desktop view
      } 
      else if(currentScrollTop===0){
        items.classList.remove('noshow');
        dropdown.classList.remove('show');
        // Scrolling up, handle differently if needed for desktop view
      }
    }

    lastScrollTop = currentScrollTop;

    });
    
  }

  function toggleMenu() {
    const menu = document.querySelector('.nav-first');
    const items = document.querySelector('.nav-second');

    const isMobileView = window.innerWidth <= 768;

    if (!menu) {
      console.error("Element with class 'nav-first' not found");
      return;
    }

    if (!items) {
      console.error("Element with class 'nav-second' not found");
      return;
    }

    


      menu.addEventListener('click', () => {

        if(isMobileView){
          items.classList.toggle('show');
         
        }
        else{
          items.classList.toggle('noshow');
          
        }

        menuExpandedByClick = true; 


      });

  
  }

  function testwindow(){
    const menu = document.querySelector('.nav-first');
    const items = document.querySelector('.nav-second');
    const isMobileView = window.innerWidth <= 768;

    if(isMobileView){
      menu.classList.remove('show');
      items.classList.remove('noshow');
    }
    else{
      menu.classList.remove('noshow');
      items.classList.remove('show');
    }
  }


  

  window.addEventListener('scroll', function () {
   toggleMenuscroll();

  });

  window.addEventListener('resize', testwindow);

  testwindow();
  toggleMenu();
})


