const {Node, Tree} = require('./binaryTree');

describe('Binary Tree tests', () => {
    before(() => {

    });
    it('Should create tree', () => {
        const tree = new Tree();

        tree.treeInsert(new Node({key: 4})); //root
        tree.treeInsert(new Node({key: 2}));
        tree.treeInsert(new Node({key: 3}));
        tree.treeInsert(new Node({key: 5}));
        tree.treeInsert(new Node({key: 10}));

        console.log(tree);

        console.log('Find 5 in tree recursive: ', tree.treeSearch(tree.root, 5));
        console.log('Find 5 in tree iterative: ', tree.iterativeTreeSearch(5));

        const acc = [];
        tree.traverseTree(node => {
            acc.push(node.key);
        });
        console.log('Traverse tree: ', acc.join(','));


        console.log('Tree minimum: ', tree.treeMinimum(tree.root).key);

        console.log('Tree maximum: ', tree.treeMaximum(tree.root).key);
    });

});


