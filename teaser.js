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
    document.getElementById("ha").addEventListener("animationend", hamletStopsMouth);

    function hamletStopsMouth(evt) {
        evt.target.style.backgroundPositionX = "-1760px";
    }
    aud.play();
    setTimeout(curtainOpens, 6500);
}

function curtainOpens() {
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
    setTimeout(untilWar, 3000);
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
    document.getElementById("maria").style.display = "none";
    document.getElementById("ha").style.display = "none";
    document.getElementById("actor").style.display = "none";
    theat.pause();
    mus.play();
    unt.play();
    setTimeout(playWar, 1500);

    function playWar() {
        war2.play();
    }
    var para = document.createElement("p");
    var node = document.createTextNode("until World War 2");
    para.appendChild(node);
    var element = document.getElementById("slogans");
    element.appendChild(para);
    setTimeout(textDisappears, 5000);

    function textDisappears() {
        document.getElementById("slogans").classList.add("fade");
    }
    setTimeout(musicEnds, 4500);
}

function musicEnds() {
    mus.pause()
    window.location = "bombing.html";

}
