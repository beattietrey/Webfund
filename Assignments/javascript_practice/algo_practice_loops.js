function printOdds1to20() {
    for(var i = 1; i <=20; i+=2) {
        console.log(i)
    }
}

printOdds1to20()

function sumAndPrint1to5() {
    var sum = 0;
    for(var i = 1; i <=5; i++) {
        sum+=i;
        console.log("Num: " + i + ", Sum: " + sum);
    }
}

sumAndPrint1to5()