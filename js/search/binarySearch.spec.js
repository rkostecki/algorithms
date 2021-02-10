const binarySearch = require('./binarySearch');
const {expect} = require('chai');
const {isSorted, generateRandomNumbers, GENERATED_ARRAY_SIZES} = require('../tests');

describe('Binary Search tests', () => {
    it('empty array', () => {
        const array = [];

        const res =  binarySearch(array, 10);
        expect(res).to.equal(-1);
    });

    it('finds 1 elements array', () => {
        const array = [2];

        const res = binarySearch(array, 2);
        expect(res).to.deep.equal(0);
    });

    it(`find in numbers array`, () => {
        const arr = [1, 3, 4, 5 ,6 ,7, 19, 20];
        expect(binarySearch(arr, 4)).to.eq(2);

    });
});