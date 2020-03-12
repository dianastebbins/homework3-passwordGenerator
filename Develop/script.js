
// helper function
function printStringAsArray(aString){
  console.log(`string length: ${aString.length}`);
  for (let i = 0; i < aString.length; i++) {
    console.log(aString[i]);
  }
  console.log("********************");
}

// list of alpha characters, lowercase
var lowerChars = "abcdefghijklmnopqrstuvwxyz"; //efghijklmnopqrstuvwxyz";
// list of numeric characters
var numericChars = "0123456789";

// list of special characters, \&'" are all backslashed to comply with javascript requirements
// \'	single quote   <-- this one seemed ok with or without backslash, leaving it in
// \"	double quote
// \&	ampersand   <-- this one seemed ok with or without backslash, leaving it in
// \\	backslash
var specialChars = "\\\&\'\"`~!@#$%^*()-_=+[{]}|;:,<.>/?";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // get user inpu
  //     password length
  var pwLength = prompt();
  //         check the length is between 8 and 128
  //     if they want alpha characters
  var pwLower = confirmation();
  var pwUpper = confirmation();
  //     if they want numeric characters
  var pwLength = confirmation();
  //     if they want special characters
  var pwLength = confirmation();
  
  //         check that at least one is selected

  // build new array of potential characters based on criteria selected
  var allowedChars = specialChars;
  printStringAsArray(allowedChars);
  allowedChars += specialChars;
  printStringAsArray(allowedChars);

  // randomly pull from new array for length specified
  //     build a password result, character by character

  var generatedPW = specialChars;
  return generatedPW;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // display result
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
