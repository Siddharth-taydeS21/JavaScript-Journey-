class Usre{
    constructor(username){
        return this.username = username;
    }

    logMe(){
        return `USERNAME IS ${this.username}.`
    }
}

class teacher extends Usre{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this. password = password;
    }

    Canaddcourse(course){
        this.course = course;
        console.log(`new ${this.course} course added by ${this.username}`);
    }
}

const Usre1 = new Usre('siddharth');
// console.log(Usre1);

const teacher1 = new teacher('hitesh sir', 'ChaiaurCode', '456')
// console.log(teacher1);

const newCourse = teacher1.Canaddcourse('"chai aur JS"');
// console.log(newCourse);

console.log(teacher1.logMe())
console.log(Usre1.logMe())