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
    while (true) {
        const value = arr[i];
        if (Array.isArray(value)) {
            arr = arr.splice(i, 0, ...value);//value inserted into curr index of array
            console.log('arr', arr);
        }
        i++;
        if (i > arr.length-1) {
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