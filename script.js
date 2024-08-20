document.addEventListener("DOMContentLoaded", function () {

 
  function flyfirstball(){
    const ball = document.querySelector('.ball');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ball.classList.add('animate');
        observer.unobserve(ball); // Beobachtung beenden, nachdem die Animation gestartet wurde
      }
    });
  });

  observer.observe(ball);
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

    const ball2 = document.getElementById("ball2");
    


    ball2.addEventListener("click", () => {
      ball2.style.animation = "flyball2 2s ease-in-out forwards";

      setTimeout(() => {
        ball2.style.animation = "flyball2 2s ease-in-out forwards";
      }, 10);
    });

   

  }

  function flyball3(){
    const ball3 = document.getElementById("ball3");
    ball3.addEventListener("click", () => {
      ball3.style.animation = "flyball3 2s ease-in-out forwards";

      setTimeout(() => {
        ball3.style.animation = "flyball3 2s ease-in-out forwards";
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



  wigglevase();
  flyfirstball();
  flyball2(); 
  flyball3();
  vanishflower();


});
