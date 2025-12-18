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
        alertMsg.textContent = "alert NaN";
    } else if (guess === '') {
        alertMsg.textContent = "alert empty";
    }
    else if (guess < 1) {
        alertMsg.textContent = "alert less";
    } else if (guess > 100) {
        alertMsg.textContent = "alert greater";
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
        alertMsg.textContent = "guess less";
    } else if (guess > randomnumber) {
        alertMsg.textContent = "guess greater";
    } else if (guess === randomnumber) {
        alertMsg.textContent = "guess equal you won!!";
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