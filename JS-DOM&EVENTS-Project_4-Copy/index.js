let randomnumber = parseInt(Math.random() * 100 + 1);
let userinput = document.querySelector("#userInput");
let submit = document.querySelector("#submit");
let alertMsg = document.querySelector("#alert-msg");
let guessSlot = document.querySelector("#prev-guess");
let remaningGuess = document.querySelector("#remaningGuess");
let startOver = document.querySelector("#startOver");
let gameover = document.querySelector("#gameOver");
let newGame = document.querySelector("#newGame");


let guesss = 10;
submit.addEventListener("click", function (e) {
    let guess = parseInt(userinput.value);
    e.preventDefault();
    validateguess(guess);
    
})

function validateguess(guess) {
    if (isNaN(guess)) {
        alertMsg.textContent = "Please Enetr a Valid Nnumber";
        alertMsg.style.color =  "#ab0b0b";
    } else if (guess === '') {
        alertMsg.textContent = "Please Enetr a Valid Nnumber";
        alertMsg.style.color =  "#ab0b0b";
    }
    else if (guess < 1) {
        alertMsg.textContent = "Please enter a number greater that 1";
        alertMsg.style.color =  "#ab0b0b";
    } else if (guess > 100) {
        alertMsg.textContent = "Please enter a number smaller that 100";
        alertMsg.style.color =  "#ab0b0b";
    } else {
        checkGuess(guess);
        if (guesss === 1) {
            startNewGame();
            displayMassage();
        };
        guessSlot.textContent += `${guess}, `;
        remaningGuess.textContent -= 1;
        guesss--;
        userinput.value = "";
    }
}

function checkGuess(guess) {
    if (guess < randomnumber) {
        alertMsg.textContent = "Guess is small than the Random Number Try Again!";
        alertMsg.style.color =  "black";
    } else if (guess > randomnumber) {
        alertMsg.textContent = "Guess is big than the Random Number Try Again!";
        alertMsg.style.color =  "black";
    } else if (guess === randomnumber) {
        alertMsg.innerHTML = "<p>Guess is Equals to the Random Number <br> Congrats You Won!</p>";
        alertMsg.style.color =  "green";
    }
    guess = "";
}

function displayMassage() {
    gameover.textContent = `Game Over Random number was ${randomnumber} !`;
    userinput.value = "";
    userinput.setAttribute("disabled", '');
    startNewGame();
}

function startNewGame() {
    startOver.textContent = "Start New Game!";
    startOver.classList.add("startOver");

    startOver.addEventListener("click", function (e) {
        newGame.removeChild(startOver);
        newGame.removeChild(gameover);
        randomnumber = parseInt(Math.random() * 100 + 1);
        userinput.removeAttribute("disabled");
        guessSlot.innerHTML = "";
        remaningGuess.innerHTML = 10;
        guesss = 10;
    })
};