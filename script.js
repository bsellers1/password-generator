// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // alert("working");
  var password = genPassword();
  var passwordText = document.querySelector("#password");
}

function genPassword() {
  newPassword = [];
  passChoices = [];
  return passLength();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// picks a random one in the array
function fetchRandomCharacter() {
  var random = Math.floor(Math.random() * Array.length)
  return Array[randomIndex];
}
// all the variabls for the password
var newPassword = [];

var passChoices = [];

var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var passNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var passSpec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ];

function passLength() {
  var pLength = prompt("What number between 8 and 128 would you like?")

  if (pLength < 8 || pLength > 128) {
    alert("Pick a number between 8 and 128 please.");
    passLength();
  }

 passCharacters();
  while (newPassword.length < passwordLength) {
    var passCharacters = fetchRandomCharacter(passChoices);
    newPassword.push(passCharacters)
  }

  return newPassword.join("");
}

function passCharacters() { // creates the prompts and arrays for the password
  if (confirm("Numbers?") ) {
    newPassword.push(fetchRandomCharacter(passNumbers))
    passChoices.push(fetchRandomCharacter(passNumbers))
  }
  if (confirm("Special Characters?") ) {
    newPassword.push(fetchRandomCharacter(passSpec))
    passChoices.push(fetchRandomCharacter(passSpec))
  }
  if (confirm("Upper case letters?") ) {
    newPassword.push(fetchRandomCharacter(upperLetters))
    passChoices.push(fetchRandomCharacter(upperLetters))
  }
  if (confirm("Lower case letters?") ) {
    newPassword.push(fetchRandomCharacter(lowerLetters))
    passChoices.push(fetchRandomCharacter(lowerLetters))
  }
}

