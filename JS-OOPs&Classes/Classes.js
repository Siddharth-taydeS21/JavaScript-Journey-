// class User{
//     constructor(userNmae, email, password){
//         this.userNmae = userNmae
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abcd`
//     }

//     changeUsrename(){
//         return `${this.userNmae.toUpperCase()}`
//     }
// }

// const Usre1 = new User('siddharth', 'sidd@gmail.com', '123');
// console.log(Usre1.encryptPassword());
// console.log(Usre1.toUpperCase());

/* ++++++++++ behind the scene ++++++++++ */
// same code execution with difrenre method -

function CreateUser(userNmae, email, password){
this.userNmae = userNmae;
this.email = email
this.password = password
}

CreateUser.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

CreateUser.prototype.ChangUsername = function(){
    return `${this.userNmae.toUpperCase()}`
}

const user2 = new CreateUser('pandu', 'pandu@123.com', '567')

console.log(user2);
console.log(user2.encryptPassword())
console.log(user2.ChangUsername())