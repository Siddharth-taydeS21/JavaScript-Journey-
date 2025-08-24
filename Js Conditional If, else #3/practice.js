//ex 1.	
// Check if number positive or negative.

let a = -22;
let num;
if (a < 0) {
    num = "Negative";
}
else {
    num = "Positive";
}
console.log(num);

//ex 2.	
// Check if number is zero.

let ckeck;
if (a == 0) {
    ckeck = "Is Zero";
}
else {
    ckeck = "Is not Zero";
}
console.log(ckeck);

//ex 3.
// 	Check if person is adult (age ≥ 18).

let age = 18;
let maturity;
if (age >= 19) {
    maturity = "Adult";
}
else {
    maturity = "Teenager";
}
console.log(maturity);

//ex 4.	
// Nested if: check voting eligibility with citizenship.
let ageIs = 22;
let citizenship = "Indian";

let eligibility;
if ((ageIs > 18) && (citizenship == "Indian")) {
    eligibility = "eligible";
}
else {
    eligibility = "Not eligible"
}
console.log(eligibility);

//ex 
// 5.	Grade system (A/B/C/F).

let marks = 34;
let grade;
if (marks > 90) {
    grade = "A+";
}
else if (marks >= 80) {
    grade = "A";
}
else if (marks >= 70) {
    grade = "B";
}
else if (marks >= 60) {
    grade = "C";
}
else if (marks >= 35) {
    grade = "F";
}
else {
    grade = "Fail";
}
console.log(grade);

//ex 6.	
// Find largest of 2 numbers.
let num1 = 15;
let num2 = 20;

let largest;

if (num1 > num2) {
    largest = "Num1 is large"
}
else {
    largest = "Num1 is Small"
}

console.log(largest);

//ex 
// 7.	Find largest of 3 numbers.

let number1 = 70;
let number2 = 60;
let number3 = 100;

let largestIn3;

if ((number1 > number2) && (number1 > number3)) {
    largestIn3 = "Number 1 Is largest in 3"
}
else if ((number2 > number1) && (number2 > number3)) {
    largestIn3 = "Number 2 Is largest in 3"
}
else {
    largestIn3 = "Number 3 Is largest in 3"
}
console.log(largestIn3)

//ex 8.
// Check if year is leap year.

let year = 2017;

let result;
if (year % 4 === 0) {
    result = "Its A leap year";
}
else if (year % 100 === 0) {
    result = "Its Not a leap yaer";
}
else if (year % 400 === 0) {
    result = "Its A leap year";
}
else {
    result = "Its Not a leap year";
}
console.log(result)

//ex 9.
// 	Switch: day of week.
