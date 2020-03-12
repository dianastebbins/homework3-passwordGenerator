
// Assignment Code
var generateBtn = document.querySelector("#generate");

// lists of character types
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numericChars = "0123456789";
// special characters, \&'" are all backslashed to comply with javascript requirements
var specialChars = "\\\&\'\"`~!@#$%^*()-_=+[{]}|;:,<.>/?";

function generatePassword() {
  // *********** GET USER INPUT ***********
  var lengthValid = false;
  while (!lengthValid) {
    var pwLength = prompt(`How many characters should be in the password?\n(minimum of 8 and maximum of 128 characters allowed)`);
    console.log(`pwLength entered: ${pwLength}`);
    
    // check the length is between 8 and 128
    if(isNaN(pwLength)){
      alert(`${pwLength} is not a number. Try again.`);
    } else {
      pwLength = parseInt(pwLength); // converting string into an Int
      if(pwLength < 8 || pwLength > 128){
        alert(`Password can be a minimum of 8 and maximum of 128 characters.\n${pwLength} is not a valid selection. Try again.`);
      } else {
        lengthValid = true;
      }
    }
  }
  
  var pwLower, pwUpper, pwNumeric, pwSpecial = false;
  while(!pwLower && !pwUpper && !pwNumeric && !pwSpecial){
    //  confirm for lower, upper, numeric and special characters
    var pwLower = confirm(`Should the password include lower case alpha characters?`);
    var pwUpper = confirm(`Should the password include upper case alpha characters?`);
    var pwNumeric = confirm(`Should the password include numeric characters?`);
    var pwSpecial = confirm(`Should the password include special characters?`);
    console.log(`user choices:\n  lower: ${pwLower}\n  upper: ${pwUpper}\n  num: ${pwNumeric}\n  special: ${pwSpecial}`);
    
    // check that at least one is selected
    if(!pwLower && !pwUpper && !pwNumeric && !pwSpecial){
      alert(`Seriously, you have to pick something.\nTry again. Just one character type, any one.`);
    }
  }

  // *********** BUILD A PASSWORD ***********
  // build new array of potential characters based on criteria selected
  var potentialChars = "";
  if(pwLower){
    potentialChars += lowerChars;
  }
  if(pwUpper){
    potentialChars += lowerChars.toUpperCase();
  }
  if(pwNumeric){
    potentialChars += numericChars;
  }
  if(pwSpecial){
    potentialChars += specialChars;
  }
  console.log(`potentialChars: ${potentialChars}`);

  // pull a random a character from new array, a number of times equal to the specified password length,
  // and build password character by character
  var generatedPW = "";
  for (let i = 0; i < pwLength; i++) {
    generatedPW += potentialChars[Math.floor(Math.random() * potentialChars.length)];
  }
  console.log(`pwLength: ${pwLength}\ngeneratedPW length: ${generatedPW.length}\ngeneratedPW: ${generatedPW}`);

  // *********** RETURN NEW PASSWORD ***********
  return generatedPW;
}

// Write password to the #password input
function writePassword() {
  // ASK: this is not working, the last password created continues to be displayed on the screen.
  // var passwordText = document.querySelector("#password");
  // // clear out the password display in case the user presses Generate Password more than once.
  // // they should start with a clean screen each time
  // passwordText.value = "";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // display result
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
