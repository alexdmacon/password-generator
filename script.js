// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// MY CODE BELOW


/* //      Important code for later
var index = Math.floor(Math.random() * options.length);        */

var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@",]

var confirmLettersLowercase;
var confirmLettersUppercase;
var confirmNumbers;
var confirmCharacters;
var confirmInputs = [lettersLowercase.concat(lettersUppercase, numbers, characters)]

var generatePassword = function() {
    var passwordLength = window.prompt("How many characters will be in your password?");

    if(!passwordLength) {
      window.alert("Must enter a number between 8 and 128");
    }

    else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Must enter a number between 8 and 128");
    }
    else {
      confirmLettersLowercase = confirm("Click OK to include lowercase letters.");
      confirmLettersUppercase = confirm("Click OK to include uppercase letters.");
      confirmNumbers = confirm("Click OK to include numbers.");
      confirmCharacters = confirm("Click OK to include special characters.");
    };

    if (confirmLettersLowercase && confirmLettersUppercase && confirmNumbers && confirmCharacters) {
        confirmInputs = [lettersLowercase.concat(lettersUppercase, numbers, characters)];
      } 
    }




/* const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += key_strings.symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

console.log(generatePassword()); */