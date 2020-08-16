
//prompt how many characters
// *if null, alert "you have to enter something", generatePassword()
// *if below 8 or over 128, alert "pick between 8 and 128". generatePassword()
// *else go to next question etc.
// if no to 4 questions, alert "you have to pick at least one attribute"

// make function passwordStorage to randomize using input from questions (make all input into an object? userAnswers?)
// **have to define arrays of lowercase and uppercase alphabet
// *loop randomizer for every character xhow many they chose
// debugger;

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];









function generatePassword() {


  //GENERATE PASSWORD OPTIONS
  var characterCount = parseInt(prompt("how many characters? pick between 8 and 128"));
  console.log(characterCount);

  //checks to see if its NOT a number (isNaN)

  if (isNaN(characterCount) === true) {
    alert("Password length must be a number");
    return;
  };

  if (characterCount < 8) {
    alert('must be at least 8 ');
    return;
  }

  if (characterCount > 128) {
    alert('must be less than 129 ');
    return;

  }

  else {

    var lowercase = confirm("do you want lowercase?");
    var uppercase = confirm("do you want uppercase?");
    var numbers = confirm("do you want numbers?");
    var special = confirm("do you want special characters?");


    if (
      lowercase === false &&
      uppercase == false &&
      numbers === false &&
      special === false
    ) {
      alert("must select at least one character type");
      return;
    };


    //create an OBJ to store the users inputs
    var usersOptions = {
      length: characterCount,
      lowerCase: lowercase,
      upperCase: uppercase,
      integers: numbers,
      specialChar: special
    }

    console.log(usersOptions);

  }

  //GENERATE PASSWORD

  //store password as its being built
  var result = [];

  //store types of characters to include in password
  var possiChar = [];

  
  //condtion to check users options type
  if (usersOptions.specialChar) {
    //combines possiChar arr with specialCharacters arr and saved new array in possiChar
    possiChar = possiChar.concat(specialCharacters);
    console.log('CONCAT', possiChar);
  }

  if (usersOptions.integers) {
    //combines possiChar arr with specialCharacters arr and saved new array in possiChar
    possiChar = possiChar.concat(numericCharacters);
    console.log('CONCAT', possiChar);
  }

  if (usersOptions.lowerCase) {
    //combines possiChar arr with specialCharacters arr and saved new array in possiChar
    possiChar = possiChar.concat(lowerCasedCharacters);
    console.log('CONCAT', possiChar);
  }

  if (usersOptions.upperCase) {
    //combines possiChar arr with specialCharacters arr and saved new array in possiChar
    possiChar = possiChar.concat(upperCasedCharacters);
    console.log('CONCAT', possiChar);
  }

  //iterate thru chosen arrays for password length, push into empty possiChar array, then randomiz order
  for (let i = 0; i < usersOptions.length; i++) {
    result.push(random(possiChar))

  }
// send final password to become 'password' variable
  return result.join('');
}


//randomize the characters in a given array
function random(arr) {
  var index = Math.floor(Math.random() * arr.length);
  console.log('RANDOM NUMBER', index)
  var element = arr[index];
  console.log('RANDOM Char', element)
  return element;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Users Options
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
