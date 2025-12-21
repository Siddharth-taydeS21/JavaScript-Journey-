function setUsername(username){
    this.username = username;
}

// function createUser (username, email, password){
//     setUsername( username)
//     this.email = email
//     this.password = password
// }
////retruns an error because, - the setUsrename() function runs first and after its execution, the function itselfs and the variables inside it including .this becoms empty(after execution)

function createUser (username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}//to fix it, we used call method to call it actullay, and holded this in arguments, so after execution it can't be empty. 

const userOne = new createUser('siddharth', 'sid@gamail123.com', '1212');
console.log(userOne);
