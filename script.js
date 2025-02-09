let rounds = 0, playerPts = 0, compPts = 0;

let main = document.querySelector(".main");
let startingText = document.querySelector("#startingText");
let startBtn = document.querySelector("#startBtn");

let optionsMenu = document.querySelector(".options-menu");

let optionRock = document.querySelector(".Option-rock");
let optionScissors = document.querySelector(".Option-scissors");
let optionPaper = document.querySelector(".Option-paper");

//Adding event handler to the startBtn 
startBtn.addEventListener('click', function(event) {
    main.removeChild(startingText);
    
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
            cMove = "Rock";
            break;
        case 1:
            cMove = "Paper";
            break;
        case 2: 
            cMove = "Scissor";
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
            case "Rock":
                if(compMove == "Rock") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("Tie!")
                }
                else if (compMove == "Scissors") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You won!");
                    playerPts++;
                }
                else if(compMove == "Paper") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You lost");
                    compPts++;
                }
                break;
            case "Paper":
                if(compMove == "Paper") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("Tie");
                }
                else if (compMove == "Rock") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You won!");
                    playerPts++;
                }
                else if(compMove == "Scissors") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                    console.log("You lost");
                    compPts++;
                }
                break;
            case "Scissors":
                 if(compMove == "Scissors") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                        console.log("Tie");
                    
                    }
                 else if (compMove == "Paper") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                        console.log("You won!");
                        playerPts++;
                    }
                 else if(compMove == "Rock") {
                    console.log(`Round: ${rounds}, Player: ${playMove}, Comp: ${compMove}`);
                        console.log("You lost");
                        compPts++;
                    }
                 break;
            default: 
                    console.log("error");
                }
            }

