let userChoice = '';
let computerChoice = '';
let computerScore = 0;
let userScore = 0;

const cC = document.getElementById('robotScore');
const uC = document.getElementById('playerScore');

function AIwinner() {
    document.querySelector(".crownRobot").style.visibility = "visible"; 
}   

function userWinner() {
    document.querySelector(".crownUser").style.visibility = "visible";
}
function userReset() {
    document.querySelector(".crownUser").style.visibility = "hidden";
}
function AIreset() {
    document.querySelector(".crownRobot").style.visibility = "hidden";
}


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
    computerChoice = 'rock';
    break;
    case 1:
    computerChoice = 'paper';
    break;
    case 2:
    computerChoice = 'scissors'
    break;
    }
};

function playerUse() {

    if (userChoice === 'rock') {

        document.querySelector(".rockMoveUser").style.visibility = "visible";
        document.querySelector(".paperMoveUser").style.visibility = "hidden";
        document.querySelector(".scissorsMoveUser").style.visibility = "hidden";
    }
    
    if (userChoice === 'paper') {

        document.querySelector(".rockMoveUser").style.visibility = "hidden";
        document.querySelector(".paperMoveUser").style.visibility = "visible";
        document.querySelector(".scissorsMoveUser").style.visibility = "hidden";
    }

    if (userChoice === 'scissors'){
        document.querySelector(".rockMoveUser").style.visibility = "hidden";
        document.querySelector(".paperMoveUser").style.visibility = "hidden";
        document.querySelector(".scissorsMoveUser").style.visibility = "visible";
    }
}
function computerUse() {

    if (computerChoice === 'rock') {

        document.querySelector(".rockMoveAI").style.visibility = "visible";
        document.querySelector(".paperMoveAI").style.visibility = "hidden";
        document.querySelector(".scissorsMoveAI").style.visibility = "hidden";
    }
    
    if (computerChoice === 'paper') {

        document.querySelector(".paperMoveAI").style.visibility = "visible";
        document.querySelector(".rockMoveAI").style.visibility = "hidden";
        document.querySelector(".scissorsMoveAI").style.visibility = "hidden";
    }

    if (computerChoice === 'scissors') {

        document.querySelector(".scissorsMoveAI").style.visibility = "visible";
        document.querySelector(".rockMoveAI").style.visibility = "hidden";
        document.querySelector(".paperMoveAI").style.visibility = "hidden"
    }
}

function userChoiceRock() {
    userChoice = 'rock';
    playGame()
};

function userChoicePaper() {
    userChoice = 'paper';
    playGame()
};

function userChoiceScissors() {
    userChoice = 'scissors';
    playGame()
};

function playGame() {
    getComputerChoice();

    if (userChoice === computerChoice) {
        playerUse();
        computerUse();
        AIreset();
        userReset();
        
    } else {

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
        computerScore++
        cC.innerText = computerScore
        playerUse();
        computerUse();
        AIwinner();
        userReset();

         } else {
        userScore++
        uC.innerText = userScore
        playerUse();
        computerUse();
        userWinner()
        AIreset()
        }
    }
  
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
        computerScore++
        cC.innerText = computerScore
        playerUse();
        computerUse();
        AIwinner()
        userReset()

        } else {
        userScore++
        uC.innerText = userScore
        playerUse()
        computerUse()
        userWinner()
        AIreset()
        }
    }
  
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          computerScore++
          cC.innerText = computerScore
          playerUse()
          computerUse()
          AIwinner()
          userReset()
    
        } else {
          userScore++
          uC.innerText = userScore
          playerUse()
          computerUse()
          userWinner()
          AIreset()
        }
    }
}
};
