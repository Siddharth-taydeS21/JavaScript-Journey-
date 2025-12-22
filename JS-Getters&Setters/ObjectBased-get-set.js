// Object based syntax of getters and setters -

const user = {
    _email : "h@h.com",
    _password : "1234",

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val
    }
    ,
    get password(){
        return this._password
    },
    set password(val){
        this._password = val
    }
}

//creating a new object- 
const newUser  = Object.create(user);

console.log(newUser.email);
console.log(newUser.password);