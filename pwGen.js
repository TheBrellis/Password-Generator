function pwGen() {
//Hello There//
// Defining strings for the available character types:

  var charSpecial = '!#$%&)(*+,-./: ;<=>?@]\[^_`{|}~'
  var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charLower = 'abcdefghijklmnopqrstuvwxyz';
  var charNum = '0123456789';


//*** PROMPTING USER *** for password length //

  var pwLength = prompt('How long would you like your password to be? (must be between 8 and 128!)');
//***VERIFY*** that the password length is within the parameters
while (pwLength > 128 || pwLength < 8){
  alert('Listen Fool, password has to be between 8 and 128 characters')
  pwLength = prompt('Now, how long would you like your password to be?');
}
//*** PROMPTING USER *** for character types //
  var typeSpecial = confirm('Would you like it to contain special characters?');
  var typeUpper = confirm('Would you like it to contain uppercase characters?');
  var typeLower = confirm('Would you like it to contain lowercase characters?');
  var typeNum = confirm('Would you like it to contain numeric characters?');

//*** VERIFY *** that the user selected a character type //
  //setting an array that includes all possible character types
    pwArray = [typeSpecial, typeUpper, typeLower, typeNum];
  //removing all of the character types the user does not want 
    for (i = pwArray.length -1; i >= 0; i--) {
      if (pwArray[i] === false) {
        pwArray.splice(i,1); //.splice removes a specific index from an array. 
      }
    }
  //repeating prompts if the user did not pick a character type
  while (pwArray.length === 0) {
    alert("You've got to pick something!");
    typeSpecial = confirm('Would you like it to contain special characters?');
    typeUpper = confirm('Would you like it to contain uppercase characters?');
    typeLower = confirm('Would you like it to contain lowercase characters?');
    typeNum = confirm('Would you like it to contain numeric characters?');
    pwArray = [typeSpecial, typeUpper, typeLower, typeNum];
    for (i = pwArray.length -1; i >= 0; i--) {
      if (pwArray[i] === false) {
        pwArray.splice(i,1); //.splice removes a specific index from an array. 
      }
    }
  }
//****END OF USER INPUT AND VERIFICATIONS (this is where the fun begins)****//

//defining an empty string called userPassword. Password will be built in this string.
userPassword = '';

for (i=0; i < pwLength; i++ ) {
  



}


    //Randomly select a number called length between 8 and 128. (establish function using 4 steps through the For loop. Expand afterward.) 
    
  //  Step through a FOR loop the number of times as determined by the random number
    
  //  set up an array (could also use an object?) with 4 strings (one for each character type). Each string contains all possible values for the character type. 
    
  //  in the four loop. Generate a random number between 0 and 3, use this to select what index of the array is being referenced for that input. 
    
  //  generate another random number between 0 and the length of the selected string. assign this to index of the string.
    
  //  add the above character to userPassword variable.
    
  //  Repeat until complete
    
 //   at the end of the loop return userPassword. 
    
 //   Output:
    
 //   if you can use bootstrap do so. (easy peasy choice) 
    
  //  assign the button to run the function defined above.
    
  //  have the resulting variable printed to the needed area.
    
  //  Figure out how to make a copy to clipboard button. 
    

}