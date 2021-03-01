var testArr = [6,3,5,1,2,4]

function printValuesAndSums(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum+=arr[i]
        console.log("Num: " + arr[i]+ ", Sum: " + sum)
    }
}



function multiplyValueByPosition(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i]*=i;
    }
    console.log(arr)
}

