function binarySearch (arrNum, searchNum) {
    let leftIndex = 0;
    if (arrNum.length === 0) {
        return -1;
    }
    let rightIndex = arrNum.length - 1;
    let middle;



    while (leftIndex <= rightIndex) {
        middle = Math.floor((rightIndex + leftIndex) / 2);

        console.log({rightIndex, leftIndex, middle});
        if (arrNum[middle] === searchNum) {
            return middle;
        }
        if (arrNum[middle] > searchNum) {
            rightIndex = middle - 1;
        } else {
            leftIndex = middle + 1;
        }
    }
    return -1;

}

module.exports = binarySearch;