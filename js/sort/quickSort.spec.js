const {quickSort, partition} = require('./quickSort');
const {expect} = require('chai');
const {isSorted, generateRandomNumbers, GENERATED_ARRAY_SIZES} = require('../tests');

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

    it('sorts 1 elements array', () => {
        const array = [2];

        quickSort(array, 0, 0);
        expect(array).to.deep.equal([2]);
    });

    it('calculate partition', () => {
        const testSequence = [40, 4, 10, 11, 3, 300, 1, 1, 5];
        const value = partition(testSequence, 0, testSequence.length-1);

        expect(testSequence).to.deep.equal( [ 4, 3, 1, 1, 5, 300, 10, 11, 40 ]);
        expect(value).to.equal(4);
    });

    it(`generate ${GENERATED_ARRAY_SIZES.SMALL} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.SMALL));

        expect(isSorted(res)).to.be.false;
        quickSort(res, 0, GENERATED_ARRAY_SIZES.SMALL-1);
        expect(isSorted(res)).to.be.true;
    });

    it(`generate ${GENERATED_ARRAY_SIZES.MEDIUM} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.MEDIUM));

        expect(isSorted(res)).to.be.false;
        quickSort(res, 0, GENERATED_ARRAY_SIZES.MEDIUM-1);
        expect(isSorted(res)).to.be.true;
    });

    it(`generate ${GENERATED_ARRAY_SIZES.LARGE} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.LARGE));

        expect(isSorted(res)).to.be.false;
        quickSort(res, 0, GENERATED_ARRAY_SIZES.LARGE-1);
        expect(isSorted(res)).to.be.true;
    });
});
