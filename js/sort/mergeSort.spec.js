const mergeSort = require('./mergeSort');
const {expect} = require('chai');
const {isSorted, generateRandomNumbers, GENERATED_ARRAY_SIZES} = require('../tests');

describe('MergeSort tests', () => {
    it('sorts empty array', () => {
        const array = [];

        mergeSort(array, 0, 0);
        expect(array).to.deep.equal([]);
    });

    it('sorts 1 elements array', () => {
        const array = [2];

        mergeSort(array, 1, 1);
        expect(array).to.deep.equal([2]);
    });

    it('sorts 2 elements array', () => {
        const array = [2, 1];

        mergeSort(array, 1, 2);
        expect(array).to.deep.equal([1, 2]);
    });

    it('sorts 2 elements array', () => {

        const array = [2, 1];

        mergeSort(array, 1, 2);
        expect(array).to.deep.equal([1, 2]);
    });

    it(`generate ${GENERATED_ARRAY_SIZES.SMALL} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.SMALL));
        expect(isSorted(res)).to.be.false;
        mergeSort(res, 1, GENERATED_ARRAY_SIZES.SMALL);
        expect(isSorted(res)).to.be.true;
    });

    it(`generate ${GENERATED_ARRAY_SIZES.MEDIUM} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.MEDIUM));
        expect(isSorted(res)).to.be.false;
        mergeSort(res, 1, GENERATED_ARRAY_SIZES.MEDIUM);
        expect(isSorted(res)).to.be.true;
    });

    it(`generate ${GENERATED_ARRAY_SIZES.LARGE} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.LARGE));
        expect(isSorted(res)).to.be.false;
        mergeSort(res, 1, GENERATED_ARRAY_SIZES.LARGE);
        expect(isSorted(res)).to.be.true;
    });
});