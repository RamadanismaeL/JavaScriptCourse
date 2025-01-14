function welcomeMessage()
{
    alert('Welcome to the WebSite')
    alert('Items ('+(1+1)+'): $ '+(2095+799)/100)
    prompt('What\'s your name?')
}

console.log('Hello Friend')
console.log(`Hello Friend`)
console.log("Hello Friend")
console.log("I'm")
console.log('I\'m')

var firstName = 'John'

let age
age = 25

const address = 'Moz';

// Boolean
let status = true;

// Array
let fruits = [ 'apple', 'mango', 'orange', 2, true, [1,2,3] ]

// Object
let userDetails = { firstName: 'John', lastName: 'Doe', age: 62, isMarried: false }

let userName = 'user1'
userName = 'user2'


/*
! OPERATORS
==      ->      equal to
===     ->      equal value and equal type (string)
!=      ->      not equal
!==     ->      not equal value or not equal type (string)
>       ->      greater than
<       ->      less than
>=      ->      greater than or equal to
<=      ->      less than or equal to
?       ->      ternary operator
*/


let num1 = 10
let num2 = 5
let num3 = '7'

// Addition Operator (+)
let sum = num1+num2
console.log(sum)
console.log(sum+num3)

// Substraction Operator (-)
console.log(num1 - num2)

// Multiplication (*)
console.log(num1*num2)

// Division (/)
console.log(num1/num2)

// Remainder (%)
console.log(num1%num2)

// Exponentiation Operator (**)
console.log(num1**num2)

// equalsTo Operator (==) (return Boolean as result)
let equals = num1 == num2
console.log(equals)

// notEqualsTo Operator (!=)
console.log(num1 != num2)

// strict EqualsTo Operator (===)
console.log(num1 === num2)
a = 'a'
b = 'b'
console.log(a === b)
console.log(num1 === b)

console.log(num1 !== b)

// GreaterThan Operator (>)
console.log(num1 > num2)
console.log(num1 > 10)

// GreaterThan Operator or EqualsTo Operator (>=)
console.log(num1 >= num2)
console.log(num1 >= 10)

// LessThan Operator (<)
console.log(num1 < num2)
console.log(num1 < 5)

// LessThan or EqualsTo Operator (<=)
console.log(num2 <= num1)
console.log(num1 <= 8)

// unicode
console.log('=============================')
let unicode = 'A'
console.log(unicode.charCodeAt())
let unicode2 = 'a'
console.log(unicode2.charCodeAt())
console.log('-===========================')

console.log(0.1 + 0.2)
console.log((1+2)/10)
console.log(20.95+7.99)
console.log((2095+799)/100)

console.log(Math.round(2.4))
console.log(Math.round(2.8))

console.log(typeof 2)
console.log(typeof '2')
console.log(typeof [2])
console.log('$' +20.95+7.99)
console.log('$'+(2095+799)/100)
console.log('$'+Math.round(20.95+7.99))
/*
! LOGICAL OPERATORS
- Logical AND operator, symbol is   &&
- Logical OR operator, symbol is    ||
- Logical NOT operator, symbol is   !

! SINTAX
condition ? expression1 : expression2
*/
let back = (age >= 18) ? "Can back" : "Can not back"
console.log(back)

let personType = 'student'
let isEligible = personType == 'student' && age > 23
console.log(isEligible)

// Msgm
//Error Message
console.error('This is a Error Message')

//Warnning Message
console.warn('This is a Warnning Message')

//Information Message
console.info('This is a information Message')

console.log('Items (${1 + 1})')
console.log(`Items (${1 + 1})`)
console.log(`Items (${1 + 1}): $${(2095 + 799)/100}`)
