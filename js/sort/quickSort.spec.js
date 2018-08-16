const {quickSort, partition} = require('./quickSort');


const testSequence = [40, 4, 10, 11, 3, 300, 1, 1, 5];
console.log(testSequence);
const res = partition(testSequence, 0, testSequence.length-1)
console.log('Partition', res, testSequence);

quickSort(testSequence, 0, testSequence.length-1)
console.log('Sort', testSequence );