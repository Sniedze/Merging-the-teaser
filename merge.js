let voice = document.querySelector("audio")
let beButton = document.querySelector("#toBe");
let goButton = document.querySelector("#toGo");
let cryButton = document.querySelector("#toCry");
let hintButton = document.querySelector("#hint");
let prompterButton = document.querySelector("#prompt");
let audio = document.querySelector("#promt");
let aud = document.querySelector("#hamlet");
let mus = document.querySelector("#music");
let theat = document.querySelector("#theater");
let ring = document.querySelector("#bell");
let curt = document.querySelector("#curtain");
let curtainOpen = document.querySelector("#curt");
let they = document.querySelector("#theyWere");
let unt = document.querySelector("#until");
let war2 = document.querySelector("#worldWar");
let beep = document.querySelector("#tromb");
/*Rytis*/
let explosion = document.getElementById("explode");
let explosion2 = document.getElementById("explode2");
let actress = document.querySelector("#actor1");
let proffesor = document.querySelector("#actor3");

let planeSound = document.getElementById("flySound");
planeSound.volume = 0.2;
let hint = document.querySelector("h3");
let bombCount = 0;


window.onload = function () {
    document.getElementById("bell").play();
    document.getElementById("hint").classList.add("hintFade");
    document.getElementById("ha").classList.add("hamletConfused");

}

hintButton.addEventListener("click", hintClicked);

function hintClicked() {
    audio.play()
}
prompterButton.addEventListener("click", hintClicked);

function hintClicked() {
    audio.play()
}
goButton.addEventListener("click", goClicked);

function goClicked() {
    document.getElementById("toGo").classList.add("wrong");
    beep.currentTime = 0;
    beep.play();

}
cryButton.addEventListener("click", cryClicked);

function cryClicked() {
    document.getElementById("toCry").classList.add("wrong");
    beep.currentTime = 0;
    beep.play();
}


beButton.addEventListener("click", beClicked);

function beClicked() {
    document.getElementById("ha").classList.remove("hamletConfused");
    document.getElementById("ha").style.backgroundImage = "url(images/hamlet_sprite02.png)";
    document.getElementById("ha").classList.add("hamletSpeaks");
    aud.play();
    setTimeout(curtainOpens, 5900);
}

function curtainOpens() {
    document.getElementById("back").classList.add("backgr");
    document.getElementById("ha").classList.remove("hamletSpeaks");
    curt.classList.add("curtainOpen");
    curtainOpen.play();
    document.getElementById("toGo").classList.add("wrong");
    document.getElementById("toCry").classList.add("wrong");
    document.getElementById("prompt").classList.add("wrong");
    document.getElementById("hint").classList.add("wrong");
    document.getElementById("what").classList.add("wrong");
    document.getElementById("toBe").classList.add("wrong");
    setTimeout(the, 500);

    function the() {
        they.play();
    }
    setTimeout(untilWar, 2500);
}

function untilWar() {
    document.getElementById("maria").classList.add("fade");
    document.getElementById("ha").classList.add("fade");
    document.getElementById("actor").classList.add("fade");
    document.getElementById("ordinary").classList.add("fade");
    mus.currentTime = 0;
    theat.play();
    setTimeout(textAppears, 3000);
}

function textAppears() {
    document.getElementById("back").classList.remove("backgr");
    theat.pause();
    mus.play();
    unt.play();
    setTimeout(playWar, 750);

    function playWar() {
        war2.play();
    }
    var para = document.createElement("p");
    var node = document.createTextNode("until World War 2");
    para.appendChild(node);
    var element = document.getElementById("slogans");
    element.appendChild(para);
    setTimeout(textDisappears, 3000);

    function textDisappears() {
        document.getElementById("slogans").classList.add("fade");
        setTimeout(bombingGame, 2000);
    }
}

function bombingGame() {

    document.getElementById("back").style.backgroundImage = "url(images/street%20background.png)";
    document.getElementById("buildings").style.display = "block";
    document.getElementById("actor1").style.display = "block";
    document.getElementById("actor2").style.display = "block";
    document.getElementById("actor3").style.display = "block";
    setTimeout(flyIn, 1000);
}
//THESE ARE THE FUNCTIONS TO FIRE OFF THE BOMBS AND CHAIN OF EVENTS////////////

function flyIn() {
    setTimeout(musicEnds, 3000);

    function musicEnds() {
        mus.pause()
    }
    let plane = document.getElementById("plane");
    plane.classList.add("planeFlyIn");
    planeSound.play();
    plane.addEventListener('transitionend', function () {
        hint.classList.add("opacity");
        building1.addEventListener('click', bombMe);

        function bombMe() {
            let fallingSound = document.getElementById("falling");
            let bomb1 = document.getElementById("bomb1");
            let building1 = document.getElementById("building1");
            fallingSound.play();
            bomb1.classList.add("animation");
            bomb1.addEventListener('transitionend', function () {
                bomb1.classList.remove("animation");
                bomb1.style.display = 'none';
                building1.style.display = 'none';
                explosion.play();
                bombCount++;
                fallingSound.addEventListener('ended', function () {
                    allBombed();
                })
            })
        }
        building2.addEventListener('click', bombMe2);

        function bombMe2() {
            let fallingSound2 = document.getElementById("falling2");
            let bomb2 = document.getElementById("bomb2");
            let building2 = document.getElementById("building2");
            fallingSound2.play();
            bomb2.classList.add("animation2");
            bomb2.addEventListener('transitionend', function () {
                bomb2.classList.remove("animation2");
                bomb2.style.display = 'none';
                building2.style.display = 'none';
                explosion2.play();
                bombCount++;
                fallingSound2.addEventListener('ended', function () {
                    allBombed();
                })
            })
        }

        building3.addEventListener('click', bombMe3);

        function bombMe3() {
            let fallingSound3 = document.getElementById("falling3");
            let bomb3 = document.getElementById("bomb3");
            let building3 = document.getElementById("building3");
            fallingSound3.play();
            bomb3.classList.add("animation3");
            bomb3.addEventListener('transitionend', function () {
                bomb3.classList.remove("animation3");
                building3.style.display = 'none';
                bomb3.style.display = 'none';
                explosion.play();
                bombCount++;
                fallingSound3.addEventListener('ended', function () {
                    allBombed();
                })
            })
        }
        building4.addEventListener('click', bombMe4);

        function bombMe4() {
            let fallingSound4 = document.getElementById("falling4");
            let bomb4 = document.getElementById("bomb4");
            let building4 = document.getElementById("building4");
            fallingSound4.play();
            bomb4.classList.add("animation4");
            bomb4.addEventListener('transitionend', function () {
                bomb4.classList.remove("animation4");
                building4.style.display = 'none';
                bomb4.style.display = 'none';
                explosion.play();
                bombCount++;
                fallingSound4.addEventListener('ended', function () {
                    allBombed();
                })
            })
        }
        building5.addEventListener('click', bombMe5);

        function bombMe5() {
            let fallingSound5 = document.getElementById("falling5");
            let bomb5 = document.getElementById("bomb5");
            let building5 = document.getElementById("building5");
            fallingSound5.play();
            bomb5.classList.add("animation5");
            bomb5.addEventListener('transitionend', function () {
                bomb5.classList.remove("animation5");
                bomb5.style.display = 'none';
                building5.style.display = 'none';
                explosion2.play();
                bombCount++;
                fallingSound5.addEventListener('ended', function () {
                    allBombed();
                })
            })
        }

        function allBombed() {
            //let buildings = document.querySelectorAll(".dontDisplay");//I WISH COULD UNDERSTAND WHY THE BOMB COUNT ==5 OR >4 SEQUENCE FIRES OFF MORE THAN ONCE BUT I JUST FUCKING CANT, DOESNT WORK PROPERLY IF YOU COUNT CLASS LENGTH EITHER, FUCK THIS, I'M OUT, STILL WORKS.//////
            if (bombCount > 4) {
                let plane = document.getElementById("plane");
                plane.classList.remove("planeFlyIn");
                actress.classList.add("actorscometogether");
                proffesor.classList.add("actorscometogether2");
                plane.classList.add("planeFlyOut");
                hint.style.opacity = '0';
                let flyingBanner = document.querySelector(".signWrap");
                flyingBanner.classList.add("storyText");
                flyingBanner.addEventListener('transitionend', narrate);
            }
        }
    })
}

function narrate() {
    planeSound.pause();
    let warAudio = document.getElementById("voiceOver");
    warAudio.play();
    hint.style.opacity = '0';
}
