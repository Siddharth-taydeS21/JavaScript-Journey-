//1.	Function to add two numbers.
function add(a, b) {
    return a + b;
}
// console.log(add(66, 99));

//2. Function to subtract two numbers.
function subtract(a, b) {
    return a - b;
}
// console.log(subtract(100, 79));

//3. Function to multiply two numbers.
function multiply(a, b) {
    return a * b;
}
// console.log(multiply(25, 5));

//4. Function to multiply two numbers.
function devide(a, b) {
    return a / b;
}
// console.log(devide(25, 5));

//5.	Function to check even/odd.
function evenOrodd(num) {
    if (num % 2 === 0) {
        return `${num} is even Number`
    }
    else {
        return `${num} is odd Number`
    }
}
// console.log(evenOrodd(22));

//6.	Function to return square.

function square(num) {
    return num * num
}
// console.log(square(16));

//7.	Function to return cube.

function cube(num) {
    return num * num * num
}
// console.log(cube(27));

//8.	Function to greet by name.

function greet(name) {
    return console.log(`hello! ${name}`);
}
// console.log(greet("Mr. Siddharth"));


//9.	Function to calculate area of rectangle.

const rectalngle = {
    height: 2,
    width: 6
}

function area(object) {
    return `The are of this object rectalngle is : ${object.height * object.width}`
}

// console.log(area(rectalngle));

//approach 2: with direct hight and width parameters

function calculateArea(height, width) {
    return `The are of this rectalngle is : ${height * width}`
}
// console.log(calculateArea(3, 12));


//10.	Function to calculate area of circle.

function areaOfCircle(pi, radius) {
    return `The area of Circle is : ${pi * (radius * radius)}`
}
// console.log(areaOfCircle(3.14, 24));

//11.	Function to return maximum of 2 numbers.

function max(a, b) {
    if (a > b) {
        return `${a} is greater then ${b}`
    } else {
        return `${b} is greater then ${a}`
    }
}

// console.log(max(2, 5));

//12.	Function to return maximum of 3 numbers.

function maxIn3(a, b, c) {
    if (a >= b && a >= c) {
        return `${a} is greater than ${b} and ${c}`
    }
    else if (b >= a && b >= c) {
        return `${b} is greater than ${a} and ${c}`
    }
    else {
        return `${c} is greater than ${a} and ${b}`
    }
}

// console.log(maxIn3(40, 40, 50));

//13.	Function to check leap year.

function isLeapYaer(num) {
    if (num % 400 === 0) {
        return `The year ${num} is a Leap year`
    }
    else if (num % 100 === 0) {
        return `The year ${num} is not a Leap year`
    }
    else if (num % 4 === 0) {
        return `The year ${num} is a Leap year`
    }
    else {
        return `The year ${num} is not a Leap year`
    }
}

// console.log(isLeapYaer(2300));

//14.	Function to reverse string.

function reverseString(str) {
    reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseString("YAMAHA"));

//15.	Function to count vowels in string.

function vowelsIn(str) {
    let vowels = "AEIOUaeoiu";
    let strVowels = [];
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            strVowels.push(char);
            count++;
        }
    }
    return `The string includes ${count} vowels : ${strVowels.join()}`;
}
// console.log(vowelsIn("Siddhart Not Out"));

//16.	Function to calculate factorial.

function factorialOf(num) {
    let n = num;
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;

}
// console.log(factorialOf(10));

//17.	Function with default parameter.

function add(a, b = 2) {
    return a + b
}
// console.log(add(5, 3));
// console.log(add(7));

//18.	Function with rest parameters.

// function cartValue(a, b, ...others){
//     // console.log("a", a);
//     // console.log("b", b);
//     // console.log("others", others)
// }
// console.log(cartValue(10, 10, 10, 10, 10, 10, 10, 10));

//19.	Function that takes another function (callback).
//not studied yet... skipped

//20.	Arrow function for addition.
//1st veriation -
let addValues = (a, b) => {
    return a + b;

};
// console.log(addValues(2, 4))

//2end vriation - implicit return

let addition = (a, b) => (a + b)
// console.log(addition(5, 10));

//3rd veriation - 

let plus = (a, b) => a + b;
// console.log(plus(20, 20));

//21.	Arrow function for square.

let squareOf = (num) => num * num;
// console.log(squareOf(3));

//22.	Immediately Invoked Function (IIFE).

let IIFE = (function () {
    //defination
})()//arguments

//arrow function version 

let arrowFun = (() => {/*
    defination
    */})(       )//arguments

//23.	Function to sum elements of array.

let sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(arr){
    let sumOfArr = 0;
for (let i = 0; i < arr.length; i++) {
     sumOfArr += arr[i];
}
return sumOfArr;
}
// console.log(sumOfArray(sampleArr));

//24.	Function to find largest element in array.
let negetives = [ -1, -10, -5, -3]

function largeInArr(arr){
   let max = arr[0];
   for (const element of arr) {
    if (element > max) {
        max = element;
    }
}
return max;
}
// console.log(largeInArr(negetives))

//25.	Function to filter even numbers from array

function filterEvens(arr){
    let evenNums = [];
for (const element of arr) {
    if (element % 2 === 0) {
        evenNums.push(element);
    }
}
return evenNums;
}
console.log(filterEvens(sampleArr));