//How to create and objects -

//object literal Syntax - examples..
//1) -
const blackPanther = {
    hero: "black panther",
    villen: "Kill monger",
    place: "wakanda",
    franchise: "MCEU"
}
// console.log(blackPanther);

//2)- 
const docterStrange = {
    hero: "Doctre strange",
    villen: "Dormamu",
    place: "kamartaj",
    franchise: "MCEU"
}
// console.log(docterStrange);


//3) - 
const noWayHome = {
    hero: "Spider man",
    villen: "Mistireo",
    place: "New york",
    franchise: "MCEU"
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
//1.
const passkey = Symbol("foo");

const user = {
    userNmae: "siddharth",
    userId: "123456",
    [passkey]: "@#$"
}

// console.log(user[passkey]);
// console.log(typeof passkey);

//2. 
const mathIcon = Symbol("bla..bla");
const math = {
    mathName: "addition",
    [mathIcon]: "+"
}

// console.log(typeof mathIcon);

//3.
const friutCode = Symbol("bla.bla");

const fruit = {
    fruitNmae: "apple",
    color: "red",
    [friutCode]: "0123"
}

// console.log(typeof friutCode);

//4. 
const gunCode = Symbol("ect.etc");

const gun = {
    gunName: "AKM",
    gunColor: "brown",
    [gunCode]: "47"
}

// console.log(typeof gunCode);
// console.log(typeof gun[gunCode]);

//how to merge or combine 2 objects?- Object.assigned() - exmpls -
//merge Objects - 
//1.
const person1 = {
    firstName : "Jhon",
    lastName : "doe",
    age : "50",
    eyeColor : "blue"
};

const person2 = {
    firstName : "tony",
    lastName :"Stark"
};

const assigned = Object.assign(person1, person2);
// console.log(assigned);

//2. 
const car1 = {
    carName : "camaro",
    carCompay : "Cehvrolate",
}

const car2 = {
    carName : "porsche 911",
    carCompay : "Porsche",
    cerPrice : "1.50 Cr",
    availability : "Yes"
}

const newCar = Object.assign(car1, car2);
// console.log(newCar);

// clonign an object using Object.assign() -
//1.
const obj1 = {
    a : "1",
    b : "2",
    c : {d : "3"}
}

// const obj2 = Object.assign({}, obj1)

// console.log(obj2);

//2. 
const address = {
    city : "munbai",
    state : "maharshtra",
    homeTown : "Ghatkopar-east",
    pinCode : "444000"
}

// const newAddress = Object.assign({}, address)
// console.log(newAddress);

//3. - Deep Clone -
//1)
const obj2 = structuredClone(obj1);
// console.log(obj2);

//2)
const newAddress = structuredClone(address);
// console.log(newAddress);

//3)
const myCar = structuredClone(newCar)
// console.log(myCar);

//merging objects with same proprties - 
const o1 = { a : 1, b : 1, c : 1,};
const o2 = {a : 1 ,b : 2};
const o3 = {c : 3};

const O4 = Object.assign({}, o1, o2, o3);
// console.log(O4);

// object merge with sybol type property - 
const b = Symbol("foo")

const a1 = { a : "roll no.21"};
const a2 = { [b] : 33}

const a3 = Object.assign({}, a1, a2)
// console.log(a3);


//Array of Objects - 
let cars = [
    {
        carName : "Porche 911",
        carType : "Sprorts-car",
        color : "silver",
        capacity : "2-seats"
    },
    {
        carName : "wrangler",
        carType : "opened-suv",
        color : "militery-gray",
        capacity : "10-seats"
    },
    {
        carName : "BMW-Z4",
        carType : "Convertible",
        color : "maroom",
        capacity : "2-seats"
    }
]

//accessing single objects in an array - 
let firstCar = cars[0];
// console.log(firstCar);

let secondCar = cars[1];
// console.log(secondCar);

let thirdCar = cars[2];
// console.log(thirdCar);

//print object keys and values in given array - 
//Object.keys(), printing keys - 
let firstCarKeys = Object.keys(cars[0]);
// console.log(firstCarKeys);

let secondCarKeys = Object.keys(cars[1]);
// console.log(secondCarKeys);

// Object.values(), printign values - 
let firstCarValues = Object.values(cars[0]);
// console.log(firstCarValues);

let secondCarValues = Object.values(cars[1]);
// console.log(secondCarValues);

let thirdCarValues = Object.values(cars[2]);
// console.log(thirdCarValues);

//hasOwnProperty() method - it cheks the object has the certain proprety.
//1.
const ob1 = new Object();
ob1.prop = null;
ob1.prop3 = "exsists";

// console.log(ob1.hasOwnProperty("prop"));
// console.log(ob1.hasOwnProperty("prop2"));


//Object Destructuring - exmpls -
//1.
const user1 = {
    user1Name : "sid",
    age : "20",
    country : "india"
}

const {user1Name, age, country} = user1;
// console.log(user1);

//2.
const user2 = {
    user2Name : "prshik",
    age : "20",
    country : "india",
}

const {user2Name, country : region, state = "maharshtra"} = user2;
console.log(state);

//3.
const laptop = {
  brand: "Dell",
  model: "XPS 15",
  price: 1200
};

// 👉 Task: Destructure brand and price into separate variables
//ans : 
const {brand, price} = laptop;

//4.
const movie = {
  name: "Inception",
  director: "Christopher Nolan"
};

// 👉 Task: Destructure name as title, director as maker, 
// and set default year = 2010
const {name : title1, director : maker, year = 2010} = movie;

//5.
const employee = {
  empId: "E102",
  details: {
    firstName: "Anita",
    lastName: "Verma",
    department: {
      name: "Engineering",
      code: "ENG01"
    }
  }
};

// 👉 Task: Destructure firstName and department code
const {details : {firstName , department : {code} } } = employee;

//6.
const course = {
  id: "JS101",
  info: {
    title: "JavaScript Basics",
    instructor: {
      name: "Rahul",
      experience: 5
    }
  }
};

// 👉 Task: Destructure title and instructor's experience
const {info : { title , instructor : {experience}}} = course;

//7.
const team = {
  teamName: "Developers",
  members: [
    { name: "Sid", role: "Frontend" },
    { name: "Anita", role: "Backend" }
  ]
};

// 👉 Task: Destructure Sid's role and Anita's name
const {members : {role}, members : {name}} = team;