document.addEventListener("DOMContentLoaded", function () {

 
  function flyfirstball(){
    const nobball = document.querySelector('.nobball');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nobball.classList.add('animate');
        observer.unobserve(nobball); // Beobachtung beenden, nachdem die Animation gestartet wurde
      }
    });
  });

  observer.observe(nobball);
  }

  function wigglevase(){
    const vase = document.querySelector('.vase');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        vase.classList.add('animate');
        observer.unobserve(vase); // Beobachtung beenden, nachdem die Animation gestartet wurde
      }
    });
  });

  observer.observe(vase);
  }

  function flyball2() {

    const nobball2 = document.getElementById("nobball2");
    


    nobball2.addEventListener("click", () => {
      nobball2.style.animation = "flynobBall2 2s ease-in-out forwards";

      setTimeout(() => {
        nobball2.style.animation = "flynobBall2 2s ease-in-out forwards";
      }, 10);
    });

   

  }

  function flyball3(){
    const nobball3 = document.getElementById("nobball3");
    nobball3.addEventListener("click", () => {
      nobball3.style.animation = "flynobBall3 2s ease-in-out forwards";

      setTimeout(() => {
        nobball3.style.animation = "flynobBall3 2s ease-in-out forwards";
      }, 10);
    });
  }

  function vanishflower() {
    const flower = document.querySelector('.flower');

    if(!flower){
      console.error("Element with class flower not found");
    }

    flower.addEventListener('click', () => {
  
      if (!flower.classList.contains('show')) {
        flower.classList.add('show');
      }
      else {
        flower.classList.remove('show');
      }

    })
  }

  





  // Initial check on page load

  wigglevase();
  flyfirstball();
  flyball2(); 
  flyball3();
  vanishflower();


});
