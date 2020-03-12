
// for special characters, keep this in mind:
// Code	Outputs
// \'	single quote
// \"	double quote
// \&	ampersand
// \\	backslash
// \n	new line
// \r	carriage return
// \t	tab
// \b	backspace
// \f	form feed

// list of alpha characters
//     uppercase
//     lowercase
// list of numeric characters
// list of special characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // prompt user
  //     password length
  //         check the length is between 8 and 128
  //     if they want alpha characters
  //         uppercase
  //         lowercase
  //     if they want numeric characters
  //     if they want special characters
  //         check that at least one is selected

  // build new array of potential characters based on criteria selected

  // randomly pull from new array for length specified
  //     build a password result, character by character
  return "Password";
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
