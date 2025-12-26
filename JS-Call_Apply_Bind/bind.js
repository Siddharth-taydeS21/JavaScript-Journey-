const User1 = {
name: 'sidd',
city: 'mumbai'
}

const User2 = {
name: 'shivani',
city: 'pune'
}

const place = function(){
    return console.log(`Nmae: ${this.name}, from ${this.city}`);
}

let siddKiCity = place.bind(User1)
let shivaniKiCity = place.bind(User2)
//Bind method dose not run at all, thats the key role of Bind method -
//It not runs immidiatly like the call and apply.
//it allows us to 'bind me' or 'store me' in a variable, and invoke latter. 

siddKiCity();
shivaniKiCity()