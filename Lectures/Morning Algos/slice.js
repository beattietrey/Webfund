/* 
  Recreate the built in .slice method
  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)
  What should you do if the provided end index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

/**
 * Returns a slice of given arr.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {number} startIdx
 * @param {number} endIdx
 * @return {Array<any>} The slice of the given arr from startIdx inclusive
 *    to endIdx.
 */
function slice(arr, startIdx, endIdx) {
  if(endIdx > arr.length) {
    var endLoop = arr.length
  }
  else{
    var endLoop = endIdx;
  }
  var slice =[]
  for(var i = startIdx; i < endLoop; i++) {
      if(i < 0) {
          i = 0;
      }
      slice.push(arr[i])
  }
  return slice
}

// Tests
const result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, "should be", expected1);

const result2 = slice(arr2, startIdx2, endIdx2);
console.log(result2, "should be", expected2);

const result3 = slice(arr3, startIdx3, endIdx3);
console.log(result3, "should be", expected3);

const result4 = slice(arr4, startIdx4, endIdx4);
console.log(result4, "should be", expected4);

const result5 = slice(arr5, startIdx5, endIdx5);
console.log(result5, "should be", expected5);

const result6 = slice(arr6, startIdx6, endIdx6);
console.log(result6, "should be", expected6);