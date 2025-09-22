//get Elemenrt by Id : -
let para = document.getElementById('demo');
para.innerHTML = "Hello DOM!";
para.style.backgroundColor = "red";
para.style.color = "white";
para.style.padding = "10px 5px";
para.style.borderRadius = "2px";
para.style.textAlign = "center";


//get Element by calss Name : - 
let heading = document.getElementsByClassName('heading');
heading[0].style.color = "yellow"
heading[0].style.textAlign = "center"

let listHeading = document.getElementsByClassName('list-hegding');
listHeading[0].style.color = "#3ca1ffff"

//get Element by tag Name : - 
//How to access elements by tah name(h1, ul, table, p, etc.) and how to access child tags(list items, table rows)and ect.
let list = document.getElementsByTagName('ul');
list[0].style.listStyle = "none";

let listItem = document.getElementsByTagName('li');
listItem[0].style.color = "red"
listItem[1].style.color = "orange"
listItem[2].style.color = "yellow"
listItem[3].style.color = "green"
listItem[4].style.color = "blue"
listItem[5].style.color = "white"
listItem[6].style.color = "purple"

let newLsitHeading = document.getElementsByTagName('h2');
newLsitHeading[0].style.color = "gray";
document.get

//document.querySelector : -
//Select elements as a CSS Selector : -
let newPara = document.querySelector('#paraHeading');
newPara.style.color = "#39a5a5ff"

//document.querySelector, selects first element of the selector
let newParas = document.querySelector('.para');
newParas.style.color = "aqua";

//document.querySelectorAll, selects all elements of the selector
let allParas = document.querySelectorAll('.paras');
for (let i = 0; i < allParas.length; i++) {
    allParas[i].style.color = "#aa4141ff";
}