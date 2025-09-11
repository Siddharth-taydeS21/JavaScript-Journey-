// Post/Pre Increments Examples..
//1. 
let a = 5;
console.log(a++);  //prints a first - 5 then it becoms 6.
console.log(a); // now number is 6.

//2. 
let b = 7;
console.log(++b); //at first it will perform increment. then it prints 8.
console.log(b); //8.

//3. 
let x = 10;
let y = x++; // at first x is asigned to y which means y = 10. after that x becoms 11 because of increment.
console.log(x, y); // prints (11, 10)

//4. 
let p = 15;
let q = ++p; //at first it will perform increment, p-> p = 16. then it prints 16.
console.log(p, q); //prints 16, 16

//5.
let n = 20;
console.log(n++ + ++n);  
console.log(n); // (20 + 22 = 42) output = 20 42. 

//6.
let c = 3;
let d = c++ + c++ + ++c; 
//first step - c = 3 increment going to happen when we use it again.
//second step - c = 4 increment going to happen when we use it again..
//third step - first c has incremented value of 5 then becuse of ++c - increment first, 5 becoms 6, ind uses 6. 
console.log(c, d); // c = 6, d = 13 -> 6, 13.

//7.
let num = 8;
console.log(++num + num++ + num);
// first step - increment first : num = 9, then uses 9.
// second step - uses 9 first and increment will happen in next step.
// third step - num = 10 - because of increment sign(++) in peivious step.

console.log(num);// prints 28.

//8.
let k = 4;
let result = k++ + ++k + k++ + ++k;
// first step - uses k = 4, increment will happen in next step. final value = 4. 
// second step - incremented value of k is now 5 in these step increment first will make it 6. final value = 6.
// third step - uses k = 6, increment will happen in next step. final value = 6.
// fourt step - incremented value of k is now 7. in these step increment first will make it 8. final value = 8.
console.log(result, k);// prints 24, 8.

//9.
let i = 2;
let j = i++ + i++ + ++i + ++i;
// first step - uses 2, increment will happen in next step. final value = 2.
// second step - incremented value of i is now 3. increment will happen in next step. final value = 3. 
// third step - incremented value of i is now 4. in these step increment first will make it 5. final value = 5. 
// fourth step - value of i is now 5. in these step increment first will make it 6. final value = 6. 
console.log(i, j); // prints 6, 16

//10.
let m = 5;
let value = ++m + m++ + ++m + m++ + m;
// first step - in these step increment first will make m = 6. final value = 6. 
// second step - uses 6, increment will happen in next step. final value = 6.
// third step - in these step increment first will make m = 7. final value = 8.
// fourth step - it uses 7, increment will happen in next step. final value = 8.
// fourth step - here is the final and incremented value of m is = 9.
console.log(m, value); // prints 9, 37.

//Post/Pre Decrements Examples..

// 1.
let a1 = 5;
console.log(a1--); // 5
console.log(a1); // 4

// 2.
let b1 = 10;
console.log(--b1);// 9
console.log(b1); // 9

// 3.
let x1 = 8; 
let y1 = x1-- + --x1;
// let y1 = 8 + 6;
console.log(x1, y1); // 6 14

// // 4.
let p1 = 12;
let q1 = --p1 + p1-- + --p1;
// let q1 = 11 + 11 + 9;
console.log(p1, q1); // 9 31

// 5.
let m1 = 7; 
let value1 = m1-- + --m1 + m1-- + --m1 + m1;
// let value1 = 7 + 5 + 5 + 3 + 3;
console.log(m1, value1); // 3 23

// Increments and Decrements mixed problem -

let z = 5;
let result1 = z++ + --z + ++z + z-- + z;
// result1 = 5 + 5 + 6 + 6 + 5 = 
console.log(z, result1); // 5 27