// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// MY CODE BELOW


/* //      Important code for later
var index = Math.floor(Math.random() * options.length);        */


var  lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@",];


var generatePassword = function() {
  var passwordOptions = "";


  var passwordLength = window.prompt("Pick a number between 8 and 128 to determine your password length.");
  
  if(!passwordLength) {
    window.alert("Must enter a number between 8 and 128");
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Must enter a number between 8 and 128");
  }
  else {
    confirmLettersLowercase = confirm("Click OK to include lowercase letters.");
      if(confirmLettersLowercase){
        passwordOptions += lettersLowercase;
      }
    confirmLettersUppercase = confirm("Click OK to include uppercase letters.");
      if(confirmLettersUppercase){
        passwordOptions += lettersUppercase;
      }
    confirmNumbers = confirm("Click OK to include numbers.");
      if(confirmNumbers) {
        passwordOptions += numbers;
      }
    confirmSymbols = confirm("Click OK to include special characters.");
      if (confirmSymbols) {
        passwordOptions += symbols
      };
    var password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
  }
  return password;}
}

generatePassword; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
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