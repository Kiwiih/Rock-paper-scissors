//länka varje knapp till en variabel/specifikt val

//Skapa en math.random 1-5 för datorn för varje val

//If sats för varje val och cad den besegrad(blir en del)
//consollogga allt till en början


//Hämta in alla alternativ-knappar
const userRock = document.getElementById('rock');
const userPaper = document.getElementById('paper');
const userScissors = document.getElementById('scissors');
const userSpock = document.getElementById('spock');
const userLizard = document.getElementById('lizard');

const gameResult = document.getElementById('game-result');
const restartBtn = document.getElementById('restart-btn');
const scores = document.getElementById('scores');

//Event-listeners för varje knapp kopplat till en funktion
userPaper.addEventListener('click', checkUserChoice);
userRock.addEventListener('click', checkUserChoice);
userScissors.addEventListener('click', checkUserChoice);
userSpock.addEventListener('click', checkUserChoice);
userLizard.addEventListener('click', checkUserChoice);

//Variabler för scores
let userScore = 0;
let computerScore = 0;

//RESTART GAME FUNCTION
restartBtn.addEventListener('click', restart);
function restart() {
    location.reload();
}
//Funktion som kollar användarens val och kopplar till ett svar
function checkUserChoice(){
    generateComputerChoice();
    scoresOutput();
    const userChoice = event.target;
    const computerChoice = generateComputerChoice();
    if (userChoice === userRock){
    }
    else if (userChoice === userPaper){
    }
    else if (userChoice === userScissors){
    }
    else if (userChoice === userSpock ){
    }
    else if (userChoice === userLizard){
    }
    //If sats för att kolla resultatet!
    if (userChoice.id === computerChoice ) {
        resultsOutput('It\'s a tie!');
    } else if (userChoice.id === 'rock' && (computerChoice  === 'scissors' || computerChoice  === 'lizard')){
        userScore++;
        resultsOutput('You win! ' + 'Your choice: '+ userChoice.id +', Computers choice: '+ computerChoice);
        
    } else if (userChoice.id === 'paper' && (computerChoice  === 'rock' || computerChoice  === 'spock')){
        userScore++;
        resultsOutput('You win! ' + 'Your choice: '+ userChoice.id +', Computers choice: '+ computerChoice);
        
    } else if(userChoice.id === 'scissors' && (computerChoice  === 'paper' || computerChoice  === 'lizard')){
        userScore++;
        resultsOutput('You win! ' + 'Your choice: '+ userChoice.id +', Computers choice: '+ computerChoice);
    } else if (userChoice.id === 'spock' && (computerChoice  === 'scissors' || computerChoice  === 'rock')){
        userScore++;
        resultsOutput('You win, live long and prosper. ' + 'Your choice: '+ userChoice.id +', Computers choice: '+ computerChoice);
    } else if (userChoice.id === 'lizard' && (computerChoice === 'spock' || computerChoice  === 'paper')){
        userScore++;
        resultsOutput('You win! ' + 'Your choice: '+ userChoice.id +', Computers choice: '+ computerChoice );
    } else{
        resultsOutput('You lose! '+ 'Your choice: '+ userChoice.id +', Computers choice: '+ computerChoice );
        computerScore++;
    }  
    //console.log('u:'+userScore +'c'+ computerScore);
    setTimeout(scoresOutput, 10);
}
//Funktion för att skapa ett rng dataval för att spela mot användaren
function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    //If sats för att koppla rng till ett val
    if(randomNumber === 1){
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    } else if (randomNumber === 4) {
        return 'lizard';
    } else if (randomNumber === 5) {
        return 'spock';
    } 
}
//Funktion för att printa resultaten
function resultsOutput(message){
    let outputElement = document.createElement('p');
    outputElement.textContent = message;
    gameResult.appendChild(outputElement);
}

function scoresOutput(){
    while (scores.firstChild) {
        scores.removeChild(scores.firstChild);
    }
    let outputElement = document.createElement('h2');
    outputElement.textContent = 'YOU | '+userScore + ' : ' + computerScore+' | PC';
    scores.appendChild(outputElement);
}