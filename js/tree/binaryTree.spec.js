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
    describe('Traverse tree in order', () => {
        it('traverse', () => {
            const acc = tree.inorderTreeWalk();

            expect(acc).to.deep.equal([ 2, 3, 4, 5, 10 ]);
        });
    });


    describe('Finding node and delete', () => {
        it('find node 5 and delete it', () => {
            expect(tree.inorderTreeWalk()).to.deep.equal([ 2, 3, 4, 5, 10 ]);

            const foundNode = tree.treeSearch(5);
            expect(foundNode.key).to.equal(5);
            tree.treeDelete(foundNode);
            expect(tree.treeSearch(5)).to.be.null;

            expect(tree.inorderTreeWalk()).to.deep.equal([ 2, 3, 4, 10 ]);
        });
    });

});


