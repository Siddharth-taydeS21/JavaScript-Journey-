console.log("hey today i am learning Js Functions")

function myfunction(a, b) {
    return a * b;
}
let result = myfunction(3, 4);
console.log(result)

let result2 = myfunction(5, 2)
console.log(result2)

let result3 = myfunction(25, 4)
console.log(result3)

// function toCelsius(franahite){
//   return (5/9) * (franahite-32);
// }
// let todaysTempreture = toCelsius(77)
// console.log(todaysTempreture)

//example 1 :
function Celsiusto(franahite) {
    return (5 / 9) * (franahite - 32);
}
let todaysTempreture = Celsiusto(105)
console.log(todaysTempreture)

//example 2:
function addition(a, b) {
    return a + b;
}
let value = addition(5, 7)
console.log(value)

//example 3:
function isEven(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
let fraction = isEven(40)
console.log(fraction)

//example 4 :
function square(num) {
    return num * num;
}
let findsquare = square(50)
console.log(findsquare)

//example 5 :
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let findmax = max(44, 77)
console.log(findmax)

//example 6 :
function welcome(str) {
    return "Hellow " + str + "!";
}
//let guestname = welcome("Mr. Sowftware Engineer")
//console.log(guestname)
//alternative or short version :
console.log(welcome("Mr. Sowftware Engineer"))

// Arrow Functions :
// Arrow functions are basically the shorter version of writing a function. with help of arrow function you can store a function in a variable

//Arrow Functions Examples :
// example 1 :
let toCelsius = function (number) { return (5 / 8) * (number - 32) };
let Tempreture = toCelsius(68);
console.log(Tempreture)

//example 2 :
let maximum = function (a, b) {
    if (a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(maximum(50, 230))

//advance example :
let minimum = (a, b) => (a > b ? a : b);
console.log(minimum(56, 120))