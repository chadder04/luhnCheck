/*
 * 
 * 
 * 
 * 
 * 
 * 
 */

function luhnCheck(inputNum) {
    var inputNumArray = inputNum.toString().split("").map(Number);
    var checkDigit = inputNumArray[inputNumArray.length - 1];
    var checkSum = 0;

    for (var i = (inputNumArray.length - 1); i <= 1; i--) {

    }


    console.log(inputNumArray);
    console.log(checkDigit);
    console.log(checkSum);
}

luhnCheck(79927398713);

