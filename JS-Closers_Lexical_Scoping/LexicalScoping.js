/* 
In this example parrent() is the parrent function of tow child functions named childOne() and childTow().


*****imporatnt notes ----
1. parrent function cannot use the private variables or access the scope of any child function
2. child functions cannot use the private variables or access the scope of any other simbling function
3. Both of child functions can accses the scope of parrent function and his variables That's Called the consept of 'Lexical Scoping'.

*/
function parrent(){
let name = "hellow world !";
let email = "hii@123.com";

    function childOne () {
       console.log(name)

       let user1 = 'siddharth';
       console.log(user1)

       console.log(user2) //Child or Simbling function cannont user another variables !
    }
    childOne()
    
    function childTow ( ) {
        console.log(email);
        
        let user2 = 'pranay';
        console.log(user2)

        console.log(user1)//Child or Simbling function cannont user another variables !
    }
    childTow()
}