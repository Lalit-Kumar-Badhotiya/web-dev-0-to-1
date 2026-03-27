/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var start =0;
  var end =str.length-1;
  str = str.toLowerCase();
  while(start<end){
    if (!/[a-z0-9]/.test(str[start])) {
      start++;
      continue;
    }

    if (!/[a-z0-9]/.test(str[end])) {
      end--;
      continue;
    }
    if(str[start]!=str[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
