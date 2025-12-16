let buttons = document.querySelectorAll(".button");
let body = document.body;
let main = document.querySelector(".main");

buttons.forEach( (btn) => 
btn.addEventListener( "click", function(e) {
    // console.log(e.target);
    // console.log(e);
    body.style.backgroundColor = e.target.attributes.id.value
})
)