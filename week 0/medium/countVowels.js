/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    var count =0;    
    for(var i =0;i<str.length;i++){
      var a = str[i];
      if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u') count++;
    }
    return count;
}

module.exports = countVowels;