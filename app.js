
function getPlayerChoice(){
    parsed = false;
    while (!parsed){
        let playerChoice = prompt("Enter your choice: 'rock', 'paper', or 'scissors'.");
        if (playerChoice === null){
            parsed = true;
            return 1;
        }
        else if (playerChoice.toLowerCase() == 'rock'){
            parsed = true;
            return 1;
        }
        else if (playerChoice.toLowerCase() == 'paper'){
            parsed = true;
            return 2;
        }
        else if (playerChoice.toLowerCase() == 'scissors'){
            parsed = true;
            return 3;
        }
        else {
            parsed = false;
            alert("Invalid Selection.");
        }
    }
}
function getComputerChoice(){
    return 1 + Math.floor(Math.random() * 3);
}
function getChoiceString(choice){
    switch(choice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
    console.log(`Something went wrong: choice ${choice} was invalid.`);
    return 'null';
}
function playRound(playerChoice, computerChoice){
    if (computerChoice === playerChoice){
        return 0;
    }
    else {
        switch(computerChoice){
            case 1:
                if (playerChoice === 2){
                    return 1;
                }
                return -1;
            case 2:
                if (playerChoice === 3){
                    return 1;
                }
                return -1;
            case 3:
                if (playerChoice === 1){
                    return 1;
                }
                return -1;
        }
    }
    return -1;
}
function game(){
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let cpuString = getChoiceString(computerChoice);

        let playerChoice = getPlayerChoice();
        let playerString = getChoiceString(playerChoice);
        if (playRound(playerChoice, computerChoice) === 0){
            playerScore++;
            cpuScore++;
            console.log(`It's a tie! ${cpuString} and ${playerString} are the same!`);
        }
        else if (playRound(playerChoice, computerChoice) === 1){
            playerScore++;
            console.log(`You win! ${playerString} beats ${cpuString}.`)
        }
        else if (playRound(playerChoice, computerChoice) === -1){
            cpuScore++;
            console.log(`You lose! ${cpuString} beats ${playerString}.`)
        }
        else {
            console.log(`Error: invalid round result.`);
            break;
        }
    }
    findWinner(playerScore, cpuScore);
}
function findWinner(playerScore, cpuScore){
    if (playerScore > cpuScore){
        console.log(`You win! Your score was ${playerScore} and your opponent's was ${cpuScore}.`)
    }
    else if (playerScore < cpuScore){
        console.log(`You lose! Your score was ${playerScore} and your opponent's was ${cpuScore}.`)
    }
    else{
        console.log(`You tied! Your score was ${playerScore} and your opponent's was ${cpuScore}.`)
    }
}
game();