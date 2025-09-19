/*+++++++++++++++ ForEach() loop ++++++++++++++++*/
// print item, index and array using foreach Loop...

const Coding = ["C", "C++", "Java", "Python", "JavaScript", "Rust"]

let forEach = Coding.forEach((langs, index, arr) => {
    // console.log(langs, index , arr);
})

//Ex.2 - 
let lsit = Coding.forEach((langs, index) => {
    // console.log(`${index + 1}. ${langs} ${"\n"}`);
})

// create a array of objects and access keys and values of the item objects..
let movie = [
    {
        movieName: "Avengers End Game",
        franchise: "MCEU"
    },
    {
        movieName: "Justice League",
        franchise: "DCU"
    },
    {
        movieName: "Bumbbule bee",
        franchise: "Transformers"
    },
    {
        movieName: "Panthon Manace",
        franchise: "Star Wars"
    },
    {
        movieName: "Balerina",
        franchise: "John Wick"
    }
]

//ex.1 -
let movies = movie.forEach((movie, index) => {
    // console.log(`${index + 1}. ${movie.movieName}`);
})

//ex.2 - 
let ex2 = movie.forEach((movie, index) => {
    // console.log(`${index+1}. ${movie.movieName} from ${movie.franchise} franchise.`);
})

//10 use cases for practice using .forEach() loop..

//1. Print each element of an array
const nums = [1, 2, 3, 4, 5];
// nums.forEach( num => console.log(num) )

//2. Sum all numbers in an array
let sum = 0;
nums.forEach((num) => {
    sum += num;
});
// console.log(sum);

//3.Square each number and print it

let square = 0;
nums.forEach((num) => {
    // console.log(square = num * num)
})

//4.Convert array of strings to uppercase
const fruitsA = ["apple", "banana", "mango"];
fruitsA.forEach((fruit) => {
    // console.log(fruit.toUpperCase())
})

//5.Count characters in each string
fruitsA.forEach((fruit, index) => {
    // console.log(`characters in string ${index + 1}: ${fruit.length}`)
});

//6.Check if numbers are even or odd
nums.forEach((num) => {
    if (num % 2 === 0) {
        // console.log(`${num} is a Even number`);
    }
    else {
        // console.log(`${num} is a Odd number`);
    }
})

//7.Access index while iterating 
nums.forEach((num, index) => {
    // console.log(`Index ${index}: Number ${num}`)
}
);

//8.Format array into a sentence 
let sentence = "";

fruitsA.forEach((fruit, index) => {
    if (index === fruitsA.length - 1) {
        sentence += `and ${fruit}.`
    } else {
        sentence += `${fruit}, `
    }
})
// console.log("I Like " + sentence);

//9.Create a new array (using push inside forEach)

let tripled = [];

nums.forEach((num) => {
    tripled.push(num * 3);
});
// console.log(tripled);

//10.Work with array of objects
const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 60 },
    { name: "Charlie", age: 31 }
];

users.forEach((person) => {
    // person.age >= 20 && person.age <= 29 ? console.log(`${person.name} is young.`) : 
    // person.age >= 30 && person.age <= 50  ? console.log(`${person.name} is an adult.`) : console.log(`${person.name} is Old now.`);
   })

   /*+++++++++++++++++++++++++++ filter() method ++++++++++++++++++++++++++++++ */
//filter method is used creating or mnipulating an arrya based on a certain conditions. you can do the same with foreach loop, but .filter() method is shorter way to do it..

//10 examples to practice...

//1.Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evensNums = numbers.filter( (num) => (num % 2 === 0))
// console.log(evensNums);

//2.Filter odd numbers
const numbersA = [10, 15, 20, 25, 30];
const oddNums = numbersA.filter( (num) => {return num % 2 !== 0} )
// console.log(oddNums);

//3.Filter numbers greater than 50
const marks = [23, 67, 89, 45, 12, 99];
const greater = marks.filter( (num) => {return num > 50} )
// console.log(greater)

//4.Filter strings with length > 5
const words = ["apple", "banana", "grape", "pineapple", "kiwi"];
const moreLength = words.filter( (item) => {return item.length > 5} )
// console.log(moreLength);

//5.Filter names starting with 'A'
const names = ["Amit", "Siddharth", "Anjali", "Rahul", "Arjun"];
const includesA = names.filter( (items) => {return items.startsWith("A")} )
// console.log(includesA);

//6.Filter numbers that are prime
const numbersB = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = numbersB.filter( (n) => {
    if (n <= 1) {
        return false;
    }
    else{
        for (let i = 2; i < n; i++) {
         if (n % i === 0)
            return false;
        }
        return n > 1;
    }
} )
// console.log(primes);

//7.Filter objects based on property
const students = [
  { name: "Ravi", score: 85 },
  { name: "Priya", score: 45 },
  { name: "Aman", score: 72 },
  { name: "Neha", score: 30 }
];

const pass = students.filter((studs) => (
studs.score >= 50
))
// console.log(pass);

//8.Filter negative numbers
const values = [10, -4, 32, -9, 0, 27];
const nigetives = values.filter( (val) => {
return val < 0
} )
// console.log(nigetives);

//9.Filter words containing a specific letter

const fruitsB = ["apple", "orange", "mango", "kiwi", "grapes"];
const includesO = fruitsB.filter( (fruit) => (fruit.includes("o")));
console.log(includesO);

//10.Filter unique values from an array
const items = [1, 2, 2, 3, 4, 4, 5];
const uniqueVals = items.filter( (item, index, arr) => (
arr.indexOf(item) === index
))
console.log(uniqueVals);
