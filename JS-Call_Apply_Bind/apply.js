const User1 = {
    firstName : 'jane',
    lastNmae : 'doe'
}

const User2 = {
    firsName: 'john',
    lastNmae: 'wick'
}

 const fullNmae = function(countyr, city){
        return console.log(`${this.firstName} ${this.lastNmae}, from ${countyr} ${city}`)
    }

fullNmae.apply(User1, ["UK", "London"])
fullNmae.apply(User2, ["UK", "London"])

// Major diffrence between Call() and Apply() method ->
// Major diffrence between call and apply method is how they handle arguments. 
// the Call Method recive multipal arguments with comma sepreted values.
// the apply method can recive multipal arguments as an array list.