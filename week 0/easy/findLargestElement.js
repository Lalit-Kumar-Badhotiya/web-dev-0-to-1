/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var max = -Infinity ;
    for(var a of numbers){
        if(a>max){
            max=a;
        }
    }
    return max;
}

module.exports = findLargestElement;