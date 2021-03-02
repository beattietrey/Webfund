/* 
  From zoom interview with student in year 2020
  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @return {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */
function concatArrWithSelf(items) {
  var newArr= []
  for(var i = 0; i < 2; i++) {
      for(var j = 0; j < items.length; j++) {
          newArr.push(items[j]);
      }
    }
    return newArr
}



// Tests
const result1 = concatArrWithSelf(arr1);
console.log(result1, "should be", expected1);

const result2 = concatArrWithSelf(arr2);
console.log(result2, "should be", expected2);

const result3 = concatArrWithSelf(arr3);
console.log(result3, "should be", expected3);