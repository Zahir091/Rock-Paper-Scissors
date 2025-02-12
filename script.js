let rounds = 0, playerPts = 0, compPts = 0;

const main = document.querySelector(".main");
const startingText = document.querySelector("#startingText");
const startBtn = document.querySelector("#startBtn");
const headTxt = document.querySelector("#header");

const scoreDiv = document.querySelector(".score");
const personPlayer = document.createElement("div");
const compPlayer = document.createElement("div");
personPlayer.setAttribute('class', 'person');
compPlayer.setAttribute('class', 'person');
const personDisplayScore = document.createElement("div");
const compDisplayScore = document.createElement("div");
personDisplayScore.setAttribute('class', 'score-display');
compDisplayScore.setAttribute('class', 'score-display');
personDisplayScore.textContent = "0 0 0";
compDisplayScore.textContent = "0 0 0";
const playerTag = document.createElement("h4");
const compTag = document.createElement("h4");
playerTag.textContent = "Player";
compTag.textContent = "Computer";



const optionsContainer = document.querySelector(".options-Container");
const chooseTXT = document.querySelector("#moveTxt");
const optionsMenu = document.querySelector(".options-menu");

const optionRock = document.querySelector("#rock");
const rockIMG = document.createElement("img");
const rockTXT = document.createElement("h4");

const optionPaper = document.querySelector("#paper");
const paperIMG = document.createElement("img");
const paperTXT = document.createElement("h4");

const optionScissors = document.querySelector("#scissors");
const scissorsIMG = document.createElement("img");
const scissorsTXT = document.createElement("h4");


//Adding event handler to the startBtn 
startBtn.addEventListener('click', function(event) {
    headTxt.textContent = "Rock   Paper   Scissors";
    personPlayer.appendChild(personDisplayScore);
    personPlayer.appendChild(playerTag);
    compPlayer.appendChild(compDisplayScore);
    compPlayer.appendChild(compTag);
    scoreDiv.appendChild(personPlayer);
    scoreDiv.appendChild(compPlayer);
    startingText.removeChild(startBtn);
    waitForMove();
});

function waitForMove() {
    rockIMG.setAttribute('src', 'Images/rock.png');
    rockTXT.textContent = "Rock";

    paperIMG.setAttribute('src', 'Images/paper.png');
    paperTXT.textContent = "Paper";

    scissorsIMG.setAttribute('src', 'Images/scissors.png');
    scissorsTXT.textContent = "Scissors";

    chooseTXT.textContent = "Choose a move...";
    optionRock.append(rockIMG, rockTXT);
    optionPaper.append(paperIMG, paperTXT);
    optionScissors.append(scissorsIMG, scissorsTXT);
    //Adding event handler to the options menu
}

optionsMenu.addEventListener('click', function(event) {
    //.closest detects which div was clicked on by distance
    let playerMove = event.target.closest('.option').id;
    if(playerMove == "rock" || playerMove == "paper" || playerMove == "scissors") {
        console.log(`Player has chosen ${playerMove}`);
        playGame(playerMove);
    }
});

//RANDOM NUMBER GEN
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} 

function getComputerMove() {
    let cMove;
    cMove = getRandomInt(2);
    switch (cMove) {
        case 0:
            cMove = "rock";
            break;
        case 1:
            cMove = "paper";
            break;
        case 2: 
            cMove = "scissor";
            break;
        default:
            cMove = "NONE";
    }
    return cMove;
}


function playGame(playMove) {
        let compMove = getComputerMove();
        rounds++;
        optionPaper.remove(paperIMG, paperTXT);
        rockTXT.textContent = "Player";
        scissorsTXT.textContent = "Computer";
        switch(playMove) {
            case "rock":
                rockIMG.setAttribute('src', 'Images/Rock.png');
                break;
            case "paper":
                rockIMG.setAttribute('src', 'Images/Paper.png');
                break;
            case "scissors":
                rockIMG.setAttribute('src', 'Images/Scissors.png');
                break;
            default:
                console.log("Error");
        }
        switch(compMove) {
            case "rock":
                scissorsIMG.setAttribute('src', 'Images/Rock.png');
                break;
            case "paper":
                scissorsIMG.setAttribute('src', 'Images/Paper.png');
                break;
            case "scissors":
                scissorsIMG.setAttribute('src', 'Images/Scissors.png');
                break;
            default:
                console.log("Error");
        }
        switch(playMove) {
            case "rock":
                if(compMove == "rock") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("Tie!")
                }
                else if (compMove == "scissors") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You won!");
                    playerPts++;
                }
                else if(compMove == "paper") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You lost");
                    compPts++;
                }
                break;
            case "paper":
                if(compMove == "paper") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("Tie");
                }
                else if (compMove == "rock") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You won!");
                    playerPts++;
                }
                else if(compMove == "scissors") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You lost");
                    compPts++;
                }
                break;
            case "scissors":
                 if(compMove == "scissors") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                        console.log("Tie");
                    
                    }
                 else if (compMove == "paper") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                        console.log("You won!");
                        playerPts++;
                    }
                 else if(compMove == "rock") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                        console.log("You lost");
                        compPts++;
                    }
                 break;
            default: 
                    console.log("error");
                }
            }

