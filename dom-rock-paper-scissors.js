let computerMoveLocal = ''
let resultLocal = ''

let scoreLocal = JSON.parse(localStorage.getItem('scoreLocal')) || { wins: 0, losses: 0, ties: 0 }
console.log(scoreLocal)

updateScoreElement()

function pickComputerMoveLocal()
{
    const randomNumberLocal = Math.random();
    if(randomNumberLocal >= 0 && randomNumberLocal < 1/3) { computerMoveLocal = 'rock' }
    else if(randomNumberLocal >= 1/3 && randomNumberLocal < 2/3) { computerMoveLocal = 'paper' }
    else if(randomNumberLocal >= 2/3 && randomNumberLocal < 1) { computerMoveLocal = 'scissors' }

    //return; // return undefined
    console.log(computerMoveLocal)
}

function playGameLocal(playerMode)
{
    if(playerMode === 'rock')
    {
        pickComputerMoveLocal();

        if(computerMoveLocal === 'rock') { resultLocal = 'Tie.' }
        else if(computerMoveLocal === 'paper') { resultLocal = 'You lose.' }
        else if(computerMoveLocal === 'scissors') { resultLocal = 'You win.' }
    }
    else if(playerMode === 'paper')
    {
        pickComputerMoveLocal()

        if(computerMoveLocal === 'rock') { resultLocal = 'You win.' }
        else if(computerMoveLocal === 'paper') { resultLocal = 'Tie.' }
        else if(computerMoveLocal === 'scissors') { resultLocal = 'You lose.' }
    }
    else if(playerMode === 'scissors')
    {
        pickComputerMoveLocal()

        if(computerMoveLocal === 'rock') { resultLocal = 'You lose.' }
        else if(computerMoveLocal === 'paper') { resultLocal = 'You win.' }
        else if(computerMoveLocal === 'scissors') { resultLocal = 'Tie.' }
    }

    if(resultLocal === 'You win.') { scoreLocal.wins++ }
    else if(resultLocal === 'You lose.') { scoreLocal.losses++ }
    else if(resultLocal === 'Tie.') { scoreLocal.ties++ }

    localStorage.setItem('scoreLocal', JSON.stringify(scoreLocal))

    document.querySelector('.js-result').innerHTML = resultLocal

    document.querySelector('.js-moves').innerHTML =
        `You
        <img src="./${playerMode}-emoji.png" alt="">
        <img src="./${computerMoveLocal}-emoji.png" alt="">
        Computer`

    updateScoreElement()
}

function updateScoreElement()
{
    document.querySelector('.js-score').innerHTML = `Wins: ${scoreLocal.wins}, Losses: ${scoreLocal.losses}, Ties: ${scoreLocal.ties}`
}

function resetLocal()
{
    scoreLocal.wins = 0,
    scoreLocal.losses = 0,
    scoreLocal.ties = 0,
    localStorage.removeItem('scoreLocal')
    updateScoreElement()
    document.querySelector('.js-result').innerHTML = null

    document.querySelector('.js-moves').innerHTML = null

    alert(`Cleared Successfuly\nWins: ${scoreLocal.wins}, Losses: ${scoreLocal.losses}, Ties: ${scoreLocal.ties}`)
}