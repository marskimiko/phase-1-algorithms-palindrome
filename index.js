function isPalindrome(word) {
  // Write your algorithm here
  
  // convert word to array
  const arrayWord = word.split('');

  //reverse array
  const reverseArrayWord = arrayWord.reverse();

  // convert reversed array into a tring
  const reverseString = reverseArrayWord.join('');

  // compare reversed string to word and checks if they are equal
  if (word === reverseString) {
    return true;
  } else {
    return false; 
  }
}

/* 
  Add your pseudocode here
  - make if else statement
  - compare if word = word.backwards and print true if it does
  - return false if it does not
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
