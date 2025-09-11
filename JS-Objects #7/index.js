//How to create and objects -

//object literal Syntax - examples..
//1) -
const blackPanther = {
 hero : "black panther",
 villen : "Kill monger",
 place : "wakanda",
 franchise : "MCEU"
}
// console.log(blackPanther);

//2)- 
const docterStrange = {
    hero : "Doctre strange",
    villen : "Dormamu",
    place : "kamartaj",
    franchise : "MCEU"
}
// console.log(docterStrange);


//3) - 
const noWayHome = {
    hero : "Spider man",
    villen : "Mistireo",
    place : "New york",
    franchise : "MCEU"
}
// console.log(noWayHome);


//Object using constuctor method - exmpls..
const AgeOfUltron = new Object();
 AgeOfUltron.hero = "Avengers";
 AgeOfUltron.villen = "Ultron";
 AgeOfUltron.place = "New york";
 AgeOfUltron.franchise = "MCEU";
// console.log(AgeOfUltron);

const manOfSteel = new Object();
    manOfSteel.hero = "Super man";
    manOfSteel.villen = "Genral zord";
    manOfSteel.place = "IDK well";
    manOfSteel.franchise = "DC";
// console.log(manOfSteel);

const johnWick1 = new Object();
johnWick1.hero = "John wick";
johnWick1.villen = "Gangster Tarasov & son";
johnWick1.place = "London";
johnWick1.franchise = "John wick world";
// console.log(johnWick1);

const Transformers1 = new Object();
Transformers1.hero = "Optimus Prime";
Transformers1.villen = "Megatron";
Transformers1.place = "San francisco";
Transformers1.franchise = "Transformers";
// console.log(Transformers1);

//how to access properties in objects? - exmpls..
//1. -
// console.log(blackPanther.place);
// console.log(docterStrange.franchise);
// console.log(manOfSteel.hero);
// console.log(Transformers1.villen);

//2. - 
// console.log(johnWick1["villen"]);
// console.log(manOfSteel["villen"]);
// console.log(noWayHome["hero"]);
// console.log(blackPanther["villen"]);
// console.log(Transformers1["hero"]);

//How to add Values from outside the object ? -
blackPanther["heroin"] = "Nakiya";
// console.log(blackPanther);

docterStrange["heroin"] = "Cristin Palmer";
// console.log(docterStrange);

noWayHome["heroin"] = "Meri Jane";
// console.log(noWayHome);

manOfSteel["heroin"] = "Lois lane";
// console.log(manOfSteel);


//Object.freeze() we can't add, remove or reassign propries from an object after using this method on an object -

// Object.freeze(Transformers1)
// Transformers1.hero = "Bumble bee";
// console.log(Transformers1.hero);


// Object.freeze(johnWick1);
// johnWick1.villen = "Jonh wick himself😅";
// johnWick1.hero = "IDK";
// console.log(johnWick1.villen);
// console.log(johnWick1.hero);

// Object.freeze(noWayHome);
// noWayHome.hero = "Peter parker";
// noWayHome["heroin"] = "Mery Jane";
// console.log(noWayHome.heroin)
// console.log(noWayHome.hero);
// console.log(noWayHome);

//How to Assign Symbol In an object ? exmpls -
const passwordkey = Symbol("password");
const passwordvalue = Symbol("nova999"); 

const user = {
    userName : "Sid",
    userId : "123456",
    [passwordkey] : "nova999"
};

console.log(user);
console.log(typeof passwordkey);
console.log(typeof user[passwordkey]);
//output - 
/* { userName: 'Sid', userId: '123456', [Symbol(password)]: 'nova999' }
string */