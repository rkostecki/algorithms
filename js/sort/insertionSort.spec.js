const insertionSort = require('./insertionSort');
const {expect} = require('chai');
const crypto = require('crypto');

describe('InsertionSort tests', () => {
    it('sorts empty array', () => {
        const array = [];

        insertionSort(array);
        expect(array).to.deep.equal([]);
    });

    it('sorts 1 elements array', () => {
        const array = [2];

        insertionSort(array);
        expect(array).to.deep.equal([2]);
    });

    it('sorts 2 elements array', () => {
        const array = [2, 1];

        insertionSort(array);
        expect(array).to.deep.equal([1, 2]);
    });

    it('sorts 2 elements array', () => {

        const array = [2, 1];

        insertionSort(array);
        expect(array).to.deep.equal([1, 2]);
    });

    it('generate 10000 numbers array', () => {

        const res = Array.from(arrayIterator(10000));
        expect(isSorted(res)).to.be.false;
        insertionSort(res);
        expect(isSorted(res)).to.be.true;
    });
});

function isSorted (array) {
    let prev = null;
    if (array.length === 1) {return true;}

    return !array.some(val => {
        const res = (prev !== null && prev > val);
        prev = val;

        return res;
    });
}

function arrayIterator (max) {
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

function randomInt() {
    return parseInt(crypto.randomBytes(4).toString('hex'), 16);

}
