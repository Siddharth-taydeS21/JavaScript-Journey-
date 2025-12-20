// Creation of promise --
const promiseOne = new Promise(function (resolve, reject) {
    //do async task, DB Call, network call
    setTimeout(function () {
        // console.log('async task complete');
        // resolve();
    }, 1000)
})

//Consumption of promise --
promiseOne.then(function(){
    // console.log("promise consumed.");
})

new Promise(function (resolve, reject){
    setTimeout(function(){
        // console.log('async task 2 complete');
        resolve()
    },1000)
}).then(function(){
    // console.log('promise 2 comsumed.');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('async task 3');
        resolve({username : 'Chai', email : 'chai@example.com'});
    },2000)
})

promiseThree.then( function(user){
    // console.log(user);
    // console.log(user.username);
    // console.log(user.email);
})

const promiseFour = new Promise(function(resolve,reject){
   setTimeout(function() {
    let eror = false;
    if(!eror){
        resolve({username : "Siddharth", password : "swe"});
    }else{
        reject('ERROR : Somthing went wrong');
    }
   } )
})

promiseFour.then((user) => {
return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('finally done!'))


const promiseFive = new Promise(function(resolve, reject){
setTimeout(function() {
    let eror = true;
    if(!eror){
        resolve({username : "Javascript", password : "123"});
    }else{
        reject('ERROR : JS went wrong');
    }
   } )
})
//promise rsponce handlled using async await, not with then() catch() or fanally()  
async function cunsumePromiseFive (){
    try {
        // if error happens get resolve response
        let response = await promiseFive
        console.log(response);
    } catch (error) {
        // if error not happens get reject response
        console.log(error);
    }
}
cunsumePromiseFive()


// How to handle API resposes(in promise Format) in try catch way or using then() catch() method --

// try catch way --
async function getAllusers() {
  try {
    const response = await fetch('https://exampleurl.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error :', error);
  } 
}
getAllusers();


//using then() & catch() method --
fetch('https://exampleurl.com')
.then( (response) => {
return response.json();
})
.then(data)
.catch( (error)=> console.log(error)
);









/* ++++++++++++++++++++++++ ## ++++++++++++++++++++++++++

setTimeout - do this after sometime
setInterval - do this again n again after sometime
clearTimeout - to cancle setTimeout
clearInterval - to cancle setInterval

Promise(resolve, reject) - if there is not error do resolve() or there is error do reject()

fetch - get API responses.
then(),
catch(),
fanaly() - to modify or manipulate the data recived thorough fetch or Promise (API) 
*/