function isPalindrome(word) {
  function reverseString(word) {
    
    const wordArray = word.split("");
   
    const reversedWordArray = wordArray.reverse();
    
    const reversedWord = reversedWordArray.join("");
    
    return reversedWord;
  }
   
   const reversedWord = reverseString(word);
   
   return word === reversedWord;
  
}
/* 
create an array from the input string
 reverse the array
 create a string from the reversed array
 return the reversed string
 reverse the input string
compare the reversed string to the input
 compare the reversed string to the input
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  applied a problem solving process to one specific algorithm problem.
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
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
