let rounds = 0, playerPts = 0, compPts = 0;

const main = document.querySelector(".main");
const scoreDisplayContainer = document.querySelector(".score");
const options_Container = document.querySelector(".options-Container");
const optionsMenu = document.querySelector(".options-menu");
const result_Container = document.querySelector(".result-Container");

const playerIMG = document.querySelector("#playerChoiceImg");
const compIMG = document.querySelector("#compChoiceImg");


scoreDisplayContainer.remove();
options_Container.remove();
result_Container.remove();


//Adding event handler to the startBtn 
startBtn.addEventListener('click', function(event) {
    main.append(scoreDisplayContainer);
    main.append(options_Container);
});


optionsMenu.addEventListener('click', function(event) {
    //.closest detects which div was clicked on by distance
    let playerMove = event.target.closest('.option').id;
    if(playerMove == "rock" || playerMove == "paper" || playerMove == "scissors") {
        console.log(`Player has chosen ${playerMove}`);
        options_Container.remove();
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
    console.log(`Computer Move: ${cMove}`);
    return cMove;
}


function playGame(playMove) {
        let compMove = getComputerMove();
        rounds++;
        main.append(result_Container);
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
        }
        else if(playMove === "rock") {
            if(compMove === "paper") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Lost!")
            }
            else if(compMove === "scissors") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Won!")
            }
        }
        else if(playMove === "paper") {
            if(compMove === "rock") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Won!")
            }
            else if(compMove === "scissors") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Lost!")
            }
        }
        else if(playMove === "scissors") {
            if(compMove === "rock") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Lost!")
            }
            else if(compMove === "paper") {
                console.log(`Round: ${rounds}, Player Move: ${playMove}, Computer Move: ${compMove}`);
                console.log("Player Won!")
            }
        }
    }

/* 
-CREATE A SEPERATE THING FOR THE FINAL RESULT
- Fix back the remove() and append attributes for the current options in playGame()
- Add final functionaility for button
- Increase score dynamically
- Optimize code by not using switch statments for WINNING results
*/