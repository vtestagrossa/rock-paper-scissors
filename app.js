//TODO: Check each player for 5 wins and announce winner in results tab.
const content = document.getElementById('main');
const results = document.getElementById('results');

const resultsTxt = document.createElement('p');
const choiceTxt = document.createElement('p');
const winLoss = document.createElement('p');

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

let cpuWins = 0;
let playerWins = 0;
let cpuChoice = '';
let playerChoice = '';

resultsTxt.textContent = `CPU: ${cpuWins} Player: ${playerWins}`;
choiceTxt.textContent = ``;

rockBtn.textContent = 'Rock';
rockBtn.value = '1';
paperBtn.textContent = 'Paper';
paperBtn.value = '2';
scissorsBtn.textContent = 'Scissors';
scissorsBtn.value = '3';

rockBtn.addEventListener('click', (event) => {playRound(event.target.value, getComputerChoice())});
paperBtn.addEventListener('click', (event) => {playRound(event.target.value, getComputerChoice())});
scissorsBtn.addEventListener('click', (event) => {playRound(event.target.value, getComputerChoice())});

content.appendChild(rockBtn);
content.appendChild(paperBtn);
content.appendChild(scissorsBtn);

results.appendChild(resultsTxt);
results.appendChild(choiceTxt);
results.appendChild(winLoss);

function getComputerChoice(){
    return (1 + Math.floor(Math.random() * 3)).toString();
}
function getChoiceString(choice){
    switch(choice){
        case '1':
            return 'Rock';
        case '2':
            return 'Paper';
        case '3':
            return 'Scissors';
    }
    alert(`Something went wrong: choice ${choice} was invalid.`);
    return 'null';
}
function findWinner(p1Choice, computerChoice){    
    if (computerChoice === p1Choice){
        return 0;
    }
    else {
        switch(computerChoice){
            case '1':
                if (p1Choice === '2'){
                    return 1;
                }
                return -1;
            case '2':
                if (p1Choice === '3'){
                    return 1;
                }
                return -1;
            case '3':
                if (p1Choice === '1'){
                    return 1;
                }
                return -1;
        }
    }
    return -1;
}
function playRound(p1Choice, computerChoice){
    playerChoice = getChoiceString(p1Choice);
    cpuChoice = getChoiceString(computerChoice);
    let winner = findWinner(p1Choice, computerChoice);
    let winTxt = ''
    switch(winner){
        case -1:
            winTxt = 'You lose!';
            cpuWins++;
            break;
        case 0:
            winTxt = "It's a tie!";
            break;
        case 1:
            winTxt = "YOU WIN!";
            playerWins++;
            break;
    }
    resultsTxt.textContent = `CPU: ${cpuWins} Player: ${playerWins}`;
    choiceTxt.textContent = `CPU chose: ${cpuChoice}. You chose ${playerChoice}.`;
    winLoss.textContent = `${winTxt}`;

}