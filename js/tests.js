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
    return parseInt(crypto.randomBytes(4).toString('hex'), 16);

}

module.exports = {
    isSorted,
    generateRandomNumbers
} 