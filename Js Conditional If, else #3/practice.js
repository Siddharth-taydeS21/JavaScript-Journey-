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
let date = new Date();
let day;
switch (5) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(day)

//ex 10.
// 	Switch: month number to month name.

let month;
switch (date.getDay()) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "Disember";
        break;
    default:
        month = "Invalid Month Number";
}
console.log(month)

//ex 11.
// 	Switch with default case.
let cuponNo = 9;
let order;
switch (cuponNo) {
    case 1:
        order = "Coffie";
        break;
    case 2:
        order = "Shake";
        break;
    case 3:
        order = "Burger";
        break;
    case 4:
        order = "Wrap";
        break;
    case 5:
        order = "Pizze";
        break;
    case 6:
        order = "French Fries";
        break;
    case 7:
        order = "Pan Cake";
        break;
    default:
        order = "Invalid Cupon Number";
        break;
}
console.log(order)

//ex 12.	
// If else: check password length ≥ 8.

let password = "1234567";
let lenght = password.length;
console.log(lenght)

let check;

if (lenght < 8) {
    check = "Your password must have at least 8 characters";
}
else {
    check = "logged in successfully";
}
console.log(check)

//ex 13.
// 	Nested if: check if divisible by 2 and 3.

// let c = 12;
// let divisiblity;

// if (c % 2 === 0) {
//     divisiblity = "The number is divisible by 2";
// }
// else if (c % 3 === 0) {
//     divisiblity = "The number is divisible by 2 and 3"
// }
// else {
//     divisiblity = "The number is not divisible by 2 and 3"
// }

// console.log(divisiblity)

let c = 12;
let divisiblity;

if (c % 2 === 0 && c % 3 === 0) {
    divisiblity = "The Number is Divisible By 2 and 3";
}

else if (c % 2 === 0) {
    divisiblity = "The Number is Divisible By 2 only";
}

else if (c % 3 === 0) {
    divisiblity = "The Number is Divisible By 3 only";
}

else {
    divisiblity = "The Numver is not Divisible by 2, 3.";
}

console.log(divisiblity);

//ex 14.
// 	Ladder: temperature (cold, warm, hot).
let temperature = 35;

let todaysTemp;
if (temperature < 15) {
    todaysTemp = "Cold";
}
else if (temperature > 15 && temperature < 30) {
    todaysTemp = "Warm";
}
else {
    todaysTemp = "Hot";
};
console.log(todaysTemp)

//15.	
// Ladder: marks with distinction.
let marks1 = 75;

let result1;
if (marks1 >= 75) {
    result1 = "distinction"
}
else if (marks1 >= 60) {
    result1 = "First Class"
}
else if (marks1 >= 45) {
    result1 = "Second Class";
}
else if (marks1 >= 35) {
    result1 = "Pass";
}
else {
    result = "Fail";
}
console.log(result1);

//ex 16.
// 	Short-circuit if with &&.
let age1 = 16;
age1 >= 18 && console.log("You can Vote");
age1 < 18 && console.log("You can't Vote");

//ex 17.	
// Print "Valid" if number > 0 else "Invalid".

let num3 = -1;
num3 > 0 && console.log("Valid");
num3 < 0 && console.log("Invalid")

//ex 18.
// 	Use ternary operator for login check.
let loggedin = true;
let massage = loggedin ? "Welocme" : "Please Log In";
console.log(massage)

//ex 19.	
// Compare two strings. 
let a1 = "Welcome";
let a2 = "Welcome Back"
console.log(a1 == a2);

//ex 21.	
// Check if number is prime (simple).

//ex 22.
// 	Check if number divisible by 5.

let num4 = 51;

num4 % 5 === 0 && console.log("Number Is Divisible by 5");
num4 % 5 !== 0 && console.log("Number Is not Divisible by 5");

//ex 23.	
// Check if number divisible by 7.
let num5 = 17;
num5 % 7 === 0 && console.log("Number Is Divisible by 7");
num5 % 7 !== 0 && console.log("Number Is not Divisible by 7");

//ex 24.
// 	If string includes "hello".
let str = "hello World"
let result2;
if (str.includes("hello")) {
    result2 = "Includes - hello";
}
else {
    result2 = "Not Includes hello";
};
console.log(result2);

//ex 25.	
// If array length > 5.
let arr = ["apple", "banana", "mango", "orange", "strowberry"];
let lenghtofarray;

if (arr.length > 5) {
    lenghtofarray = "array length is more than 5";
}
else if (arr.length >= 5) {
    lenghtofarray = "array length is 5";
}
else {
    lenghtofarray = "array length is less than 5";
}
console.log(lenghtofarray);

//ex 26.	
// If object has property using in.

//ex 27.	
// Nested if else with 3 levels.
let age2 = 18;
let forlicence;
if (age2 >= 18) {
    forlicence = "Eligible";
}
else if (age2 > 75) {
    forlicence = "Eligiblity Expired";
}
else {
    forlicence = "Not Eligible";
}
console.log(forlicence);

//ex 28.	
// Use switch for traffic light.
let trafficLight = 3;
let trafficSignal;
switch (trafficLight) {
    case 1:
        trafficSignal = "Yellow";
        break;
    case 2:
        trafficSignal = "Green";
        break;
    case 3:
        trafficSignal = "Red";
        break;
}
console.log(trafficSignal)

//ex 29.
// 	Use switch for browser detection.
let browser = 1;
let currentbrowser;
switch (4) {
    case 1:
        currentbrowser = "Chrome";
        break;
    case 2:
        currentbrowser = "Firefox";
        break;
    case 3:
        currentbrowser = "Edge";
        break;
    case 4:
        currentbrowser = "Opera";
        break;
    default: "Invalid Number";
}
console.log(currentbrowser)

//ex 30.
// 	If else for valid email (contains @).
let email = "@xyz.gamail.com"
let valideamil;
if (email.includes("@")) {
    valideamil = "Valid Email";
}
else {
    valideamil = "Invalid Email";
}
console.log(valideamil);