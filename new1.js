console.log('Harry is here')

// computer selection
function computerPlay() {
    let choices = ['Rock','Paper','Sissors'];
    let randomPlay = Math.floor(Math.random() * choices.length)
    return choices[randomPlay]
}

// game start 
function game() {
    let roundsPlayed = '0';
    let playerWin = '0';
    let computerWin = '0';
    let gameWinner = '0';
   

    while (roundsPlayed < 5 ) {
        roundsPlayed ++;
        const computerSelection = computerPlay();
        playerSelection = prompt('Please enter your selection')
        console.log(playRound(capitalize(playerSelection), computerSelection))
        console.log('Player win totals equals ' + playerWin)
        console.log('Computer wins total ' + computerWin)

        // play the game, record wins and rounds 
        function playRound(playerSelection,computerSelection) {
            let tie = 'its a tie! you selected ' + playerSelection + 'and the computer slected ' + computerSelection;
            let paperBeatRock = 'You win! you selected ' + playerSelection + 'the computer selected ' + computerSelection;
            let rockBeatsSissors = 'You win! you selected ' + playerSelection + 'the computer selected ' + computerSelection;
            let sissorsBeatPaper = 'You win! you selected ' + playerSelection + 'the computer selected ' + computerSelection;
            let paperLosesSissors = 'You lost! You selected ' + playerSelection + 'the computer selected ' + computerSelection;
            let rockLosesPaper = 'You lost! You selected ' + playerSelection + 'the computer selected ' + computerSelection;
            let sissorsLosesRock = 'You lost! You selected ' + playerSelection + 'the computer selected ' + computerSelection;
            }
            if (computerSelection === playerSelection) {
                return tie
            } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
                playerWin ++;
                return paperBeatRock;
            } else if ((playerSelection === 'Sissots') && (computerSelection === 'Rock')) {
                playerWin ++;
                return sissorsBeatPaper;
            } else if ((playerSelection = 'Rock') && (computerSelection === 'Sissors')) {
                playerWin ++;
                return rockBeatsSissors;
            } else if ((playerSelection = 'Paper') && (computerSelection === 'Sissors')) {
                computerWin ++;
                return paperLosesSissors;
            } else if ((playerSelection = 'Rock') && (computerSelection == 'Paper')) {
                computerWin ++;
                return rockLosesPaper;
            } else if ((playerSelection = 'Sissors') && (computerSelection == 'Rock')) {
                computerWin ++;
                return sissorsLosesRock
            }
            } 
            
    // determine who won the five round set. 

    if (playerWin > computerWin){
        gameWinner = 'You win!';
    } else if (playerWin == computerWin) {
        gameWinner = 'You draw!'
    } else { (gameWinner == 'Computer wins!')
}
console.log('the game winner is ' + gameWinner)
}
game();
