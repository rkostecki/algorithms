function insertionSort (A) {
    let key = 0;

    for (let j = 1; j < A.length; j++) {
        key = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }

}

module.exports = insertionSort;