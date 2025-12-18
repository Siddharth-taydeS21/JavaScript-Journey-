const randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#submit");
let userInput = document.querySelector(".guessfield")
let guessSlots = document.querySelector("#guesses");
let remaning = document.querySelector("#lastResult");
let lowOrhigh = document.querySelector(".lowOrhigh");
let startOver = document.querySelector(".resultparas");


const p = document.createElement("p");

let pervGuess = [];
let remaningGusee = 1;

let playGame = true;


if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
};

function validateGuess(guess) {
    // logic validation code for user input
    if (isNaN(guess)) {
        lowOrhigh.textContent = "Please enter a valid Number";
        lowOrhigh.style.color = "#a40505";
    } else if (guess < 1) {
        lowOrhigh.textContent = "Please enter a Number greater than 1";
        lowOrhigh.style.color = "#a40505";
    } else if (guess > 100) {
        lowOrhigh.textContent = "Please enter a Number lesser than 100";
        lowOrhigh.style.color = "#a40505";
    } else if (guess === " " || guess === String) {
        lowOrhigh.textContent = "Please enter a valid Number";
        lowOrhigh.style.color = "#a40505";
    } else {
        lowOrhigh.style.color = "white";
        pervGuess.push(guess);
        if (remaningGusee >= 10) {
            displayGuess(guess);
            displayMassage(`Game Over. Random number was ${randomNumber}`);
            lowOrhigh.style.color = "#9b1111ff";
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
};

function checkGuess(guess) {
    // logic for printing a massage of low guess or high guess and for equal guess (means user wins)
    if (guess === randomNumber) {
        displayMassage("You guessed it right, <br> you won!");
        lowOrhigh.style.color = "green";
        endGame()
    } else if (guess < randomNumber) {
        displayMassage("Guess is lower than random Number,<br> try again!");
    } else if (guess > randomNumber) {
        displayMassage("Guess is greater than random Number,<br> try again!");
    }
};

function displayGuess(guess) {
    guessSlots.textContent += `${guess}, `;
    userInput.value = '';
    remaningGusee++;
    remaning.textContent = `${11 - remaningGusee}`;
};

function displayMassage(massage) {
    lowOrhigh.innerHTML = `<h4>${massage}</h4>`
};

function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = "<h3>Start a new Game</h3>";
    startOver.appendChild("p");
    playGame = false;
    newGame();
};

function newGame() {
const startGame = document.querySelector("#startGame");
startGame.addEventListener('click', function() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    pervGuess = "";
    remaningGusee = 1;
    guessSlots = '';
    remaning.textContent = `${11 - remaningGusee}`;
    userInput.removeAttribute('disabled');
    startOver.replaceChild("p");
 
    playGame = true;
});
};