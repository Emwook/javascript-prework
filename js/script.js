
var playerScore = 0, computerScore = 0;


function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    function getMoveName(number){
        if(number == 1){
            return 'kamień';
        }
        else if(number == 2){
            return 'papier';
        }
        else if(number == 3){
            return 'nożyce';
        }
        else{
            return 'nieznany ruch';
        }
    }
    
    const randomNumber = Math.floor(Math.random() * 3 + 1),
        computerMove = getMoveName(randomNumber);

    console.log('wylosowana liczba to: ' + randomNumber);
    printMessage('Mój ruch: ' + computerMove);
    
    let playerMove = argButtonName, playerInput;

    console.log('Wpisana odpowiedź to: ' + playerInput);
    printMessage('Twój ruch: ' + playerMove);
    
    function displayResult(playerMove, computerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove );
        if (playerMove == 'papier' && computerMove == 'kamień') {
          printMessage('Wygrywasz!');   
          playerScore = playerScore + 1;
        }
        else if(playerMove == 'kamień' && computerMove == 'papier') {
            printMessage('Przegrywasz!');
            computerScore = computerScore + 1;
        }
        else if (playerMove == 'kamień' && computerMove == 'nożyce') {
            printMessage('Wygrywasz!');
            playerScore = playerScore + 1;
        }
        else if(playerMove == 'nożyce' && computerMove == 'kamień') {
            printMessage('Przegrywasz!');
            computerScore = computerScore + 1;
        }
        else if (playerMove == 'papier' && computerMove == 'nożyce') {
            printMessage('Przegrywasz!');
            computerScore = computerScore + 1;
        }
        else if(playerMove == 'nożyce' && computerMove == 'papier') {
            printMessage('Wygrywasz!');
            playerScore = playerScore + 1;
        }
        else if(playerMove == computerMove){
            printMessage('Remis!')
        }
        else {
            printMessage('Tak to sobie nie pogramy!')
        }
      }
    
    displayResult(playerMove,computerMove)
    printMessage(playerScore + ' - ' + computerScore)
}

const buttonRock = document.getElementById('button-rock'),
    buttonPaper = document.getElementById('button-paper'),
    buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });