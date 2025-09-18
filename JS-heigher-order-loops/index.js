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
const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => {
    // console.log(fruit.toUpperCase())
})

//5.Count characters in each string
fruits.forEach((fruit, index) => {
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

fruits.forEach((fruit, index) => {
    if (index === fruits.length - 1) {
        sentence += `and ${fruit}.`
    } else {
        sentence += `${fruit}, `
    }
})
console.log("I Like " + sentence);

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
    person.age >= 20 && person.age <= 29 ? console.log(`${person.name} is young.`) : 
    person.age >= 30 && person.age <= 50  ? console.log(`${person.name} is an adult.`) : console.log(`${person.name} is Old now.`);
   })