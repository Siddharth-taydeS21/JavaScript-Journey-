//exm 1.	
// Add two numbers.

let a = 5;
let b = 4;
let c = a + b;
console.log(c);

//exm 2.	
// Subtract two numbers.

let d = a - b;
console.log(d);

//exm 3.	
// multiply two numbers.

let e = a * b;
console.log(e);

//exm 4.	
// devide two numbers.

let f = a / b;
console.log(f);

//exm 5.	
// Find remider of duvision.

let reminder = a % b;
console.log(reminder);

//exm 6.	
// Find exponentiation (2 ** 3).

let a1 = 2;
let a2 = 3;
let a3 = a1 ** a2;

console.log(a3);

//exm 7.	
// 	Check equality (==).

let a4 = "5";
let a5 = 5;

let a6 = a4 == a5;
console.log(a6);

//exm 8.	
// 	Check equality (===).

let a7 = a4 === a5;
console.log(a7);

//exm 9.	
// 	Check equality (!=).

let a8 = a4 != a5;
console.log(a8);

//exm 10.	
// 	Check strict equality (!==).
let a9 = a4 !== a5;
console.log(a9);

//exm 11.	
// 	Greater than operator.

let b1 = 5;
let b2 = 7;
let b3 = b2 > b1;

console.log(b3);

//exm 12.	
// 	lesser than operator.

let b4 = b1 < b2;
console.log(b4);

//exm 13.	
// 	Greater or equal operator.

let b5 = 8;
let b6 = b5 >= b2;
console.log(b6);

//exm 14.	
// 	lesser or equal operator.
 
let b7 = b2 <= b5;
console.log(b7);

//exm 15.	
// 	Use logical AND (&&).

b8 = (b5 >= b2 && b5 >= b3)
console.log(b8)
// it gives ture when both or all conditions are true . if both or all conditions are false it gives false. and if only one condition is true or false it gives true or false.

//exm 16.	
// 	Use logical AND (||).

let b9 = (5 > 9||6 > 4);
console.log(b9)

//exm 17.	
// 	Use logical AND (!).

let b10 = !(6 > 4);
console.log(b10)

//exm 18.	
// Ternary operator to check even/odd..

let c1 = 52; 
let EvenorOdd = (c1 % 2 === 0) ? "Odd" : "Even";
console.log(EvenorOdd);

marks =  95;
grade = (marks >=  95)? "A+" : (marks >= 90)? "A" : "B";
console.log(grade);

let Visibility = "IsLogedInn"
let welcome =(Visibility === "IsLogedInn") ? "Welcome Back" : "Please LogIn";
console.log(welcome);

let amount = 1000;
let Discount = (amount > 500) ? "Discount" : "No Discount";
console.log(Discount);

//exm 20 to 22.	
// Compound Assignment +=.
// Compound Assignment -=.
// Compound Assignment *=.
// Compound Assignment /=.

let x = 5; let y = 10;

y += x; 
console.log(y);

y -= x; 
console.log(y);

y *= x; 
console.log(y);

y /= x; 
console.log(y);

//exm 23.	
// Pre-increment vs post increment.

//Pre increment example :
let d1 =  5;
let d2 = ++d1;
console.log(d1)
console.log(d2)

//Post increment example :
let d3 = 7;
let d4 = d3++;
console.log(d3)
console.log(d4)

//exm 24.	
// Pre-Decriment vs post Decriment.

//Post increment example :
let d5 = 8;
let d6 = --d5;
console.log(d5)// 7
console.log(d6)// 7

//Post decrement example :
let d7 = 6;
let d8 = d7--;
console.log(d7)// 5
console.log(d8)// 6

//exm 25.	
//String concatenation with +.

let e1 = "Sidd";
let e2 = " Is a skilled Software Engineer"
let e3 = e1 + e2;
console.log(e3)

//exm 26.
// 	Check "5" + 2 vs "5" - 2.

let e4 = "5" + 2;
let e5 = "5" - 2;
console.log(e4, e5);

//exm 27.	
// Use typeof operator.

console.log(typeof(e4))
console.log(typeof(e5))

//exm 28.
// 	Check null == undefined.

let e6 = (null == undefined);
console.log(e6)

//exm 29.	
// Check null === undefined.
let e7 = (null === undefined);
console.log(e7)

let e8 = null;
console.log(typeof(e8))

let e9 = undefined;
console.log(typeof(e9))