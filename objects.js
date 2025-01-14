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

const product2 =
{
    names: 'shirt',
    ['delivery-time']: '1 day',
    rating: {
        starts: 4.5,
        count: 87
    },
    fun: function function1() { console.log('function inside object') }
};
console.log(product2)
console.log(product2.names)
console.log(product2['names'])
console.log(product2['delivery-time'])
console.log(product2.rating)
console.log(product2.rating.starts)
product2.fun()

console.log(typeof console.log)

// Object + function = Method
// JSON = JavaScript Object Notation

let convert = JSON.stringify(product2)
console.log(convert)
console.log(typeof convert)
let convert2 = JSON.parse(convert)
console.log(convert2)

localStorage.setItem('message', 'hello friend!')
localStorage.setItem('score', JSON.stringify(score))
console.log(localStorage.getItem('message'))
console.log(localStorage.getItem('score'))
console.log(JSON.parse(localStorage.getItem('score')))



let computerMoveLocal = ''
let resultLocal = ''

let scoreLocal = JSON.parse(localStorage.getItem('scoreLocal')) || { wins: 0, losses: 0, ties: 0 }
 console.log(scoreLocal)
/*
if(!scoreLocal)
{
    scoreLocal =
    {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
*/
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

    alert(`You picked ${playerMode}. Computer picked ${computerMoveLocal}. ${resultLocal}\nWins: ${scoreLocal.wins}, Losses: ${scoreLocal.losses}, Ties: ${scoreLocal.ties}`)
}

function resetLocal()
{
    scoreLocal.wins = 0,
    scoreLocal.losses = 0,
    scoreLocal.ties = 0,
    localStorage.removeItem('scoreLocal')

    alert(`Cleared Successfuly\nWins: ${scoreLocal.wins}, Losses: ${scoreLocal.losses}, Ties: ${scoreLocal.ties}`)
}

function showResult()
{
    alert(`SHOW RESULTS\n${localStorage.getItem('scoreLocal')}`)
}


console.log('hello'.length)
console.log('hello'.toUpperCase())

const object1 = {
    message: 'hello'
}

const object2 = object1;

object1.message = 'Good job!'
console.log(object1)
console.log(object2)

const object3 =
{
    message: 'Good job!'
}

console.log(object3 === object1)
console.log(object1 === object2)

const object4 =
{
    message1: 'Good job!',
    price1: 799
}
//const message = object4.message
const { message1, price1 } = object4
console.log(message1)
console.log(price1)

const object5 = {
    message1: message1
}
console.log(object5)

const object6 =
{
    message1,
    //method: function function6(){ console.log('method') }
    method() { console.log('method') }
}
console.log(object6)
object6.method()