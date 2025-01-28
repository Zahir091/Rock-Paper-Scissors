let rounds = 0, playerPts = 0, compPts = 0;

function getPlayerMove() {
    let move;
    move =  prompt("What's your move?");
    return move;
};

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


function playGame() {
    let play = 1;
    while (play > 0) {
        playPrompt = prompt("Do you want to continue (Y/N)");
        if (playPrompt == "Y") {
            play = 1;
        }
        else {
            play = 0;
            console.log("GAME HAS ENDED")
            return;
        }
        let playMove = getPlayerMove();
        let compMove = getComputerMove();
        rounds++;
        switch(playMove) {
            case "Rock":
                if(compMove == "Rock") {
                    console.log("Tie");
                    
                }
                else if (compMove == "Scissors") {
                    console.log("You won!");
                    playerPts++;
                }
                else if(compMove == "Paper") {
                    console.log("You lost");
                    compPts++;
                }
                break;
            case "Paper":
                if(compMove == "Paper") {
                    console.log("Tie");
                }
                else if (compMove == "Rock") {
                    console.log("You won!");
                    playerPts++;
                }
                else if(compMove == "Scissors") {
                    console.log("You lost");
                    compPts++;
                }
                break;
            case "Scissors":
                 if(compMove == "Scissors") {
                        console.log("Tie");
                    
                    }
                 else if (compMove == "Paper") {
                        console.log("You won!");
                        playerPts++;
                    }
                 else if(compMove == "Rock") {
                        console.log("You lost");
                        compPts++;
                    }
                 break;
            default: 
                    console.log("error");
                }
    }
}

playGame();