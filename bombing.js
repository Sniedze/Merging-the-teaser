let explosion = document.getElementById("explode");
let explosion2 = document.getElementById("explode2");
let actress = document.querySelector(".actor1");
let JTura = document.querySelector(".actor3");
let proffesor = document.querySelector(".actor2");
let flyingBanner = document.querySelector(".signWrap");
let planeSound = document.getElementById("flySound");
let warAudio = document.getElementById("voiceOver");
planeSound.volume = 0.2;
let hint = document.querySelector("h3");
let bombCount = 0;

//THESE ARE THE FUNCTIONS TO FIRE OFF THE BOMBS AND CHAIN OF EVENTS////////////
window.addEventListener('load', flyIn);
function flyIn(){
    let building1 = document.getElementById("building1");
    let building2 = document.getElementById("building2");
    let building3 = document.getElementById("building3");
    let building4 = document.getElementById("building4");
    let building5 = document.getElementById("building5");
    let plane = document.getElementById("plane");
    plane.classList.add("planeFlyIn");
    planeSound.play();
    plane.addEventListener('transitionend', function(){
    hint.classList.add("opacity");
building1.addEventListener('click', bombMe);
function bombMe(){
    let fallingSound = document.getElementById("falling");
    fallingSound.volume = 0.3;
    let bomb1 = document.getElementById("bomb1");
    let building1 = document.getElementById("building1");
    fallingSound.play();
    bomb1.classList.add("animation");
    bomb1.addEventListener('transitionend', function(){
                bomb1.classList.remove("animation");
                bomb1.style.display='none';
                building1.removeAttribute('id');
                building1.classList.add("building1Burn");
                explosion.play();
                bombCount++;
                fallingSound.addEventListener('ended', function(){allBombed();
                          })
    })
}
building2.addEventListener('click', bombMe2);
function bombMe2(){
    let fallingSound2 = document.getElementById("falling2");
    let bomb2 = document.getElementById("bomb2");
    let building2 = document.getElementById("building2");
    fallingSound2.volume = 0.3;
    fallingSound2.play();
    bomb2.classList.add("animation2");
    bomb2.addEventListener('transitionend', function(){
                bomb2.classList.remove("animation2");
                bomb2.style.display='none';
                building2.removeAttribute('id');
                building2.classList.add("building2Burn");
                explosion2.play();
                bombCount++;
        fallingSound2.addEventListener('ended', function(){allBombed();
                          })
    })
}

building3.addEventListener('click', bombMe3);
function bombMe3(){
    let fallingSound3 = document.getElementById("falling3");
    let bomb3 = document.getElementById("bomb3");
    let building3 = document.getElementById("building3");
    fallingSound3.volume = 0.3;
    fallingSound3.play();
    bomb3.classList.add("animation3");
    bomb3.addEventListener('transitionend', function(){
                 bomb3.classList.remove("animation3");
               bomb3.style.display='none';
                building3.removeAttribute('id');
                building3.classList.add("building3Burn");
                explosion.play();
                 bombCount++;
                fallingSound3.addEventListener('ended', function(){allBombed();
                          })
    })
}
building4.addEventListener('click', bombMe4);
function bombMe4(){
    let fallingSound4 = document.getElementById("falling4");
    let bomb4 = document.getElementById("bomb4");
    let building4 = document.getElementById("building4");
    fallingSound4.volume = 0.3;
    fallingSound4.play();
    bomb4.classList.add("animation4");
    bomb4.addEventListener('transitionend', function(){
                 bomb4.classList.remove("animation4");
                building4.removeAttribute('id');
                building4.classList.add("building4Burn");
                //building4.style.display='none';
                    bomb4.style.display='none';
                explosion.play();
                 bombCount++;
                 fallingSound4.addEventListener('ended', function(){allBombed();
                          })
    })
}
building5.addEventListener('click', bombMe5);
function bombMe5(){
    let fallingSound5 = document.getElementById("falling5");
    let bomb5 = document.getElementById("bomb5");
    let building5 = document.getElementById("building5");
    fallingSound5.volume = 0.3;
    fallingSound5.play();
    bomb5.classList.add("animation5");
    bomb5.addEventListener('transitionend', function(){
                 bomb5.classList.remove("animation5");
                bomb5.style.display='none';
                 building5.removeAttribute('id');
                building5.classList.add("building5Burn");
               explosion2.play();
                 bombCount++;
                  fallingSound5.addEventListener('ended', function(){allBombed();
                          })
    })
}
function allBombed() {
    //let buildings = document.querySelectorAll(".dontDisplay");//I WISH COULD UNDERSTAND WHY THE BOMB COUNT ==5 OR >4 SEQUENCE FIRES OFF MORE THAN ONCE BUT I JUST FUCKING CANT, DOESNT WORK PROPERLY IF YOU COUNT CLASS LENGTH EITHER, FUCK THIS, I'M OUT, STILL WORKS.//////
    if(bombCount>4){
        let plane = document.getElementById("plane");
        let buildings = document.getElementById("buildings");
        plane.classList.remove("planeFlyIn");
        actress.classList.add("actorscometogether");
        JTura.classList.add("actorscometogether2");
        proffesor.classList.add("actorscometogetherCenter");
        plane.classList.add("planeFlyOut");
        buildings.style.display='none';
        hint.style.opacity='0';
        flyingBanner.classList.add("storyText");
        flyingBanner.addEventListener('transitionend', narrate);
    }
}
} )
}
 function narrate(){
    planeSound.pause();
    warAudio.play();
    hint.style.opacity='0';
    setTimeout(spies, 4000);
 function spies(){
     warAudio.pause();
    let plane = document.getElementById("plane");
    let music = document.getElementById("fastPiano");
    music.play();
    plane.style.display='none';
     flyingBanner.classList.remove("storyText");
    flyingBanner.classList.add("storyTextOut");
    actress.style.backgroundImage="url(images/maria-style2.png)";
    proffesor.style.backgroundImage="url(images/prof_style2.png)";
    setTimeout(function(){JTura.style.backgroundImage="url(images/josef_style3.png)";}, 1000);
    setTimeout(function(){proffesor.style.backgroundImage="url(images/prof_style3.png)";}, 2000);
    setTimeout(function(){actress.style.backgroundImage="url(images/maria-style3.png)";}, 3000);
    setTimeout(function(){JTura.style.backgroundImage="url(images/josef_style4.png)";}, 4000);
    setTimeout(function(){proffesor.style.backgroundImage="url(images/prof_style4.png)";}, 5000);
    setTimeout(function(){proffesor.style.backgroundImage="url(images/actors.png)";
                         actress.style.backgroundImage="url(images/maria1.png)";
                          JTura.style.backgroundImage="url(images/josef_style2.png)";
                          music.pause();
                          flyingBanner.style.display='none';
                         window.location = "hitler.html";}, 6000);
};}
