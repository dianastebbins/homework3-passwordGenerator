# homework3-passwordGenerator

## Project Description
Based on user-entered criteria of password attributes, generate and display an appropriate password to the user.

## General Notes
### Special Characters:
*Found documentation that four special characters in JavaScript, &\'", need to be backslashed in order to display properly. In testing, it seemed like & and ' were actually ok with or without the leading backslash, but I left all four in.
### User Inputs
*If the user enters text rather than number, or a value outside of the 8-128 character min/max, they are alerted and re-prompted for a length for password. 
*If the user does not select any character type to include in the password, they are alerted and the list of options is re-prompted.
*If user clicks Cancel on the password length prompt, the cycle ends and a message is presented to the user.
### Password Generation
*I created the character type lists as strings rather than as explicit arrays ("abc" vs ["a","b","c"]) since a string is really just an array of characters and can be indexed the same as an explicit array. And...it was easier to type it out as a string. :-) 
*Additionally, I only created one alphabet list, in lower case. I just toUpperCase that string when building the potentialChars string(array) if the user says Yes to upper case letters.
### Problems
This homework was very doable but I was not able to do one extra step I wanted. In lines 82-86 of script.js there is some commented out code. I was trying to clear out the password result box when the user clicks on the Generate Button a second (or third, or fourth, or ...). It just seems like there should be a cleaner page in the background while they answered all the criteria prompts. Anyway, what I tried did not work so I put it back how it was originally provided.

## Table of Contents
* [Project Details](#project-details)
* [Requirements](#requirements)
* [Pseudocode](#pseudocode)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)

## Project Details
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## Requirements 
    (copied from Homework instructional README.md, for reference)

### Directions
If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
The following image demonstrates the application functionality:
![password generator demo](./Assets/03-javascript-homework-demo.png)

## Pseudocode
```
list of alpha characters
    uppercase
    lowercase
list of numeric characters
list of special characters
prompt user
    password length
        check the length is between 8 and 128
    if they want alpha characters
        uppercase
        lowercase
    if they want numeric characters
    if they want special characters
        check that at least one is selected
build new array of potential characters based on criteria selected
randomly pull from new array for length specified
    build a password result, character by character
display result
```

## Installation
url to deployed app: https://dianastebbins.github.io/homework3-passwordGenerator/

## Usage

## Credits
Requirements copied from provided Homework files of Full Stack Coding Bootcamp.

## License

## Badges

## Contributing
For list of special characters in JavaScript:
https://w3schools.sinsixx.com/js/js_special_characters.asp.htm

## Tests

