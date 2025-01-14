const product =
{
    name: 'socks',
    price: 1090
};

console.log(product)
console.log(`Product name: ${product.name}`)
console.log(`Product price: ${product.price}`)

product.name = 'cotton socks'
console.log(product)

product.newProperty = true;
console.log(product)

delete product.newProperty
console.log(product)

console.log(typeof product)


let computerMoveObject = ''
let resultObject = ''

const score =
{
    wins: 0,
    losses: 0,
    ties: 0
}

function pickComputerMoveObject()
{
    const randomNumberObject = Math.random();
    if(randomNumberObject >= 0 && randomNumberObject < 1/3) { computerMoveObject = 'rock' }
    else if(randomNumberObject >= 1/3 && randomNumberObject < 2/3) { computerMoveObject = 'paper' }
    else if(randomNumberObject >= 2/3 && randomNumberObject < 1) { computerMoveObject = 'scissors' }

    //return; // return undefined
    console.log(computerMoveObject)
}

function playGameObject(playerMode)
{
    if(playerMode === 'rock')
    {
        pickComputerMoveObject();

        if(computerMoveObject === 'rock') { resultObject = 'Tie.' }
        else if(computerMoveObject === 'paper') { resultObject = 'You lose.' }
        else if(computerMoveObject === 'scissors') { resultObject = 'You win.' }
    }
    else if(playerMode === 'paper')
    {
        pickComputerMoveObject()

        if(computerMoveObject === 'rock') { resultObject = 'You win.' }
        else if(computerMoveObject === 'paper') { resultObject = 'Tie.' }
        else if(computerMoveObject === 'scissors') { resultObject = 'You lose.' }
    }
    else if(playerMode === 'scissors')
    {
        pickComputerMoveObject()

        if(computerMoveObject === 'rock') { resultObject = 'You lose.' }
        else if(computerMoveObject === 'paper') { resultObject = 'You win.' }
        else if(computerMoveObject === 'scissors') { resultObject = 'Tie.' }
    }

    if(resultObject === 'You win.') { score.wins++ }
    else if(resultObject === 'You lose.') { score.losses++ }
    else if(resultObject === 'Tie.') { score.ties++ }

    alert(`You picked ${playerMode}. Computer picked ${computerMoveObject}. ${resultObject}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
}

function resetObject()
{
    score.wins = 0,
    score.losses = 0,
    score.ties = 0

    alert(`Cleared Successfuly\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
}