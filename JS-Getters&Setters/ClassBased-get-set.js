// Class based syntax of getters and setters -

class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    //password modification with getter & setter-
    get password(){
        return `${this._password}@444`
    }
    set password(value) {
        this._password = value
    }

    //username modification with getter and setter-
    get userName() {
        return this._userName.toUpperCase()
    }
    set userName(value) {
        this._userName = value
    }
}

const hitesh = new User('hitesh', '@1234');
console.log(hitesh.password);
const siddharth = new User('sidd', '3456')
console.log(siddharth.userName);

console.log(siddharth.password);
console.log(hitesh.password);