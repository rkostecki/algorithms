function Node ({left = null, right = null, key = null, p = null}) {
    this.left = left;
    this.right = right;
    this.key = key;
    this.p = p;
}


function Tree ({key}) {
    this.root = new Node({
        left: null,
        right: null,
        key: key,
        p: null
    })
}

Tree.prototype.toString = function (node) {
    node.left && this.toString(node.left);
    node.right && this.toString(node.right);
    return node && node.key;
};

Tree.prototype.treeInsert = function (tree, newNode) {
    let memCurrNode = null;
    let currNode = tree.root;

    while (currNode !== null ){
        memCurrNode = currNode;
        if (newNode.key < currNode.key) {
            currNode = currNode.left;
        } else {
            currNode = currNode.right;
        }
    }

    newNode.p = memCurrNode; //?????
    if (memCurrNode === null) {
        tree.root = newNode;
    } else if (newNode.key < memCurrNode.key) {
        memCurrNode.left = newNode;
    } else {
        memCurrNode.right = newNode;
    }
};

Tree.prototype.treeSearch = function (root, key) {
    if (root === null || key === root.key) {
        return root;
    }
    if (key < root.key) {
        return this.treeSearch(root.left, key);
    } else {
        return this.treeSearch(root.right, key);
    }
};

var tree = new Tree({key: 4, value: 4});

tree.treeInsert(tree, new Node({key: 2, value: 2}));
tree.treeInsert(tree, new Node({key: 3, value: 3}));
tree.treeInsert(tree, new Node({key: 5, value: 5}));
tree.treeInsert(tree, new Node({key: 10, value: 10}));


console.log(tree);

console.log(tree.treeSearch(tree.root, 5));

console.log(tree.toString(tree.root));
