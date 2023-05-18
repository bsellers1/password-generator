// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // alert("working");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// set function and variables

function generatePassword(){
  return; hello
  var upperCase = ["A", "B", "C", "D", "E", "F", "G"]
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g"]
  var isNumber = ["1", "2", "3", "4", "5", "6", "7"]
  var userPickedCharacterSet = []
}

// set password length

var passLength = parseInt(window.prompt("Please enter a number between 8 and 128 characters") )
console.log(typeof passLength);

