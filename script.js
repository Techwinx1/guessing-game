//creat a secret number
const secretNumber = 5;

//ask user for guess
const guess = prompt("guess a number");

// check guess
if (Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
else if (Number(guess) > secretNumber) {
    alert("Number too high..guess again");
}
else if (Number(guess) < secretNumber) {
    alert("Number too low..guess again");
}
else {
    alert("C'mon ..whatya doing?..try again");
}
