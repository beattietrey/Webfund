/* 
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;

const nums2 = [5, 2, 2, 3];
const expected2 = 1;

const nums3 = [];
const expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
    var min = nums[0];
    var indexOfMin = 0
    if(nums.length < 1) {
        return -1
    }  else {
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i]
            indexOfMin = i
        }
    }
    return indexOfMin
    }// code here
}

// Tests
const result1 = indexOfMinVal(nums1);
console.log(result1, "should be", expected1);

const result2 = indexOfMinVal(nums2);
console.log(result2, "should be", expected2);

const result3 = indexOfMinVal(nums3);
console.log(result3, "should be", expected3);