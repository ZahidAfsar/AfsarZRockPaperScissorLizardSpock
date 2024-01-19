let oneVersusOneBtn = document.getElementById("oneVersusOneBtn");
let oneVScpuBtn = document.getElementById("oneVScpuBtn");

let firstPageHide = document.getElementById("firstPageHide");
let choicesPageHide = document.getElementById("choicesPageHide");

let bestOf1Btn = document.getElementById("bestOf1Btn");
let bestOf5Btn = document.getElementById("bestOf5Btn");
let bestOf7Btn = document.getElementById("bestOf7Btn");

let gameHide = document.getElementById("gameHide");
let body = document.getElementById("body");

let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");

let displayText = document.getElementById("displayText");
let endScreen = document.getElementById("endScreen");
let winText = document.getElementById("winText");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");


let IsTrue = true;
let TurnOne = true;

let ScoreLimit = 1;
let userOnePoints = 0;
let userTwoPoints = 0;

let userPick;
let userSecondPick;

oneVersusOneBtn.addEventListener('click', function () {
    IsTrue = true;
    firstPageHide.style.display = "none"
    choicesPageHide.style.display = "block"
});


oneVScpuBtn.addEventListener('click', function () {
    IsTrue = false;
    firstPageHide.style.display = "none"
    choicesPageHide.style.display = "block"
});

bestOf1Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    gameHide.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 1;
});


bestOf5Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    gameHide.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 3;
});


bestOf7Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    gameHide.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 5;
});

rockBtn.addEventListener('click', async () => {
    if (TurnOne && IsTrue) {
        displayText.textContent = "Player 2's Turn"
        userPick = 'rock';
        TurnOne = false;
    } else if (TurnOne && IsTrue === false) {
        userPick = 'rock';
        userSecondPick = await CPU();
        compareInput(userPick, userSecondPick);
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "font10";
        updateScore();
    } else if (TurnOne === false && IsTrue === true) {
        displayText.textContent = "Player 1's Turn"
        userSecondPick = 'rock';
        TurnOne = true;
        compareInput(userPick, userSecondPick);
        updateScore()
    }
});


paperBtn.addEventListener('click', async () => {
    if (TurnOne && IsTrue) {
        displayText.textContent = "Player 2's Turn"
        userPick = 'paper';
        TurnOne = false;
    } else if (TurnOne && IsTrue === false) {

        userPick = 'paper';

        userSecondPick = await CPU();
        compareInput(userPick, userSecondPick);
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "font10";
        updateScore();
    } else if (TurnOne === false && IsTrue === true) {
        displayText.textContent = "Player 1's Turn"
        userSecondPick = 'paper';
        TurnOne = true;
        compareInput(userPick, userSecondPick);
        updateScore()
    }
});


scissorsBtn.addEventListener('click', async () => {
    if (TurnOne && IsTrue) {
        displayText.textContent = "Player 2's Turn"
        userPick = 'scissors';
        TurnOne = false;
    } else if (TurnOne && IsTrue === false) {

        userPick = 'scissors';

        userSecondPick = await CPU();
        compareInput(userPick, userSecondPick);
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "font10";
        updateScore();
    } else if (TurnOne === false && IsTrue === true) {
        displayText.textContent = "Player 1's Turn"
        userSecondPick = 'scissors';
        TurnOne = true;
        compareInput(userPick, userSecondPick);
        updateScore()
    }
});


lizardBtn.addEventListener('click', async () => {
    if (TurnOne && IsTrue) {
        displayText.textContent = "Player 2's Turn"
        userPick = 'lizard';
        TurnOne = false;
    } else if (TurnOne && IsTrue === false) {

        userPick = 'lizard';

        userSecondPick = await CPU();
        compareInput(userPick, userSecondPick);
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "font10";
        updateScore();
    } else if (TurnOne === false && IsTrue === true) {
        displayText.textContent = "Player 1's Turn"
        userSecondPick = 'lizard';
        TurnOne = true;
        compareInput(userPick, userSecondPick);
        updateScore()
    }
});

spockBtn.addEventListener('click', async () => {
    if (TurnOne && IsTrue) {
        displayText.textContent = "Player 2's Turn"
        userPick = 'spock';
        TurnOne = false;
    } else if (TurnOne && IsTrue === false) {

        userPick = 'spock';

        userSecondPick = await CPU();
        compareInput(userPick, userSecondPick);
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "font10";
        updateScore();
    } else if (TurnOne === false && IsTrue === true) {
        displayText.textContent = "Player 1's Turn"
        userSecondPick = 'spock';
        TurnOne = true;
        compareInput(userPick, userSecondPick);
        updateScore()
    }
});

function compareInput(u1, u2) {
    if (u1 === u2) {
    } else if (u1 === 'rock' && u2 === 'scissors' || u1 === 'rock' && u2 === 'lizard') {
        userOnePoints++;
    } else if (u1 === 'paper' && u2 === 'rock' || u1 === 'paper' && u2 === 'spock') {
        userOnePoints++;
    } else if (u1 === 'scissors' && u2 === 'paper' || u1 === 'scissors' && u2 === 'lizard') {
        userOnePoints++;
    } else if (u1 === 'lizard' && u2 === 'paper' || u1 === 'lizard' && u2 === 'spock') {
        userOnePoints++;
    } else if (u1 === 'spock' && u2 === 'scissors' || u1 === 'spock' && u2 === 'rock') {
        userOnePoints++;
    } else if (u1 === 'rock' && u2 === 'paper' || u1 === 'rock' && u2 === 'spock') {
        userTwoPoints++;
    } else if (u1 === 'paper' && u2 === 'scissors' || u1 === 'paper' && u2 === 'lizard') {
        userTwoPoints++;
    } else if (u1 === 'scissors' && u2 === 'spock' || u1 === 'scissors' && u2 === 'rock') {
        userTwoPoints++;
    } else if (u1 === 'lizard' && u2 === 'scissors' || u1 === 'lizard' && u2 === 'rock') {
        userTwoPoints++;
    } else if (u1 === 'spock' && u2 === 'paper' || u1 === 'spock' && u2 === 'lizard') {
        userTwoPoints++;
    }
}

function updateScore() {
    p1Score.textContent = `P1 SCORE: ${userOnePoints}`;
    p2Score.textContent = `P2 SCORE: ${userTwoPoints}`;

    if (userTwoPoints === ScoreLimit && IsTrue === false) {
        body.className = "endBg"
        gameHide.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "CPU Wins!"
    } else if (userOnePoints === ScoreLimit) {
        body.className = "endBg"
        gameHide.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Player 1 Wins!"
    } else if (userTwoPoints === ScoreLimit) {
        body.className = "endBg"
        gameHide.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Player 2 Wins!"
    }
}



async function CPU() {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');

    const data = await promise.text();

    return data.toLowerCase();
}
