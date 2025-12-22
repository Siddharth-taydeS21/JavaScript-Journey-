// // Function based syntax of getters and setters -

function Usre(userName, password) {
    this._userName = userName;
    this._password = password;

    Object.defineProperty(this, 'userName', {
        get: function (){
            return `${this._userName.toUpperCase()}`
        },
        set: function (value){
            this._userName = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function (){
            return `The password is : "${this._password}".`
        },
        set: function (value){
            this._password = value
        }
    })
}``
const user1 = new Usre('siddharth', '1234');
console.log(user1.password);
