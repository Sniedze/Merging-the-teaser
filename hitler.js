let moustache1 = document.querySelector("#m1");
let moustache2 = document.querySelector("#m2");
let moustache3 = document.querySelector("#m3");
let hit = document.querySelector("#hitler");
let beep = document.querySelector("#tromb");
let fail = document.querySelector("#saize");
let runVoice = document.querySelector("#run");
let step = document.querySelector("#steps");
let heilMyself = document.querySelector("#myself");
let curt = document.querySelector("#curtain");
let curtainAudio = document.querySelector("#curtCloses");
let hitSound = document.querySelector("#hitSteps");
let dramatic = document.querySelector("#drama");
let endMusic = document.querySelector("#music");

window.onload = function () {
    console.log("Hitler enters");
    document.getElementById("hitler").classList.add("hitlerIn");
    document.getElementById("heil").classList.add("hitlerContainer");
    setTimeout(actorsScared, 3000);
    dramatic.play();
    document.getElementById("drama").loop = true;
    hitSound.play();
}

function actorsScared() {
    document.getElementById("hitler").style.backgroundImage = "url(images/hitler_sprite02.png)";
    document.getElementById("hitler").classList.remove("hitlerIn");
    document.getElementById("hitler").classList.add("hitlerBlushes");
    document.getElementById("maria").classList.add("actorsAffraid");
    document.getElementById("professor").classList.add("actorsAffraid");
    document.getElementById("josef").classList.add("actorsAffraid");
    setTimeout(run, 1500);

    function run() {
        runVoice.play();
    }

    setTimeout(actorsRun, 2000);
}

function actorsRun() {
    console.log("Actors`re running away");
    document.getElementById("hitler").style.backgroundImage = "url(images/hitler_sprite03.png)";
    document.getElementById("hitler").classList.remove("hitlerBlushes");
    document.getElementById("hitler").classList.add("hitlerRuns");
    document.getElementById("heil").classList.remove("hitlerContainer");
    document.getElementById("heil").classList.add("container");
    document.getElementById("maria").style.backgroundImage = "url(images/maria_sprite2.png)";
    document.getElementById("professor").style.backgroundImage = "url(images/prof_sprite2.png)";
    document.getElementById("josef").style.backgroundImage = "url(images/josef_sprite02.png)";
    document.getElementById("maria").classList.add("actorsRun");
    document.getElementById("professor").classList.add("actorsRun");
    document.getElementById("josef").classList.add("actorsRun");
    document.getElementById("actors").classList.add("actorMovement");
    step.play();
    setTimeout(moustacheFalls, 3000);

}


function moustacheFalls() {

    step.pause();
    document.getElementById("hitler").style.backgroundImage = "url(images/hitler_sprite04.png)";
    document.getElementById("hitler").classList.remove("hitlerIn");
    document.getElementById("hitler").classList.add("hitlerBlushes");
    document.getElementById("mous").style.display = "block";
    setTimeout(falls, 500);

    function falls() {
        document.getElementById("mous").classList.add("mouse");
        fail.play();
        setTimeout(moustacheOff, 1000);
    }
}

function moustacheOff() {
    document.getElementById("hitler").style.backgroundImage = "url(images/hitler_sprite05.png)"
    document.getElementById("hitler").classList.add("hitlerBlushes");

    setTimeout(moustachesAppear, 1500)
}

function moustachesAppear() {
    document.getElementById("mous").style.display = "none";
    document.getElementById("m1").style.display = "block";
    document.getElementById("m2").style.display = "block";
    document.getElementById("m3").style.display = "block";
    var para = document.createElement("p");
    var node = document.createTextNode("Click the right moustache");
    para.appendChild(node);
    var element = document.getElementById("text");
    element.appendChild(para);
    setTimeout(game, 500)
}

function game() {


}

moustache2.addEventListener("mouseover", foo);
setTimeout(foo);

function foo() {
    let randX = Math.floor(Math.random() * 12);
    let randY = Math.floor(Math.random() * 12);
    console.log([randX, randY]);
    moustache2.style.transform = "translateX(" + randX + "vw) translateY(" + randY + "vh)";

}
moustache2.addEventListener("click", moustache2Clicked);

function moustache2Clicked() {
    console.log("clicked");
    dramatic.pause();

    document.getElementById("m2").classList.add("move");
    setTimeout(moustacheVanishes, 900);

    function moustacheVanishes() {
        document.getElementById("m2").style.display = "none";
    }
    setTimeout(movesHand, 500);
}

function movesHand() {
    document.getElementById("background").style.backgroundImage = "url(images/theater-background2.png)";
    document.getElementById("hitler").style.backgroundImage = "url(images/hitler_sprite06.png)";
    document.getElementById("hitler").classList.add("heilHitler");
    heilMyself.play();
    var para = document.createElement("p");
    var node = document.createTextNode("Heil myself!");
    para.appendChild(node);
    var element = document.getElementById("textHeil");
    element.appendChild(para);
    document.getElementById("m1").style.display = "none";
    document.getElementById("m3").style.display = "none";
    document.getElementById("text").style.display = "none";
    setTimeout(curtainCloses, 3500);
}
moustache1.addEventListener("click", moustacheClicked);
moustache3.addEventListener("click", moustacheClicked);


function moustacheClicked() {
    console.log("wrong!");
    beep.currentTime = 0;
    beep.play();

}

function curtainCloses() {
    curtainAudio.play();
    document.getElementById("curtain").classList.add("curtainCloses");
    setTimeout(credits, 500);
}

function credits() {
    endMusic.play();
}
