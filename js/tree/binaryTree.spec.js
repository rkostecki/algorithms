const {expect} = require('chai');

const {Node, Tree} = require('./binaryTree');
const tree = new Tree();

describe('Binary Tree tests', () => {
    before(() => {
        tree.treeInsert(new Node({key: 4})); //root
        tree.treeInsert(new Node({key: 2}));
        tree.treeInsert(new Node({key: 3}));
        tree.treeInsert(new Node({key: 5}));
        tree.treeInsert(new Node({key: 10}));
    });
    describe('Finding node', () => {
        it('treeSearch', () => {
            expect(tree.treeSearch(5).key).to.equal(5);
            expect(tree.treeSearch(10).key).to.equal(10);
            expect(tree.treeSearch(11)).to.be.null;
        });
        it('iterativeTreeSearch', () => {
            expect(tree.iterativeTreeSearch(5).key).to.equal(5);
            expect(tree.iterativeTreeSearch(10).key).to.equal(10);
            expect(tree.iterativeTreeSearch(11)).to.be.null;
        });
    });

    describe('Minimum maximum', () => {
        it('treeMinimum', () => {
            expect(tree.treeMinimum().key).to.equal(2);
        });
        it('treeMaximum', () => {
            expect(tree.treeMaximum().key).to.equal(10);
        });
    });
    describe('Traverse tree', () => {
        it('traverse', () => {
            const acc = [];
            tree.traverseTree(node => {
                acc.push(node.key);
            });
            expect(acc).to.deep.equal([ 3, 2, 10, 5, 4 ]);
        });

    });
});


