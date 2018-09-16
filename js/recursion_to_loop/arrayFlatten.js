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

module.exports = {
    arrayFlatten,
    arrayFlattenJS
};