// for loop Use : for extacly how many times you ant to run loo
// example : -

let a = 1;

for (let index = 0; index < 5; index++) {
    console.log(a + index)
}

//for in loop Use : for looping keys or elements in an object 
// example : -

const person = {
    name: "sidd",
    age: 22,
    job: "softwere engineer",
    slary: "1cr"
}

for (const key in person) {
    const element = person[key]; 
    console.log(key,":", element)
}

//for off loop Use : for lopping iterables arryes, strings, maps, sets
// example : -

const techsiknow = ["mongo.db","express.js","react.js","node.js"]

for (const element of techsiknow) {
    console.log(element)
}

//while loop Use : reapet the loop till the condition is true

let i = 0;

while(i < 4) {
    console.log(i)
    i++
}

//do while Use : rue 1 time atleast even if the condition is false 

let index = 7;

do {
    console.log(index);
    index++;
}while(index < 0);


//short explination to remember :
// for loop = loop till the condition is true
// for in loop = loop the key-element pairs
// fot of loop = loop for itrrables ex. -strings, numbers
//while loop = loop untill the condition is false

//major diffrence between for and while loop is, - for loop is continued according to condition lenth which we had set. and for the the while loop, - it can continue his loop until the condition is false or till the true