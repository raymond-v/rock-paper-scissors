const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return 'rock'
    } else if (num == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

const getHumanChoice = () => {
    let choice = prompt("Pick Rock Paper Scissors")
    return choice.toLowerCase()
}


const playGame = () => {
    let humanScore = 0
    let computerScore = 0

    const playRound = (humanChoice, computerChoice) => {
        // Computer chooses rock
        if (computerChoice == 'rock') {
            if (humanChoice == 'paper') {
                console.log('winner, computer chose rock')
                humanScore++
            } else if (humanChoice == 'scissors') {
                console.log('loser, computer chose rock')
                computerScore++
            } else if (humanChoice == 'rock') {
                console.log('draw, computer chose rock')
            }
        }
        // Computer chooses paper
        if (computerChoice == 'paper') {
            if (humanChoice == 'rock') {
                console.log('loser, computer chose paper')
                computerScore++
            } else if (humanChoice == 'scissors') {
                console.log('winner, computer chose paper')
                humanScore++
            } else if (humanChoice == 'paper') {
                console.log('draw, computer chose paper')
            }
        }
        // Computer chooses scissors
        if (computerChoice == 'scissors') {
            if (humanChoice == 'rock') {
                console.log('winner, computer chose scissors')
                humanScore++
            } else if (humanChoice == 'paper') {
                console.log('loser, computer chose scissors')
                computerScore++
            } else if (humanChoice == 'scissors') {
                console.log('draw, computer chose scissors')
            }
        }
    }
    
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore) {
        console.log('human wins')
    } else if (humanScore < computerScore) {
        console.log('computer wins')
    } else {
        console.log('draw')
    }
}