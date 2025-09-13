//using for loop and explain me step by step
// +++++++++++++++++++ For Loops ++++++++++++++++++++++++
//1.	Print 1–10 using for loop.
let a = 0;

for (let i = 1; i <= 10; i++) {
//    console.log(a + i)
}

//2.	Print even numbers 1–20.

 for (let i = 0; i <= 20; i++) {
   if(i % 2 === 0){
    // console.log(i);
   }
 }

 //3.	Print odd numbers 1–20.

 for (let i = 0; i <= 20; i++) {
    if(i % 2 !== 0){
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

//10.	While loop: 1–10.

let a1 = 1;
while (a1 <= 10) {
    // console.log(a1);
    a1++;
}

//11.	While loop: sum of 1–50.

let a2 = 1;
let sum1 = 0;

while(a2 <= 50){
    sum1 = sum1 + a2;
    a2++;
}
// console.log(sum1);

//12.	Do while loop: print 1–5..
let i = 1;
do {
    // console.log(i);
    i++;
    
} while (i <= 5);

//13.	Nested loops: multiplication table 1–5.
