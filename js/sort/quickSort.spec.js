const {quickSort, partition} = require('./quickSort');
const {expect} = require('chai');
const {isSorted, generateRandomNumbers} = require('../tests')

describe('QuickSort tests', () => {
    it('sorts empty array', () => {
        const array = [];

        quickSort(array, 0, 0);
        expect(array).to.deep.equal([]);
    });

    it('sorts 1 elements array', () => {
        const array = [2];

        quickSort(array, 0, 0);
        expect(array).to.deep.equal([2]);
    });

    it('sorts 2 elements array', () => {
        const array = [2, 1];

        quickSort(array, 0, 1);
        expect(array).to.deep.equal([1, 2]);
    });

    it('sorts 2 elements array', () => {

        const array = [2, 1];

        quickSort(array, 0, 1);
        expect(array).to.deep.equal([1, 2]);
    });

    it('generate 10000 numbers array', () => {

        const res = Array.from(generateRandomNumbers(100));
        console.log(res);
        expect(isSorted(res)).to.be.false;
        quickSort(res, 0, 100-1);
        expect(isSorted(res)).to.be.true;
    });
});


const testSequence = [40, 4, 10, 11, 3, 300, 1, 1, 5];
console.log(testSequence);
const res = partition(testSequence, 0, testSequence.length-1)
console.log('Partition', res, testSequence);

quickSort(testSequence, 0, testSequence.length-1)
console.log('Sort', testSequence );