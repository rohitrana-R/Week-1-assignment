/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
   let a = str.length;
   let b = str.length;
  if(a!==b)
  {
    console.log("INVALID INPUT");
  }
   let st1 = str1.split('').sort().join('');
   let st2 = str2.split('').sort().join('');
  if(st1===st2)
    console.log("True");
  }
else{
  console.log("false");
}
}

module.exports = isAnagram;
