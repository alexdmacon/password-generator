/* //      Important code for later
var index = Math.floor(Math.random() * options.length);        */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// MY CODE BELOW

// Defining individual variables from which random password will ultimately generate
var  lettersLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var lettersUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var  numbers = ["123456789"];
var  symbols = ["!#$%&*+./=>?@"];

// Everything below is inside the function that will generate the password itself
var generatePassword = function() {
  var passwordOptions = "";
// Asks user via alert to give input
  var passwordLength = window.prompt("Pick a number between 8 and 128 to determine your password length.");
// Alert if user doesn't follow the directions  
  if(!passwordLength) {
    window.alert("Must enter a number between 8 and 128");
  }
// Alert if user doesn't follow the directions  
  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Must enter a number between 8 and 128");
  }
// If user validates prompt, concats var lowercase letters inside passwordOptions object
  else {
    confirmLettersLowercase = confirm("Click OK to include lowercase letters.");
      if(confirmLettersLowercase){
        passwordOptions += lettersLowercase;
      }
// If user validates prompt, concats var uppercase letters inside passwordOptions object
    confirmLettersUppercase = confirm("Click OK to include uppercase letters.");
      if(confirmLettersUppercase){
        passwordOptions += lettersUppercase;
      }
// If user validates prompt, concats var numbers inside passwordOptions object
    confirmNumbers = confirm("Click OK to include numbers.");
      if(confirmNumbers) {
        passwordOptions += numbers;
      }
// If user validates prompt, concats var symbols inside passwordOptions object
    confirmSymbols = confirm("Click OK to include special characters.");
      if (confirmSymbols) {
        passwordOptions += symbols
      };
    var password = "";
// For loop that does the hard work: pulls random characters from passwordOptions, iterates until user input of passwordLength
  for (let i = 0; i < passwordLength; i++) {
    password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
  }
// Spits out a password
  return password;}
}

generatePassword; 