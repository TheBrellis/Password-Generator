function pwGen() {
//Hello There//


// Defining objects for the character types:

var special = {boolean: true, values:'!#$%&)(*+,-./: ;<=>?@]\[^_`{|}~'};
var upper = {boolean: true, values:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'};
var lower = {boolean: true, values: 'abcdefghijklmnopqrstuvwxyz'};
var num = {boolean: true, values: '0123456789' };

//*** PROMPTING USER *** for password length //
var pwLength = prompt('How long would you like your password to be? (must be between 8 and 128!)');
//***VERIFY*** that the password length is within the parameters
while (pwLength > 128 || pwLength < 8){
  alert('Listen Fool, password has to be between 8 and 128 characters')
  pwLength = prompt('Now, how long would you like your password to be?');
}
//*** PROMPTING USER *** for character types //
   special.boolean = confirm('Would you like it to contain special characters?');
   upper.boolean = confirm('Would you like it to contain uppercase characters?');
   lower.boolean = confirm('Would you like it to contain lowercase characters?');
   num.boolean = confirm('Would you like it to contain numeric characters?');

//*** VERIFY *** that the user selected a character type //
  //setting an array that includes all possible character types
    pwArray = [special.boolean, upper.boolean, lower.boolean, num.boolean];
  //removing all of the character types the user does not want 
    for (i = pwArray.length -1; i >= 0; i--) {
      if (pwArray[i] === false) {
        pwArray.splice(i,1); //.splice removes a specific index from an array. 
      }
    }
  //repeating prompts if the user did not pick a character type
    while (pwArray.length === 0) {
      alert("You've got to pick something!");
      special.boolean = confirm('Would you like it to contain special characters?');
      upper.boolean = confirm('Would you like it to contain uppercase characters?');
      lower.boolean = confirm('Would you like it to contain lowercase characters?');
      num.boolean = confirm('Would you like it to contain numeric characters?');
      pwArray = [special.boolean, upper.boolean, lower.boolean, num.boolean];
      for (i = pwArray.length -1; i >= 0; i--) {
        if (pwArray[i] === false) {
          pwArray.splice(i,1); //.splice removes a specific index from an array. 
        }
      }
    }
//****END OF USER INPUT AND VERIFICATIONS (this is where the fun begins)****//

//defining an empty string called userPassword. Password will be built in this string.
userPassword = '';

while (userPassword.length < pwLength) {
  rando = Math.floor(Math.random() * 4);
  switch(rando) {
  case 0 : 
  if (special.boolean === true && userPassword.length < pwLength) {
    //selecting a random number between 0 and the length of special.values, assinging to local variable x
    x = Math.floor(Math.random() * special.values.length);
    userPassword = userPassword + special.values.charAt(x); //adding the 'random' character to the user password
    console.log(userPassword.length);
  }

  case 1 :
  if (upper.boolean === true && userPassword.length < pwLength ) {
    //selecting a random number between 0 and the length of special.values, assinging to local variable x
    x = Math.floor(Math.random() * upper.values.length);
    userPassword = userPassword + upper.values.charAt(x); //adding the 'random' character to the user password
    console.log(userPassword.length);
  }

  case 2 :
  if (lower.boolean === true && userPassword.length < pwLength) {
      //selecting a random number between 0 and the length of special.values, assinging to local variable x
      x = Math.floor(Math.random() * lower.values.length);
      userPassword = userPassword + lower.values.charAt(x); //adding the 'random' character to the user password
      console.log(userPassword.length);
    }
  case 3 :
  if (num.boolean === true && userPassword.length < pwLength) {
    //selecting a random number between 0 and the length of special.values, assinging to local variable x
    x = Math.floor(Math.random() * num.values.length);
    userPassword = userPassword + num.values.charAt(x); //adding the 'random' character to the user password
    console.log(userPassword.length);
  }


}

console.log(userPassword);
console.log(pwLength);


}