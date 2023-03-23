
let offers = document.querySelectorAll(".offer");
index = 0;
firstStep = 170;
err = 0;

document.addEventListener("scroll", () => {   
          if(window.scrollY > 170 && index < offers.length ){
            if(window.scrollY < (firstStep + 420) && err == 0){
                    offers[index].querySelector("img").style.animation = "animate  2s linear";
                    offers[index].querySelector(".description").style.animation = "animate2  2.5s linear";
                    err = 1;
            }
            else if(window.scrollY >= (firstStep + 420)){
                err = 0;
                index ++;
                firstStep = firstStep + 420;
            }
          
          }
});
