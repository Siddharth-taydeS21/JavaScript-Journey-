const arr1 = [3, 5, 7, 2, 1, 9, 22, 13,4, 0];
const heros = ["Captain A", "Iron man", "Thor", "Vision", "Black Pnather", "Iron man", "Bucky", "Rody",  "Captain A", "Iron man"];
const villens = ["Knull", "Ultron", "Thanos", "Kang", "Hella", "Scarlet witch", "Void", "Mepisto", "Loki"];
// console.log(heros);
// console.log(arr1);

// // Array Push() -
// heros.push("Ant man")

// villens.push("Ultron");
// villens.push("Thanos");
// villens.push("Hella");
// villens.push("Kang the Conqurer")
// villens.push("Void");

//Array Pop() -
// heros.pop();
// console.log(heros);

//Array Unshift() -
// villens.unshift("Kang the conqurer");
// villens.unshift("Thanos");
// villens.unshift("Scralet Witch");
// villens.unshift("Hella");
// villens.unshift("Ultra Vision")
// console.log(villens);

//Array Shift() - its basically removes first item from an arra...

//Array Slice() - its remake an array from desired stats and end.
// let b = heros.slice(0, 3);
// b = heros.slice(1,4);
// b = heros.slice(4, 6);
// b = heros.slice(4)
// console.log(b);

//Array Splice() - syntax is splice(starst "before" this[index], dlete items [number], now items you wanted to add here)

// heros.splice(4, 0, "Black widow", "Cpatain marvel", "Wonda")
// heros.splice(4, 3, "Black widow", "Cpatain marvel", "Wonda")
// heros.splice(5, 2, "Spider-man", "Falcon")
// heros.splice(2, 2, "Moon night", "Captin Marvel")
// console.log(heros);

// villens.splice(2, 2, "Knull")
// villens.splice(6, 1, "Dormamu")
// console.log(villens);

//Array inculdes() -
// console.log(villens.includes("Loki"));
// console.log(villens.includes("Selistials"));
// console.log(villens.includes("Rangnarock"));
// console.log(villens.includes("Thanos"));
// console.log(heros.includes("Sentry"));

//Array indexOf() -
// console.log(heros.indexOf("Thor"));
// console.log(heros.indexOf("Black Pnather"));
// console.log(villens.indexOf("Hella"));
// console.log(villens.indexOf("Knull"));
// console.log(villens.indexOf("Scarlet witch"));

//Array lastIndexof()- 
// it's start serching tha value from last an returns its index.
// console.log(villens.lastIndexOf("Hella"));
// console.log(villens.lastIndexOf("Scarlet witch"));
// console.log(villens.indexOf("Scarlet witch"));
// console.log(heros.lastIndexOf("Thor"));
// console.log(heros.lastIndexOf("Vision"));


// console.log(heros.lastIndexOf("Captain A"));
// console.log(heros.lastIndexOf("Iron man"));

//Array Sort() - sorting in aplhbetical oredr
// console.log(heros.sort());
// console.log(villens.sort());
// console.log(arr1.sort());

//Array revers() - makes a reverse version of an array
// console.log(heros.reverse());
// console.log(villens.reverse());
// console.log(arr1.reverse());

//Array concat() - merging arrays
let MCEU = heros.concat(villens);
// console.log(MCEU);

//Array slice()-
// console.log(MCEU.slice(10,19));

// console.log(MCEU.indexOf("Rody"));
// console.log(MCEU.indexOf("Void"));

// console.log(MCEU.slice(7, 17));

// console.log(MCEU.indexOf("Thor"));
// console.log(MCEU.indexOf("Kang"));

// console.log(MCEU.slice(2, 14));

//Array flat() -
let myArr = [[1, 2], [3, 4, 5, 6], [7, 8], [9, 10]];
let newArr = myArr.flat();
// console.log(newArr);

let myArr1 = [[17, 22], [35, 49, 53, 67], [70, 80], [99, 11]];
let newArr1 = myArr1.flat()
// console.log(newArr1);

//Array join()
// console.log(heros.join());
// console.log(villens.join());
// console.log(newArr.join());
// console.log(newArr1.join());
// console.log(newArr.join());

//Array toString() -
// console.log(heros.toString());
// console.log(villens.toString());
// console.log(newArr1.toString())
// console.log(newArr.toString());

// Array From() - it converts an iterable object in to an Array 
let myName = "SIDDHARTH";
// console.log(Array.from(myName));

let name1 = "PRASHIK";
// console.log(Array.from(name1));

let name2 = "TEJAS";
// console.log(Array.from(name2));

let name3 = "PIYUSH";
// console.log(Array.from(name3));

let name4 = "NANDINI";
// console.log(Array.from(name4));

//Array.of() - makes array of objects, strings, variables etc.

// console.log(Array.of(myName, name1, name2, name3, name4));

//Rest and Spread Oparatores -