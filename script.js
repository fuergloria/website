document.addEventListener("DOMContentLoaded", function () {

 

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

  
  flyball(); // Initialisiere die flyball-Funktion
  vanishflower();


});
