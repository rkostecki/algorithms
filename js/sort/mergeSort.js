function merge (A, p, q, r) {
    const n1 = q - p + 1;
    const n2 = r - q;
    const L = [];
    const R = [];
    let i;
    let j;
    for (i = 0; i < n1; i++) {
        L[i] = A[p + i - 1];
    }
    for (j = 0; j < n2; j++) {
        R[j] = A[q + j];
    }
    i = 0;
    j = 0;
    for (let k = p - 1; k < r; k++) {
        if (i < L.length && (j < R.length && L[i] <= R[j]) || j >= R.length ) {
            A[k] = L[i];
            i = i + 1;
        } else if(j < R.length) {
            A[k] = R[j];
            j = j + 1;
        }

    }
}

function mergeSort (A, p, r) {
    if (p < r) {
        let q =  Math.floor((p + r)/2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

module.exports = mergeSort;
