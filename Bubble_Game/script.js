function makeBubble() {
    let cluter = "";
    for (let i = 1; i <= 128; i++) {
        let randNum = Math.floor(Math.random() * 10)
        cluter += `<div class="circle">${randNum}</div>`;
    }

    document.querySelector(".Btm-wraper").innerHTML = cluter;
}

let timer = 60;
function runtime() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(timerInt);  // set timeinterval stop
            document.querySelector(".Btm-wraper").textContent = `Game Over ! your Score ${score}`;
        }
    }, 1000)
}

let hitrn = 0;
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hitrn;
}

let score = 0;
function Newscore() {
    score += 5;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".Btm-wraper").addEventListener("click", function (e) {
    let clickedNumber = Number(e.target.textContent)
    if (clickedNumber === hitrn) {
        Newscore();
        makeBubble();
        getNewHit();
    }
})

runtime();
makeBubble();
getNewHit();
EasyLevel();