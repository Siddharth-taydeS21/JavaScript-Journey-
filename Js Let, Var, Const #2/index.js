//exm. 1 :
var name = "sid";
var age = "21";
var is = "student"

//exm. 2
const study = "12th";
const work = "web dev";
const intrest = "javascript";

//exm. 3 :
let globalvar = "I am global var";

function toscope() {
    let localvar = "I ma Local var";

    // console.log(globalvar); //accessible in function
    // console.log(localvar); // accessible in function
}

// console.log(globalvar); // accessible Globally
// console.log(localvar); // not accessible Globally

//exm. 4 :
// checking type of string number and boolean
let first = "string";
let second = 8;
let third = true;

console.log(typeof first)
console.log(typeof second)
console.log(typeof third)

//exm. 6 :
// checking type of null and undifined

let fourth = null;
let fifth =

    console.log(typeof fourth)
console.log(typeof fifth)

//exm. 10 : 
let firstname = "sid";
let skill = "full stack";
let roll = "engineer"

//template literals with examples :
let text = `hii ${firstname}, You are A ${skill} ${roll}`;
console.log(text)

let friendone = {
    dname: "prshik",
    age: 21,
    work: "Charted Accountnt"
}

let text2 = `Hellow my name is ${friendone.dname} I am ${friendone.age} years old, I work as a ${friendone.work}.`;

let friendtwo = {
    dname: "tejas",
    age: 21,
    work: "Grapgic Designer"
}

let text3 = `Hellow my name is ${friendtwo.dname}. I am ${friendtwo.age} years old, I work as a${friendtwo.work}.`

const hobbies = {
    dname:"siddharth",
    hobby1:"Coding",
    hobby2:"Enjoying my favoraite food",
    hobby3:"swimming"
}
let text4 = `Hii my name is ${ hobbies.dname}. My Hobbies are ${hobbies.hobby1}, ${ hobbies.hobby2}, ${ hobbies.hobby3}.`;

console.log(text2);
console.log(text3);
console.log(text4)

//exm. 11 : 
// concatination of 2 strings 
let string1 = "Software";
let string2 = "Engineer";

let concat = string1 + " " + string2;
console.log(concat)

//exm. 12 t0 14:

let a = 3.50;

let b = Math.round(a);
let c = Math.ceil(a);
let d = Math.floor(a);

console.log(b)
console.log(c)
console.log(d)

//exm. 15 and 16:
//typeof bigint : -
let bigint = 9999999999999n;
let type = (typeof bigint);
console.log(type)

//exm. 17 : 
//	Store boolean and invert it. -
let e = true;
let f = !e;
console.log(f)

//exm. 18 and 19 : 
//Compare two numbers strictly and loosely. -

42 == "42" // true/ comparing it loosely
42 === "42" // false/ comparing it strictly

//exm. 20
//Swap two numbers using third variable.

let s = 5;
let t = 10;
console.log("Before swap - " + s + " " + t)
let temp = s;
s = t;
t = temp;
console.log("After swap - " + s + " " + t)

//exm. 21
//Swap two numbers without using third variable.

let g = 10;
let h = 20;
console.log("Before swap - " + g + " " + h)

g += g;
h -= (h - 10);
console.log("After swap - " + g + " " + h)

//exm. 22 -
//Store object with 2 properties, log values.
const car = {
    company: "Fiat",
    model: "volvo"
};

console.log(car.company);
console.log(car.model);

//exm. 23 -
//Store array with 3 elements, log first element.

const myCars = ["Porche 911", "Camaro SS", "Ford Mustang", "Audi R8", "Jaguar F-type", "BMW Z4", "Mercedes AMG gt", "Wrangler Rubicon"];

console.log(myCars[0]);
console.log(myCars[1]);
console.log(myCars[4]);
console.log(myCars[6]);
console.log(myCars[7]);

//exm. 24 and 25 :
//Store date using new Date().
//Get year from date.

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());

//exm. 26 :	
// Store string length.

let demostr = "Siddharth";
console.log(demostr.length);

//exm. 27 :	
// Use escape characters in string (\n, \t).
let chr1 = "siddharth\nTayde";
console.log(chr1);
let chr2 = "siddharth\tTayde";
console.log(chr2);
let chr3 = "siddharth\vTayde";
console.log(chr3);

//exm. 28 :	
// Convert number to boolean (Boolean(0)).

let chr4 = 55;
console.log(Boolean(chr4))
let chr5 = 0;
console.log(Boolean(chr5))

//exm. 29 :	
// Use parseInt on "50.5".
let chr6 = 50;
let chr7 = 50.5;
let chr8 = 75.69;
let chr9 = "hii";
console.log(parseInt(chr6));
console.log(parseInt(chr7));
console.log(parseInt(chr8));
console.log(parseInt(chr9));

//exm. 30 :	
// Use parseFloat on "50.5".

console.log(parseFloat(chr6));
console.log(parseFloat(chr7));
console.log(parseFloat(chr8));
console.log(parseFloat(chr9));