Default Parameters :- 
    We need Default Parameters when,
    a function accepts 1 or more parameters, and the user provides a falsy value or doesn't provides any value. 
    
to handle this situation we had the Default Parameters syntax :- (ES6 Update)

//if user doesn't provides any value as 'name' Parameters, the 'Guest' string will become the Default parameter... -->

function greet(name = 'Guest') {
  console.log('Hello, ' + name + '!');
}

how the devs before ES6 update was Using default parameters and how they was handling this? --> 

// Old way to handle that - 
1st way - 
function greet(name) {
    if(name === undefined){
      name = 'Guest'  
    }
  console.log('Hello, ' + name + '!');
} 

2end way -
function greet(name) {
    if(!name){
      name = 'Guest'  
    }
  console.log('Hello, ' + name + '!');
}