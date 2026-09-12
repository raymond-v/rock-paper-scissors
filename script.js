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

const playGame = () => {
    let humanScore = 0
    let computerScore = 0
    const div = document.querySelector('#result')
    const rock = document.querySelector('#r')
    const paper = document.querySelector('#p')
    const scissors = document.querySelector('#s')

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

        div.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

        if (humanScore === 5) {
            console.log('human wins')
            div.textContent = 'human wins'
            humanScore = 0
            computerScore = 0
        } else if (computerScore === 5) {
            console.log('computer wins')
            div.textContent = 'computer wins'
            humanScore = 0
            computerScore = 0
        }
    }

    rock.addEventListener("click", () => {
        playRound('rock', getComputerChoice())
    })

    paper.addEventListener("click", () => {
        playRound('paper', getComputerChoice())
    })

    scissors.addEventListener("click", () => {
        playRound('scissors', getComputerChoice())
    })
}