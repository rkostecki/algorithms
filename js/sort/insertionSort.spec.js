const insertionSort = require('./insertionSort');
const {expect} = require('chai');

describe('InsertionSort tests', () => {
    it('sort empty array', () => {
        const array = [];

        insertionSort(array);
        expect(array).to.deep.equal([]);
    });

    it('sort 1 element', () => {
        const array = [2];

        insertionSort(array);
        expect(array).to.deep.equal([2]);
    });

    it('sort 2 elements', () => {
        const array = [2, 1];

        insertionSort(array);
        expect(array).to.deep.equal([1, 2]);
    })
});