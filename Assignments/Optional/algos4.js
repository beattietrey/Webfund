// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr,y) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            count++
        }
    }
    console.log("Number of values greater than " + y + " is " +count)
}

// Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1;i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
        }
        sum+=arr[i]
    }
    console.log("Max is " + max + ". Min is " + min + ". Average is " + sum/arr.length + ".")
}

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function dojoNegs(arr) {
    var newArr = []
    for(var i = 0; i < arr.length ; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo"
        }
        newArr.push(arr[i])
    }
    return newArr
}


// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, idx1, idx2) {
    var newArr = [];
    for (var i = 0;i < arr.length; i++) {
        if(i < idx1 || i > idx2) {
            newArr.push(arr[i])
        }
    }
    return newArr
} 
