let rounds = 0, playerPts = 0, compPts = 0;

const main = document.querySelector(".main");

const scoreDisplayContainer = document.querySelector(".score");
scoreDisplayContainer.remove();

const options_Container = document.querySelector(".options-Container");
options_Container.remove();



//Adding event handler to the startBtn 
startBtn.addEventListener('click', function(event) {
    main.append(scoreDisplayContainer);
    main.append(options_Container);
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
                personDisplayScore.textContent = `${playerPts}`;
            }

/* 
-CREATE A SEPERATE THING FOR THE FINAL RESULT
- Fix back the remove() and append attributes for the current options in playGame()
- Add final functionaility for button
- Increase score dynamically
- Optimize code by not using switch statments for WINNING results
*/