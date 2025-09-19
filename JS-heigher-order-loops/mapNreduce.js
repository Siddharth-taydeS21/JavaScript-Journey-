/*++++++++++++++++++++++++++++++ Map() method +++++++++++++++++++++++++++++*/
//1.Square each number

const numsA = [1, 2, 3, 4];
const square = numsA.map((num) => (num * num));
console.log(square);

//2.Convert temperatures (Celsius → Fahrenheit)

const celsius = [0, 10, 20, 30];
const toFaranhite = celsius.map((C) => ((C * 9 / 5) + 32));
console.log(toFaranhite);

//3.Extract names from objects

const users = [
    { name: "Ravi", age: 20 },
    { name: "Priya", age: 25 },
    { name: "Aman", age: 30 }
];

const name = users.map(item => item.name)
console.log(name);

//4.Get string lengths

const fruits = ["apple", "banana", "kiwi"];
const lenght = fruits.map(f => f.length)
console.log(lenght);

//5.Add tax to prices

const prices = [100, 200, 300];
const WithTax = prices.map(price => price + (price * 0.10))
console.log(WithTax);


/* +++++++++++++++++++++++ reduce() method +++++++++++++++++++++++ */
//1.Sum of numbers

const numsB = [1, 2, 3, 4, 5];
const sum = numsB.reduce((acc, num) => (acc + num), 0);
console.log(sum);

//2.Find maximum number

const numsC = [12, 5, 27, 80, 19];
const min = numsC.reduce((acc, n) => (n > acc ? n : acc));
console.log(min);

//3.Count occurrences of items

const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, l) => {
    acc[l] = (acc[l] || 0) + 1;
    return acc;
}, {})
console.log(count);