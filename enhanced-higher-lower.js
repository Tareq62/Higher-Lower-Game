let num_to_guess, user_input, user_limit;
let valid_input = false;
let guesses_array = [];

while(!valid_input) {
    let user_input = prompt("Please choose a positive max number to set the guessing range.");
    user_limit = Math.round(Number(user_input));
    if(user_limit > 1) {
        valid_input = true;
        num_to_guess = Math.floor(Math.random() * user_limit) + 1;
        prompt_user_max.innerHTML = `Guess a number between 1 and ${user_limit}.`;
        }
}

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if(isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    else if(guess < 1 || guess > user_limit) {
        message.innerHTML = "That number is not in range, try again.";
    }
    else {
        if(guesses_array.includes(guess)) {
            message.innerHTML = "That number has already been guessed.";
        }
        else {
            guesses_array.push(guess);
            if(guess == num_to_guess) {
                message.innerHTML = `You got it! It took you ${guesses_array.length} tries and your guesses were ${guesses_array.join(", ")}.`;
            }
            else if(guess < num_to_guess) {
                message.innerHTML = "No, try a higher number.";
            }
            else if (guess > num_to_guess) {
                message.innerHTML = "No, try a lower number.";
            }
        }
    }
}