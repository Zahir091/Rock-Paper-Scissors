let rounds = 0, playerPts = 0, compPts = 0, result;

const main = document.querySelector(".main");
const scoreDisplayContainer = document.querySelector(".score");
const options_Container = document.querySelector(".options-Container");
const optionsMenu = document.querySelector(".options-menu");
const result_Container = document.querySelector(".result-Container");
const startButton = document.querySelector("#startBtn");
const headingGroup = document.querySelector("#startingText");

const playerIMG = document.querySelector("#playerChoiceImg");
const compIMG = document.querySelector("#compChoiceImg");

const headText = document.querySelector("#header");
const playAgainButton = document.querySelector("#playAgain");

const resultText = document.querySelector("#resultTxt");
const playerScore = document.querySelector(".score-play");
const compScore = document.querySelector(".score-comp");

scoreDisplayContainer.remove();
options_Container.remove();
result_Container.remove();
playAgainButton.remove();


//Adding event handler to the startBtn 
startBtn.addEventListener('click', function(event) {
    main.append(scoreDisplayContainer);
    main.append(options_Container);
    headText.textContent = "Rock Paper Scissors";
    startButton.style.display = "none";
});

playAgainButton.addEventListener('click', function(event) {
    main.append(options_Container);
    result_Container.remove();
    playAgainButton.remove();
});



optionsMenu.addEventListener('click', function(event) {
    //.closest detects which div was clicked on by distance
    let playerMove = event.target.closest('.option').id;
    if(playerMove == "rock" || playerMove == "paper" || playerMove == "scissors") {
        console.log(`Player has chosen ${playerMove}`);
        options_Container.remove();
        main.append(result_Container);
        main.append(playAgainButton);
        playGame(playerMove);
    }
});

//RANDOM NUMBER GEN
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} 

function getComputerMove() {
    let cMove;
    cMove = getRandomInt(3);
    switch (cMove) {
        case 0:
            cMove = "rock";
            break;
        case 1:
            cMove = "paper";
            break;
        case 2: 
            cMove = "scissors";
            break;
        default:
            cMove = "NONE";
    }
    console.log(`Computer Move: ${cMove}`);
    return cMove;
}


function playGame(playMove) {
        let compMove = getComputerMove();
        rounds++;
        switch(playMove) {
            case "rock":
                playerIMG.setAttribute('src', './Images/rock.png');
                break;
            case "paper":
                playerIMG.setAttribute('src', './Images/paper.png');
                break;
            case "scissors":
                playerIMG.setAttribute('src', './Images/scissors.png');
                break;
            default:
                console.log("Error");
        }
        switch(compMove) {
            case "rock":
                compIMG.setAttribute('src', './Images/rock.png');
                break;
            case "paper":
                compIMG.setAttribute('src', './Images/paper.png');
                break;
            case "scissors":
                compIMG.setAttribute('src', './Images/scissors.png');
                break;
            default:
                console.log("Error");
        }
        if(compMove === playMove) {
            console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
            console.log("Tie!")
            result = 'Tie';
        }
        else if(playMove === "rock") {
            if(compMove === "paper") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Lost!")
                result = 'Comp';
            }
            else if(compMove === "scissors") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Won!")
                result = 'Player';
            }
        }
        else if(playMove === "paper") {
            if(compMove === "rock") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Won!")
                result = 'Player';
            }
            else if(compMove === "scissors") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Lost!")
                result = 'Comp';
            }
        }
        else if(playMove === "scissors") {
            if(compMove === "rock") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Lost!")
                result = 'Comp';
            }
            else if(compMove === "paper") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Won!")
                result = 'Player';
            }
        }
        if(result === 'Comp') {
            resultText.textContent = `${compMove} beats ${playMove}. You lost!`;
            compPts++;
            compScore.textContent = `${Math.floor(compPts / 100)} ${Math.floor(compPts / 10) / 10}  ${Math.floor(compPts % 10)}`;
        }
        else if(result === 'Player') {
            resultText.textContent = `${playMove} beats ${compMove}. You won!`;
            playerPts++;
            playerScore.textContent = `${Math.floor(playerPts / 100)} ${Math.floor(playerPts / 10) / 10}  ${Math.floor(playerPts % 10)}`;
        }
        else
            resultText.textContent = `${playMove} and ${compMove}. It's a tie.`;
     }


