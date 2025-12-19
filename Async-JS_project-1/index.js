let start = document.querySelector("#start");
let Stop = document.querySelector("#stop");
let ChangeColor;

function randomColor() {
    let hex = "#";
    let color = (Math.floor(Math.random() * 1000000));
    let newColor = hex + color;
    return newColor;
};


let startChangingColor = function () {
    ChangeColor = setInterval(changeColor, 1000);
}

start.addEventListener("click", startChangingColor)

let stopChangingColor = function () {
    clearInterval(ChangeColor);
}

Stop.addEventListener("click", stopChangingColor)

function changeColor() {
    document.body.style.backgroundColor = randomColor();
};