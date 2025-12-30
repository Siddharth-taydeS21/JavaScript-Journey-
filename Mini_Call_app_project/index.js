let addNoteBtn = document.querySelector("#add-note")
let closeNoteBtn = document.querySelector(".closeForm")
let formContainer = document.querySelector(".form-container")
let form = document.querySelector('form')
let textInputs = form.querySelectorAll('input[type="text"]');
let submitbtn = document.querySelector("#submit-btn");
let stack = document.querySelector(".stack")
let upBtn = document.querySelector("#upBtn")
let downBtn = document.querySelector("#downBtn")

const imageInput = textInputs[0];
const nameInput = textInputs[1];
const townInput = textInputs[2];
const purposeInput = textInputs[3];

const radioInputs = form.querySelectorAll('input[type="radio"]');

addNoteBtn.addEventListener("click", () => {
    formContainer.style.display = "initial"
})

closeNoteBtn.addEventListener('click', () => {
    formContainer.style.display = "none"
})


//form Validation logic --
function fromValidation() {
    let obj = new Object();
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let selected;
        radioInputs.forEach((cat) => {
            if (cat.checked) {
                selected = cat.value;
            }
        })

        if (imageInput.value.trim() === '') {
            alert('please enter a valid link')
        }
        if (nameInput.value.trim() === '') {
            alert('please enter a valid name')
        }
        if (townInput.value.trim() === '') {
            alert('please enter a valid hometown')
        }
        if (purposeInput.value.trim() === '') {
            alert('please enter a valid Reason')
        }
        else {
            obj.userName = nameInput.value;
            obj.img = imageInput.value;
            obj.homeTown = townInput.value;
            obj.purpose = purposeInput.value;
            obj.catagory = selected;
        }

        saveToLocalStorage(obj);
        form.reset()
    })
}
fromValidation();

// Data saving in local storage logic
function saveToLocalStorage(obj) {

    if (localStorage.length === 0) {
        let newTask = [];
        newTask.push(obj)
        let RenewTask = JSON.stringify(newTask)
        localStorage.setItem('tasks', RenewTask)
    }
    else {
        let oldTask = localStorage.getItem('tasks');
        let newArr = JSON.parse(oldTask);
        newArr.push(obj);
        let strOfnewArr = JSON.stringify(newArr);
        localStorage.setItem('tasks', strOfnewArr)
    };
    createCards()
}

//Making cards from local Storage
function createCards() {
    let allTasks = localStorage.getItem('tasks');
    let tasksArr = JSON.parse(allTasks)

    tasksArr.forEach((user) => {
        let card = document.createElement('div');
        card.classList.add('card');

        let avatar = document.createElement('img');
        avatar.src = user.img;
        avatar.classList.add('avatar');

        let heading = document.createElement('h2');
        heading.textContent = user.userName;

        let homeTown = document.createElement("div");
        homeTown.classList.add("homeTown");
        homeTown.innerHTML = `<p>Home Town </p><p>${user.homeTown}</p>`

        let purpose = document.createElement("div");
        purpose.classList.add("purpose");
        purpose.innerHTML = `<p>Purpose </p><p>${user.purpose}</p>`

        let butn1 = document.createElement("button");
        butn1.textContent = "call";
        butn1.classList.add("call");

        let butn2 = document.createElement("button");
        butn2.textContent = "massage";
        butn2.classList.add("msg");

        card.appendChild(avatar);
        card.appendChild(heading);
        card.appendChild(homeTown);
        card.appendChild(purpose);
        card.appendChild(butn1)
        card.appendChild(butn2)

        stack.appendChild(card)
        formContainer.style.display = "none"
    })

}
createCards();

//Update Styles Code -
function updateStyle() {
    let cards = document.querySelectorAll(".stack .card");

    for (let i = 0; i < 3; i++) {
        cards[i].style.zi = 3 - i;
        cards[i].style.trannform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
        cards[i].style.opacity = `${1 - i * 0.02}`
    }
}

// up an down button button logic
upBtn.addEventListener('click', (e) => {
    let lastChild = stack.lastElementChild;
    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild)
    }
    //update styles
    updateStyle();
})
downBtn.addEventListener('click', (e) => {
    let firstChild = stack.firstElementChild;
    if (firstChild) {
        stack.append(firstChild)
    }
    //update styles
    updateStyle();
})

//++++++++++++++++++++++++++++ PROJECT COMPLEATED ++++++++++++++++++++++++++++++++++//