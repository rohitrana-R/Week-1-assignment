/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let a = str.length;
  
   for(let i =0;i<a;i++)
     {
    if (str[i] !== str[len - 1 - i]) {  
            alert( 'It is not a palindrome');  
     }
       else{
         alert('this is palindrome ');
       }
     }
  return true;
       
}

module.exports = isPalindrome;
