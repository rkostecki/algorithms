const insertionSort = require('./insertionSort');
const {expect} = require('chai');
const {isSorted, generateRandomNumbers, GENERATED_ARRAY_SIZES} = require('../tests');

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

    it(`generate ${GENERATED_ARRAY_SIZES.SMALL} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.SMALL));
        expect(isSorted(res)).to.be.false;
        insertionSort(res);
        expect(isSorted(res)).to.be.true;
    });

    it(`generate ${GENERATED_ARRAY_SIZES.MEDIUM} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.MEDIUM));
        expect(isSorted(res)).to.be.false;
        insertionSort(res);
        expect(isSorted(res)).to.be.true;
    });

    it(`generate ${GENERATED_ARRAY_SIZES.LARGE} numbers array`, () => {
        const res = Array.from(generateRandomNumbers(GENERATED_ARRAY_SIZES.LARGE));
        expect(isSorted(res)).to.be.false;
        insertionSort(res);
        expect(isSorted(res)).to.be.true;
    });
});