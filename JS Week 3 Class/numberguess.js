let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess a number between 1 and 10");

guess = parseInt(guess);

if (guess === randomNumber) {
    alert("You guessed it!");
} else {
    alert(`Wrong guess. Try again.
        The number was ${randomNumber}`);
}

console.log("yay");