let boxs = document.querySelectorAll(".box")
let gameInfo = document.getElementById("info")
let newGame = document.querySelectorAll("#btn")

let curPlayer
let gameGride;
let winPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



function initGame() {
    curPlayer = "X";
    gameGride = ["", "", "", "", "", "", "", "", ""];

    boxs.forEach((box, index) => {
        box.innerText = "";
        boxs[index].style.pointerEvents = "all"
    })

    gameInfo.innerText = `Current Player - ${curPlayer}`;
}
initGame();

function swapTurn() {
    if (curPlayer === "X") {
        curPlayer = "O"
    }
    else {
        curPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${curPlayer}`;

}

function checkGameOver() {
}

function handleClick(index) {
    if (gameGride[index] === "") {
        boxs[index].innerText = curPlayer;
        gameGride[index] = curPlayer;
        boxs[index].style.pointerEvents = "none"
        swapTurn();
        checkGameOver();
    }
}

boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});


newGame.addEventListener("click", initGame)

