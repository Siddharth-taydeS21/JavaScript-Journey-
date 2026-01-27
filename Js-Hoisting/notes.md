1) JS Hoisting :-

when you define some data using var(variable) keyword, we can access it before initialization, but it's always contains 'undefined'.

this can happen with var, function, function*, function, async function*.

this concept of accessing the function or a var before initialization, called as Hoisting.

Hoisting can't be achieved with let or Constant variables. it's throws an error 'cannot access example element before initialization' because both of them has some restrictions.  

2) Function Declaration, function Expression & function Definition :-

this is an example of function Declaration :
    function sayMyName(){
        console.log('Siddharth');
    }

this is an example of function Expression :
    const sayMyName = function(){
        console.log('Siddharth');
    }

And the both examples are function Definitions!

3) Anonymous functions :- 
a function with not any name can be called ad anonymous function.
for ex.- 
  1.  function(){
        console.log('Siddharth');
    };
  2. functions in IIFE (callback functions) can be called as anonymous functions - 
    (function(){
        console.log('Siddharth');
    })();