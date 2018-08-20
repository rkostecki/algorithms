function quickSort (A, p, r) {
    if (p < r) {
        const q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

function partition (A, p, r) {
    let x = A[r];
    i = p - 1;
    for (j = p; j < r; j++ ) {
        if (A[j] <= x) {
            i++;
            // replace A[i] <-> A[j]
            replace(A, i, j);
        }
    }
    replace(A, i + 1, r)
    return i + 1;
}

function replace (A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

module.exports = {
    partition,
    quickSort
};
