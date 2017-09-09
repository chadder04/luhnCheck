
function luhnCheck(inputNum) {
    var inputNumArray = inputNum.toString().split("").map(Number);
    var checkDigit = inputNumArray[inputNumArray.length - 1];
    var checkSum = 0;
    var isEvenPosition = false;

    for (var i = (inputNumArray.length - 1); i >= 0; i--) {
        if (isEvenPosition) {
            if ((inputNumArray[i] * 2) > 9) {
                checkSum += ((inputNumArray[i] * 2) - 9);
            } else {
                checkSum += (inputNumArray[i] * 2);
            }
        } else {
            checkSum += inputNumArray[i];
        }
        isEvenPosition = !isEvenPosition;
    }

    if (checkSum % 10 === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(luhnCheck(79927398713));  // true
console.log(luhnCheck(79927398710));  // false

