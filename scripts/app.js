let oneVersusOneBtn = document.getElementById("oneVersusOneBtn");
let oneVScpuBtn = document.getElementById("oneVScpuBtn");

let RulesBtn = document.getElementById("RulesBtn");
let mainStartBtn = document.getElementById("mainStartBtn");
let mainPageHide = document.getElementById("mainPageHide");

let firstPageHide = document.getElementById("firstPageHide");
let choicesPageHide = document.getElementById("choicesPageHide");
let choicesPageHide2 = document.getElementById("choicesPageHide2");

let bestOf1Btn = document.getElementById("bestOf1Btn");
let bestOf5Btn = document.getElementById("bestOf5Btn");
let bestOf7Btn = document.getElementById("bestOf7Btn");

let bestOf1Btn2 = document.getElementById("bestOf1Btn2");
let bestOf5Btn2 = document.getElementById("bestOf5Btn2");
let bestOf7Btn2 = document.getElementById("bestOf7Btn2");

let gameHide = document.getElementById("gameHide");
let gameHide2 = document.getElementById("gameHide2");
let body = document.getElementById("body");

let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");

let p1Score2 = document.getElementById("p1Score2");
let p2Score2 = document.getElementById("p2Score2");


let displayText = document.getElementById("displayText");
let displayText2 = document.getElementById("displayText2");
let displayText3 = document.getElementById("displayText3");
let endScreen = document.getElementById("endScreen");
let winText = document.getElementById("winText");

// 1 v CPU buttons

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");

// 1 v 1 mode buttons

let rockBtn2 = document.getElementById("rockBtn2");
let paperBtn2 = document.getElementById("paperBtn2");
let scissorsBtn2 = document.getElementById("scissorsBtn2");
let lizardBtn2 = document.getElementById("lizardBtn2");
let spockBtn2 = document.getElementById("spockBtn2");

let rockBtn3 = document.getElementById("rockBtn3");
let paperBtn3 = document.getElementById("paperBtn3");
let scissorsBtn3 = document.getElementById("scissorsBtn3");
let lizardBtn3 = document.getElementById("lizardBtn3");
let spockBtn3 = document.getElementById("spockBtn3");

let IsTrue = true;
let TurnOne = true;

let ScoreLimit = 1;
let userOnePoints = 0;
let userTwoPoints = 0;

let userPick;
let userSecondPick;

mainStartBtn.addEventListener('click', function () {
    mainPageHide.style.display = "none"
    RulesBtn.style.display = "block"
    firstPageHide.style.display = "block"
})

oneVersusOneBtn.addEventListener('click', function () {
    IsTrue = true;
    firstPageHide.style.display = "none"
    RulesBtn.style.display = "block"
    choicesPageHide2.style.display = "block"
});


oneVScpuBtn.addEventListener('click', function () {
    IsTrue = false;
    firstPageHide.style.display = "none"
    RulesBtn.style.display = "block"
    choicesPageHide.style.display = "block"
});

// For 1 v CPU

bestOf1Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    RulesBtn.style.display = "block"
    gameHide.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 1;
});


bestOf5Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    RulesBtn.style.display = "block"
    gameHide.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 3;
});


bestOf7Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    RulesBtn.style.display = "block"
    gameHide.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 4;
});

// For the 1v1 page

bestOf1Btn2.addEventListener('click', function () {
    choicesPageHide2.style.display = "none"
    RulesBtn.style.display = "none"
    gameHide2.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 1;
});


bestOf5Btn2.addEventListener('click', function () {
    choicesPageHide2.style.display = "none"
    RulesBtn.style.display = "none"
    gameHide2.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 3;
});


bestOf7Btn2.addEventListener('click', function () {
    choicesPageHide2.style.display = "none"
    RulesBtn.style.display = "none"
    gameHide2.style.display = "block"
    body.className = "gameBg"
    ScoreLimit = 4;
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
        displayText2.textContent = `You choose ${userPick}`
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "center";
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
        displayText2.textContent = `You choose ${userPick}`
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "center";
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
        displayText2.textContent = `You choose ${userPick}`
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "center";
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
        displayText2.textContent = `You choose ${userPick}`
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "center";
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
    } else if (TurnOne && IsTrue === false)
    {
        userPick = 'spock';
        userSecondPick = await CPU();
        compareInput(userPick, userSecondPick);
        displayText2.textContent = `You choose ${userPick}`
        displayText.textContent = `CPU chose ${userSecondPick}`
        displayText.className = "center";
        updateScore();
    } else if (TurnOne === false && IsTrue === true) {
        displayText.textContent = "Player 1's Turn"
        userSecondPick = 'spock';
        TurnOne = true;
        compareInput(userPick, userSecondPick);
        updateScore()
    }
});

// For 1 v 1 Page


rockBtn2.addEventListener('click', async () => { 
        displayText3.textContent = "Player 2's Turn"
        userSecondPick = 'rock';
        TurnOne = true;
        // compareInput(userPick, userSecondPick);
        updateScore()
});


paperBtn2.addEventListener('click', async () => {
        displayText3.textContent = "Player 2's Turn"
        userSecondPick = 'paper';
        TurnOne = true;
        // compareInput(userPick, userSecondPick);
        updateScore()
    
});


scissorsBtn2.addEventListener('click', async () => {
        displayText3.textContent = "Player 2's Turn"
        userSecondPick = 'scissors';
        TurnOne = true;
        // compareInput(userPick, userSecondPick);
        updateScore()
    
});


lizardBtn2.addEventListener('click', async () => {
        displayText3.textContent = "Player 2's Turn"
        userSecondPick = 'lizard';
        TurnOne = true;
        // compareInput(userPick, userSecondPick);
        updateScore()
    
});

spockBtn2.addEventListener('click', async () => {
        displayText3.textContent = "Player 2's Turn"
        userSecondPick = 'spock';
        TurnOne = true;
        // compareInput(userPick, userSecondPick);
        updateScore()
    
});

// 1v1  page again


rockBtn3.addEventListener('click', async () => {
        displayText3.textContent = "Player 1's Turn"
        userPick = 'rock';
        TurnOne = false;
        compareInput(userSecondPick, userPick);
        updateScore()
    
});


paperBtn3.addEventListener('click', async () => {
        displayText3.textContent = "Player 1's Turn"
        userPick = 'paper';
        TurnOne = false;
        compareInput(userSecondPick, userPick);
        updateScore()
    
});


scissorsBtn3.addEventListener('click', async () => {
        displayText3.textContent = "Player 1's Turn"
        userPick = 'scissors';
        TurnOne = false;
          compareInput(userSecondPick, userPick);
        updateScore()
    
});


lizardBtn3.addEventListener('click', async () => {
        displayText3.textContent = "Player 1's Turn"
        userPick = 'lizard';
        TurnOne = false;
        compareInput(userSecondPick, userPick);
        updateScore()
    
});

spockBtn3.addEventListener('click', async () => {
        displayText3.textContent = "Player 1's Turn"
        userPick = 'spock';
        TurnOne = false;
        compareInput(userSecondPick, userPick);
        updateScore()
    
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
    p2Score.textContent = `CPU SCORE: ${userTwoPoints}`;

    p1Score2.textContent = `P1 SCORE: ${userOnePoints}`;
    p2Score2.textContent = `P2 SCORE: ${userTwoPoints}`;

    if (userTwoPoints === ScoreLimit && IsTrue === false) {
        body.className = "endBg"
        gameHide.style.display = "none";
        gameHide2.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "CPU Wins!"
    } else if (userOnePoints === ScoreLimit) {
        body.className = "endBg"
        gameHide.style.display = "none";
        gameHide2.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Player 1 Wins!"
    } else if (userTwoPoints === ScoreLimit) {
        body.className = "endBg"
        gameHide.style.display = "none";
        gameHide2.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Player 2 Wins!"
    }
}

// Fetch

async function CPU() {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');

    const data = await promise.text();

    return data.toLowerCase();
}
