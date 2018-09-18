const {expect} = require('chai');
const {arrayFlatten, arrayFlattenJS, arrayFlattenApply, arrayFlattenLoop} = require('./arrayFlatten');

describe('arrayFlatten tests', () => {
    it('arrayFlatten recursive', () => {
        const array = [1, [2, 3], [4, 5, [6,7]]];
        const resArr = [];

        console.log(arrayFlatten(array, resArr));
        expect(resArr).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    });
    it('arrayFlatten join, split', () => {
        const array = [1, [2,[101, -102, {a: 1}], 3], [4, 5, [6,7]]];
        const res = arrayFlattenJS(array);

        expect(res).to.deep.equal([1, 2, 101, -102, {a: 1}, 3, 4, 5, 6,7]);
    });
    it('arrayFlatten apply one level only', () => {
        const array = [1, [2, 101, -102, {a: 1}, 3], [4, 5, 6,7]];
        const res = arrayFlattenApply(array);

        expect(res).to.deep.equal([1, 2, 101, -102, {a: 1}, 3, 4, 5, 6,7]);
    });
    it('arrayFlatten while', () => {
        const array = [1, [2,[101, -102, {a: 1}], 3], [4, 5, [6,7]]];
        const res = arrayFlattenLoop(array);

        expect(res).to.deep.equal([1, 2, 101, -102, {a: 1}, 3, 4, 5, 6,7]);
    });
 });