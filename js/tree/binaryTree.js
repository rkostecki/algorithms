function Node ({left = null, right = null, key = null, value = null, parent = null}) {
    this.left = left;
    this.right = right;
    this.key = key;
    this.value = value;
    this.parent = parent;
}


function Tree ({key, value, parent}) {
    this.root = new Node({
        left: null,
        right: null,
        key: key,
        value: value,
        parent: parent
    })
}

Tree.prototype.toString = function () {

};

Tree.prototype.treeInsert = function (tree, newNode) {
    let y = null;
    let x = tree.root;

    while (x !== null ){
        y = x;
        if (newNode.key < x.key) {
            x = x.left;
        } else {
            x = x.right;
        }
    }

    newNode.root = y;
    if (y === null) {
        tree.parent = newNode;
    } else if (newNode.key < y.key) {
        y.left = newNode;
    } else {
        y.right = newNode;
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