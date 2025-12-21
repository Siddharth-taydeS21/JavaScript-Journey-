//Object Literal -

const user = {
    username : "siddharth",
    loggedin: true,
    loginCount: 8,
    getuserNmae : function() {
        console.log(this.username);
    } 
}
//  console.log(user.getuserNmae());
 

//Constuctor function -

 function hi(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount  = loginCount,
    this.isLoggedIn = isLoggedIn
    return this;
}

const userOne = hi("sid", 4, true);
// console.log(userOne);

//this will overRide the orignal values and can Complicate things 
const userTow = hi("jay", 6, false)
// console.log(userTow);

// to avoid this use 'new' keword a Constructor method or object to create a new and fresh instance -

const userThree = new hi("Nita", 11, true);
console.log(userThree);

const userFour = new hi("Anant", 8, false);
console.log(userFour);

//new Constructor method-
//step 1- it creates an empty object or instance,

//step 2- it calls the 'new' constructor function and grab the arguments which we or the users passes,

//step 3- it injects all the arguments in 'this' or curretnt context,

//step 4- we can access our data(arguments or parameters) in the newly created function or object.
