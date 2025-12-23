function user() {
    let candidate = 'siddharth'
    let city = 'mumbai';

    function inner() {
        console.log(candidate)
        console.log(city);
    }
    return inner
}

console.log(candidate)
console.log(city) // error, can't print the values of private variables of a function 

let myFn = user();
myFn()// now we can print them using the 'Closers'.

/* 
As we all know we cant ascces the private varilables and scope of any function in the goble scope or outside that function. That's a actual behaviour of functions.

but with the help of the Consept of 'Cosures' we can make private variables of a function look as local.
*/