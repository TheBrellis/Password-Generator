function pwGen() {

  // ############ NEXT COMMIT -m "ADDED CHARACTER STRINGS AND VERIFICATION OF USER SELECTIONS"

// Defining strings for the available character types:

  var charSpecial = '!#$%&)(*+,-./: ;<=>?@[\]^_`{|}~'
  var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charLower = 'abcdefghijklmnopqrstuvwxyz';
  var charNum = '0123456789';

//*** PROMPTING USER *** for password lengths and character types to include: 
  var pwLength = prompt('How long would you like your password to be?');
  var typeSpecial = confirm('Would you like it to contain special characters?');
  var typeUpper = confirm('Would you like it to contain uppercase characters?');
  var typeLower = confirm('Would you like it to contain lowercase characters?');
  var typeNum = confirm('Would you like it to contain numeric characters?');


  //*** VERIFYING *** what types the user selected and setting up the typeArray accordingly

  switch(pwLength,typeSpecial,typeUpper,typeLower,typeNum) {
    //user selects all char types
    case (typeSpecial === true && typeUpper === true && typeLower === true && typeNum === true):
      var typeArray = [charSpecial, charUpper, charLower, charNum];
      break;
    //user does not want numbers
    case (typeSpecial === true && typeUpper === true && typeLower === true && typeNum === false):
      var typeArray = [charSpecial, charUpper, charLower];
      break;
    //user does not want lower case or numbers
    case (typeSpecial === true && typeUpper === true && typeLower === false && typeNum === false):
      var typeArray = [charSpecial, charUpper];
      break;
    //user does not want upper, lower, or numbers
    case (typeSpecial === true && typeUpper === false && typeLower === false && typeNum === false):
      var typeArray = [charSpecial];
      alert('Only one type of character? OOOkay there big fella');
      break;
    //user says no to all character types
    default:
      alert("You have to pick something!");
      var typeSpecial = confirm('Would you like it to contain special characters?');
      var typeUpper = confirm('Would you like it to contain uppercase characters?');
      var typeLower = confirm('Would you like it to contain lowercase characters?');
      var typeNum = confirm('Would you like it to contain numeric characters?');
      break;
  }

//defining an empty string called userPassword. Password will be buit in this string.
userPassword = '';

   

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