const minNum =1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;
let guessBtn = document.getElementById("guess-btn");
let hideTxt = document.getElementById("hide-text");

guessBtn.onclick = function () {
    guess = document.getElementById("input-text").value;
    guess = parseInt(guess);

    if (isNaN(guess)) {
        hideTxt.textContent = "Please Enter a Number!";
    } else if (guess < minNum) {
        hideTxt.textContent = "You Cannot Input Negative Number!";
    } else if (guess > maxNum) {
        hideTxt.textContent = "You Cannot Input More Than 100!";
    } else {
        attempts++;
        let attemptHeading = document.getElementById("att-heading").textContent = `Number of Previous Attempts: ${attempts}`;
        let prevHeading = document.getElementById("prev-heading").textContent = `Your Previous Guesses: ${guess}`;

        if (guess < answer) {
            hideTxt.textContent = `Guess Number are Too Low. Please Try Again!`;
        } else if (guess > answer) {
            hideTxt.textContent = `Guess Number are Too High. Please Try Again!`;
        } else {
            hideTxt.textContent = `You Guessed The Correct Number ${answer}!`;
            running = false;
        }
    }
};
