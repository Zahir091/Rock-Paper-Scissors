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
        if (playPrompt = "Y") {
            play = 1;
        }
        else {
            play = 0;
            console.log("GAME HAS ENDED")
            return;
        }
        let playMove = getPlayerMove();
        let compMove = getComputerMove();

        switch(playMove) {
            case "Rock":
                if(compMove = "Rock") {
                    console.log("Tie");
                }
                else if (compMove = "Scissors") {
                    console.log("You won!");
                }
                else if(compMove = "Paper") {
                    console.log("You lost");
                }
                break;
                    case "Rock":
                if(compMove = "Rock") {
                    console.log("Tie");
                }
                else if (compMove = "Scissors") {
                    console.log("You won!");
                }
                else if(compMove = "Paper") {
                    console.log("You lost");
                }
                break;
            case "Paper":
                 if(compMove = "Paper") {
                        console.log("Tie");
                    }
                 else if (compMove = "Scissors") {
                        console.log("You won!");
                    }
                 else if(compMove = "Paper") {
                        console.log("You lost");
                    }
                 break;

        }





    }
}