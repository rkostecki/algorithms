const insertionSort = require('./insertionSort');
const {expect} = require('chai');

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
});

function generateArray (max) {
    const arr = [];
    for(i = 0; )
}