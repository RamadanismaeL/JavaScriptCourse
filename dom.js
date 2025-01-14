// Document Object Model (DOM) - represents the web page
// Window Object - represents the browser

/*
document.body.innerHTML = 'hello'
document.title = 'Good job!'
*/


console.log(document.title)
console.log(document.body)
console.log(typeof document.body)

console.log(document.body.innerHTML) //controls all the HTML inside the body..
//document.body.innerHTML = 'Changed'

/*
! document.querySelector() - lets us get any element from the page and put it inside JavaScript
*/

console.log(document.querySelector('button'))
console.log(document.querySelector('button').innerHTML)
//document.querySelector('button') = 'Changed'
console.log(document.querySelector('.js-button'))

const buttonElement = document.querySelector('.js-button')
console.log(buttonElement)

function btnSubscribe()
{
    const btnSubscrElement = document.querySelector('.js-subscribe-button')
    //console.log(btn)
    if(btnSubscrElement.innerText === 'Subscribe' ) { btnSubscrElement.innerHTML = 'Subscribed' }
    else { btnSubscrElement.innerHTML = 'Subscribe' }
}
//btnSubscribe()

function btnCalculateTotal()
{
    const inputElement = document.querySelector('.js-cost-input')
    //inputElement.value
    //console.log(inputElement.value)
    let cost = inputElement.value
    console.log(typeof cost)

    cost = Number(inputElement.value)
    console.log(typeof cost)

    if(cost < 40){ cost += 10 }

    document.querySelector('.js-total-cost').innerHTML = `$ ${cost}`
}
console.log(document.querySelector('.js-cost-input'))

function handleCostKeyDown(event)
{
    /*console.log('typing')*/ console.log(event.key)
    if(event.key === 'Enter') { btnCalculateTotal() }
}

String(25)
console.log('25' - 5) // number result = 20
console.log('25' + 5) // string result = 255


window.document
window.console.log('window')
window.alert('Hello friends')