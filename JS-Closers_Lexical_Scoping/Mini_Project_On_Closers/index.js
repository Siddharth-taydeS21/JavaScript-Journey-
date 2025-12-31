function adder(num) {
    return function (b) {
        console.log(num + b)
    }
}
let fnc = adder(5);
// its like we hardcoded a parameter in a function which going to call, just like the adder() example. evry arument we pass in fnc() will be added with 5;
// fnc(10)
//thats the basic example of a closure function//

//++++++++++++++++ Advance example +++++++++++++++++
function createToster(PositionX, PositionY, theem, duration) {
    function toster(massage) {
        // console.log(massage)
        let parrent  = document.querySelector(".parrent");
        let div = document.createElement("div");
        div.textContent = `${massage}`;
        div.classList.add("massage");
        PositionX === "right" ? parrent.style.right = `${10}px` : parrent.style.left = `${10}px`;
        PositionY === "top" ? parrent.style.top = `${10}px` : parrent.style.bottom = `${10}px`;
        if(theem === "light"){
            div.style.backgroundColor = "white";
            div.style.color = "black"
        }else{
            div.style.backgroundColor = "grey";
            div.style.color = "white"
        }
        parrent.appendChild(div)

        setTimeout(() => {
            parrent.removeChild(div)
        }, `${duration * 1000}`);
    }
    return toster;
}

let newToster = createToster("right", "bottom", "dark", 4)

newToster("Hellow world !")

setTimeout(()=>{
    newToster("Siddharth")
},2000)

setTimeout(()=>{
    newToster("the massage you want!")
},5000)

//just pass the massage you want as a toster this will print on screen !!