const crypto = require('crypto');

function isSorted (array) {
    let prev = null;
    if (array.length === 1) {return true;}

    return !array.some(val => {
        const res = (prev !== null && prev > val);
        prev = val;

        return res;
    });
}

function generateRandomNumbers (max) {
    let index = 0;

    return {
        [Symbol.iterator]() {
            const iterator = {
                next () {
                    if (index < max) {
                        index++;
                        return { done: false, value: randomInt() };
                    } else {
                        return { done: true, value: null };
                    }
                }
            };
            return iterator;
        }
    };
}

function randomInt () {
    return crypto.randomBytes(4).readUInt32BE(0, true);

}

const GENERATED_ARRAY_SIZES = {
    SMALL: 1000,
    MEDIUM: 10000,
    LARGE: 100000
};

module.exports = {
    GENERATED_ARRAY_SIZES,
    isSorted,
    generateRandomNumbers
};
