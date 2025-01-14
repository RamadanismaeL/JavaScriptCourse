const myArray = [10, 20, 30]
console.log(myArray)
console.log(myArray[1])

myArray[0] = 99
console.log(myArray)

//[1, 'hello', true, {name: 'socks'}, [1, 2]]

console.log(typeof [1, 2])
console.log(Array.isArray([1,2]))
console.log(typeof myArray)

console.log(myArray.length)

myArray.push(121);
console.log(myArray)

// Remove
//myArray.splice(0) Remove all datas
myArray.splice(0, 1)
console.log(myArray)



let i = 1
while(i <= 5)
{
    console.log(i)
    i++
}

for(let i = 1; i <= 5; i++) { console.log(i) }

let randomNumber = 0

while(randomNumber < 0.5)
{
    randomNumber = Math.random()
}

console.log(randomNumber)
// 8:18:51