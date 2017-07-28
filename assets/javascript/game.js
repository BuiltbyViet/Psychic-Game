
//letter choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = [];

//start game
reset();
//update guesses left
function updateGuessesLeft() {
document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

//computer generated letter to guess
function updateLetterToGuess() {
  letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

//update guesses so far
function updateGuessesSoFar () {
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};
// Function will be called when we reset everything
function reset() {
  
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateGuessesLeft();


//user guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//push letter to guesses so far
  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                //update wins
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You really are psychic!!!....or you're just lucky....");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            // update loss
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("I knew you didn't have ESP....you fake");
            // Then we'll call the reset. 
            reset();
        }
};

