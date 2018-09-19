function arrayFlatten (arr, resArr) {
    if (!Array.isArray(arr)) {
        return resArr.push(arr);
    }
    return arr.map(el => {
        return arrayFlatten(el, resArr);
    });
}

function arrayFlattenJS (arr) {
    return JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(JSON.parse);
}

function arrayFlattenApply (arr) {
    return Array.prototype.concat.apply([], arr);
}

function arrayFlattenLoop (arr) {
    let i = 0;

    while (true) {
        const value = arr[i];
        if (Array.isArray(value)) {
            arr.splice(i, 1, ...value);
        } else {
            i++;
        }

        if (i > arr.length - 1) {
            break;
        }
    }
    return arr;
}

module.exports = {
    arrayFlatten,
    arrayFlattenJS,
    arrayFlattenApply,
    arrayFlattenLoop
};