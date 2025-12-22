class User {
    constructor(userNmae){
       this.userNmae = userNmae  
    }

    logMe(){
        return `USERNAME IS : ${this.userNmae}`
    }

    static createID(){
        return `123`
    }
}


class teacher extends User{
    constructor(userNmae, email){
        super(userNmae)
        this.email = email
    }
}

const user2 = new teacher('chaiorcode', 'chai@gmail.com');
// console.log(user2.logMe())
const user1 = new User('siddharth')
// console.log(user1.logMe());

//after using static keyword on createID() method -
console.log(user1.createID())
console.log(user2.createID())
//throws an error 