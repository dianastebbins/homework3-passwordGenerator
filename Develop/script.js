
// helper function
function printStringAsArray(aString){
  console.log(`string length: ${aString.length}`);
  for (let i = 0; i < aString.length; i++) {
    console.log(aString[i]);
  }
  console.log("********************");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// list of alpha characters, lowercase
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
// list of numeric characters
var numericChars = "0123456789";
// list of special characters, \&'" are all backslashed to comply with javascript requirements
var specialChars = "\\\&\'\"`~!@#$%^*()-_=+[{]}|;:,<.>/?";

function getUserInput(){
  var lengthValid = false;
  while (!lengthValid) {
    var pwLength = prompt(`How many characters should be in the password?\n(minimum of 8 and maximum of 128 characters allowed)`);
    
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
  
    // check that at least one is selected
    if(!pwLower && !pwUpper && !pwNumeric && !pwSpecial){
      alert(`Seriously, you have to pick something.\nTry again. Just one character type, any one.`);
    }
  }
}

function generatePassword() {
  getUserInput();

  // build new array of potential characters based on criteria selected
  var potentialChars = specialChars;

  // randomly pull from new array for length specified
  //     build a password result, character by character

  var generatedPW = potentialChars;
  return generatedPW;
}

// Write password to the #password input
function writePassword() {
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
