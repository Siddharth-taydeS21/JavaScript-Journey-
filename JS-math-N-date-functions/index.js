/*+++++++++++++++++++++ Math functions +++++++++++++++++++++++*/
//1.Math Round() - 
// console.log(Math.round(2.30));
// console.log(Math.round(2.49));
// console.log(Math.round(2.50));
// console.log(Math.round(2.66));
// console.log(Math.round(2.10));

//2.Math floor() -
// console.log(Math.floor(2.99));
// console.log(Math.floor(2.01));
// console.log(Math.floor(3.00));
// console.log(Math.floor(10.89));
// console.log(Math.floor(0.90));

//3.Math Celi() - 
// console.log(Math.ceil(0.10));
// console.log(Math.ceil(1.05));
// console.log(Math.ceil(10.01));
// console.log(Math.ceil(2.90));

//4.Math trunc() - Removes the deciaml part
// console.log(Math.trunc(0.10));
// console.log(Math.trunc(2.50));
// console.log(Math.trunc(3.90));
// console.log(Math.trunc(7.80));
// console.log(Math.trunc(8.90));

//5.Math pow(x, y) - returns x to the power y(x^y)
// console.log(Math.pow(0, 1));
// console.log(Math.pow(1, 1));
// console.log(Math.pow(1, 10));
// console.log(Math.pow(3, 3));
// console.log(Math.pow(-3, 3));
// console.log(Math.pow(2, 4));

//6.Math sqrt() - returns square root
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(3));
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(5));

//7.Math cbrt() - retuns cube root
// console.log(Math.cbrt(1));
// console.log(Math.cbrt(2));
// console.log(Math.cbrt(3));
// console.log(Math.cbrt(4));
// console.log(Math.cbrt(5));

//8.Math abs() - retuns absolute value
// console.log(Math.abs(1));
// console.log(Math.abs(22.45));
// console.log(Math.abs(-22.45));
// console.log(Math.abs(null));
// console.log(Math.abs(2*2));
// console.log(Math.abs(2/2));
// console.log(Math.abs(2111+2));
// console.log(Math.abs("hello"));


//9.Math max() - returns largest nmuber from a lsit
// console.log(Math.max(23,56,7,235,86,78,23,244,56));

//10.Math min() - returns smallest nmuber from a lsit
// console.log(Math.min(23,56,7,235,86,78,23,244,56));

//11.Math Random() - returns radom number between 0 & 1
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//12.Math sign() - retuns positiv(1), nigetive(-1) or zero(0) 
// console.log(Math.sign(3));
// console.log(Math.sign(-3));
// console.log(Math.sign("-3"));
// console.log(Math.sign(NaN));
// console.log(Math.sign("hello"));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));
// console.log(Math.sign(-56));
// console.log(Math.sign(23));
// console.log(Math.sign(-54));
// console.log(Math.sign(null));

//13.Math.PI - returns tha value of PI
// console.log(Math.PI);

//14.Math.E - Eulers Number = 2.718......
// console.log(Math.E);

/*+++++++++++++++++++ Date Functions ++++++++++++++++++++*/

// Curretnt Date -
// console.log(new Date);
// console.log(new Date(year, month, Day, hours, minutes, seconds, ms));//Error

//Date from a srting -
// console.log(new Date("2025-07-26"));

//Date Methods - 
let d = new Date;
// console.log(d);

// console.log(d.getFullYear());// Current year
// console.log(d.getMonth());// Current month
// console.log(d.getDay()); //Current day
// console.log(d.getHours());// Current hour
// console.log(d.getMinutes());//Current minut 
// console.log(d.getSeconds());// Current second 
// console.log(d.getMilliseconds()); // Current millisecond
// console.log(d.getTime()); // get timestamp
// console.log(Date.now()); // Current timeStamp in ms

// //Set date methods - 
// console.log(d.setFullYear(2024));
// console.log(d.setMonth(7));
// console.log(d.setDate(15));

// //same with others -
// d.setTime()
// d.setHours()
// d.setMinutes()
// d.setSeconds()
// d.setMilliseconds()