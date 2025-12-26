userDetails1 = {
    name: 'hitesh choudhary',
    age: 46,
    desiganation: 'Teacher & content creator',
}

userDetails2 = {
    name: 'Ajay suneja',
    age: 32,
    desiganation: 'SWE & content creator',
}

userDetails3 = {
    name: 'siddharth tayde',
    age: 22,
    desiganation: 'software engineer'
    // printNmae : function(){
    // console.log(this.name)
    // }

    //we can make this function Dynamic by making itindipendet ->
}
// userDetails1.printNmae.call(userDetails2)
// userDetails1.printNmae.call(userDetails3)

let printNmae = function () {
    console.log(this.name)
}
//now we can call it like this ->
// printNmae.call(userDetails1)
// printNmae.call(userDetails2)

let CallLeter = printNmae.bind(userDetails3);
CallLeter()
