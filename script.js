let rounds = 0, playerPts = 0, compPts = 0;

const main = document.querySelector(".main");
const startingText = document.querySelector("#startingText");
const startBtn = document.querySelector("#startBtn");

const optionsMenu = document.querySelector(".options-menu");

const optionRock = document.querySelector(".Option-rock");
const optionScissors = document.querySelector(".Option-scissors");
const optionPaper = document.querySelector(".Option-paper");


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



//Adding event handler to the startBtn 
startBtn.addEventListener('click', function(event) {
    main.removeChild(startingText);
    personPlayer.appendChild(personDisplayScore);
    personPlayer.appendChild(playerTag);
    compPlayer.appendChild(compDisplayScore);
    compPlayer.appendChild(compTag);
    scoreDiv.appendChild(personPlayer);
    scoreDiv.appendChild(compPlayer);
    
});

//Adding event handler to the options menu
optionsMenu.addEventListener('click', function(event) {
    let playerMove = event.target.id;
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

