// concat



/* 
  Array: Concat
  .push allowed: arrName.push(newItem)
  Replicate JavaScript’s concat() which combines two arrays into one NEW array
  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];

const arrA3 = [1];
const arrB3 = ["a", "b"];
const expected3 = [1, "a", "b"];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @return {Array<any>} The new arr that is a concatenation of the given arrays.
 */

  function concat(items1, items2) {
    for(var i = 0; i < items2.length; i++) {
        items1.push(items2[i])
    }
    return items1
}// code here


// Tests
const result1 = concat(arrA1, arrB1);
console.log(result1, "should be", expected1);

const result2 = concat(arrA2, arrB2);
console.log(result2, "should be", expected2);

const result3 = concat(arrA3, arrB3);
console.log(result3, "should be", expected3);