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
    const len = arr.length;
    const res = [];
    let i = 0;
    while(true) {
        if (i > len-1) {
            break;
        }
        const value = arr[i];
        if (!Array.isArray(value)) {
           res.push(value);
        } else {
            //
            res.concat(value);
        }
        i++;

    }
    return res;
}

module.exports = {
    arrayFlatten,
    arrayFlattenJS,
    arrayFlattenApply,
    arrayFlattenLoop
};