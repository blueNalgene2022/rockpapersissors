let playerScore = 0; 
let computerScore = 0;

const computerPlay = () => {
    const choices = ['rock','paper','scissors'];
    const randomPlay = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomPlay];
    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection ) {
        return 'You tied!' 
    }
    else if (playerSelection === 'scissors' &&  computerSelection === 'paper') {
        playerScore++
        return 'You Won! scissors beats Paper'
    }  
    else if (playerSelection === 'scissors' &&  computerSelection === 'rock') {
        computerScore++
        return 'You Lost! Rock beats scissors'
    }
    else if (playerSelection === 'rock' &&  computerSelection === 'scissors') {
        playerScore++
        return 'You Won! Rock beats scissors'
    }
    else if (playerSelection === 'rock' &&  computerSelection === 'paper') {
        computerScore++
        return 'You Lost! Paper beats scissors'
    }
    else if (playerSelection === 'paper' &&  computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper beats rock'
    }
    else if (playerSelection === 'paper' &&  computerSelection === 'scissors') {
        computerScore++
        return 'You lost! scissors beats paper'
    }
}


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please input your choice', 'Rock, Paper or Sissors').toLowerCase()
        const computerSelection = computerPlay()
        console.log('1',playRound(playerSelection, computerSelection))
    }

    if (playerScore > computerScore) {
        return 'you beat the computer! Well done!'
    } else if (playerScore < computerScore){ 
    return 'you lost!'
    } else {return 'you tied with computer.'}
}



console.log(game())


