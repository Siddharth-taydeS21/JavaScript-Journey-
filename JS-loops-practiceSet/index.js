//using for loop and explain me step by step
// +++++++++++++++++++ For Loops ++++++++++++++++++++++++
//1.	Print 1–10 using for loop.
let a = 0;

for (let i = 1; i <= 10; i++) {
    //    console.log(a + i)
}

//2.	Print even numbers 1–20.

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

//3.	Print odd numbers 1–20.

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
}

//4.	Print multiplication table of 5.

for (let i = 1; i <= 10; i++) {
    // console.log(5 * i);
}

//5.	Print factorial of 5.
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

//  console.log(factorial);

//6.	Sum numbers 1–100.
let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}

// console.log(sum);

//7. Reverse counting 10–1.

for (let i = 10; i >= 1; i--) {
    //    console.log(i)
}

//8.	Print pattern of * (triangle).
// if we wanted to manipulate rwos and symbols in patters : -
let rwos = 6;
let symbol = "*"

for (let i = 1; i <= rwos; i++) {
    let stars = " ";
    for (let j = 0; j < i; j++) {
        stars = stars + symbol;
    }
    // console.log(stars);
}

//++++++++++++++++++++++++ While loop ++++++++++++++++++++++++
//10.	While loop: 1–10.

let a1 = 1;
while (a1 <= 10) {
    // console.log(a1);
    a1++;
}

//11.	While loop: sum of 1–50.

let a2 = 1;
let sum1 = 0;

while (a2 <= 50) {
    sum1 = sum1 + a2;
    a2++;
}
// console.log(sum1);

//++++++++++++++++++++++++ Do While loop ++++++++++++++++++++++++
//12.	Do while loop: print 1–5..
let i = 1;
do {
    // console.log(i);
    i++;

} while (i <= 5);

//13.	Nested loops: multiplication table 1–5.

for (let i = 1; i <= 5; i++) {
    //    console.log(`Multipication table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

//14.	For…of: iterate array.
let sampleArr = [1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14,
    15, 16, 17, 17,
    18, 19, 20];

for (const num of sampleArr) {
    // console.log(num);
}

//using fro loop : -

for (let i = 0; i < sampleArr.length; i++) {
    // console.log(sampleArr[i]);
}

//15.	For…of: iterate string. 
let sampleStr = "SIDD SOFTWARE ENGINEER";
for (const letter of sampleStr) {
    // console.log(letter);
}

//using for loop - 

for (let i = 0; i < sampleStr.length; i++) {
    //    console.log(sampleStr.charAt(i));
}

//16.	For…in: iterate object.

const sampleObj = {
    firstNmae: "Siddharth",
    lastNmae: "Tayde",
    role: "Softwere Engineer",
    city: "mumbai",
    state: "maharashtra",
    pincode: "444000"
}

//how to loop values in an object ? -
for (const key in sampleObj) {
    if (sampleObj.hasOwnProperty(key)) {
        let values = sampleObj[key]
        // console.log(values)
    }
}

//17.	Continue statement example.
//1.
for (let i = 0; i < sampleArr.length; i++) {
    // console.log(`value of i is ${sampleArr[i]}`);
    if (i === 5) {
        // console.log(`5th iteration detected`);
        break;
    }
}

//2.
for (let i = 1; i < 20; i++) {
    // console.log(i);
    if (i == 5) {
        // console.log(`5th iteration detected`);
        break;
    }
}

//18.	Continue statement example.
for (let i = 1; i < 20; i++) {
    // console.log(i);
    if (i == 5) {
        // console.log(`5th iteration detected, from here, loop will continue`);
        continue;
    }
}

//19.	Infinite loop with break condition.

for (let i = 0; i < 10;) {
    // console.log(i);
    break;
}

//20.	Loop to count vowels in string.
let str = "efoifwbuvvrfoiwwhuivbyv";
let vowels = "aeiouAEIOU";

for (const char of str) {
    if (vowels.includes(char)) {
        // console.log(char);
    }
}


//21.	Loop through array and double values.

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

for (const num of newArr) {
    // console.log(num * 2);
}

//22.	Loop to find max number in array.
let array = [30, 10, 5, 20, 15];
let max = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
};
//  console.log(max);

//23.	Loop to reverse array.

const Arr = [30, 10, 5, 20, 15];
const reverseArr = [];

const length = Arr.length;
for (let i = 0; i < length; i++) {
    reverseArr.push(Arr.pop())
}

// console.log(reverseArr);

//24.	Loop to count digits in number.

let Numberr = 1000000; // must be let, not const
let count = 0;

// for (; Numberr > 0; Numberr = Math.floor(Numberr / 10)) {
//     count++;
// }


while (Numberr > 0){
    Numberr = Math.floor(Numberr / 10);
    count++;
}
// console.log(count);

//25.	Loop to check prime numbers 1–50.

let nums = [];

for (let i = 2; i <= 50; i++) {
    nums.push(i)
}
// console.log(nums);

