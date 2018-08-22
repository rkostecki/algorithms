function Node ({left = null, right = null, key = null, p = null}) {
    this.left = left;
    this.right = right;
    this.key = key;
    this.p = p;
}

function Tree () {
    this.root = null;
}

Tree.prototype.traverseTree = function (callback) {

    const traverseRecursive = function (node, callback) {
        node.left && traverseRecursive(node.left, callback);
        node.right && traverseRecursive(node.right, callback);
        return node && callback(node);
    };

    return traverseRecursive(this.root, callback)
};

Tree.prototype.treeInsert = function (newNode) {
    treeInsert(this, newNode);
};

function treeInsert (tree, newNode) {
    let memCurrNode = null;
    let currNode = tree.root;

    while (currNode !== null) {
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
}

Tree.prototype.treeSearch = function (key) {
    const recursiveTreeSearch = function (node, key) {
        if (node === null || key === node.key) {
            return node;
        }
        if (key < node.key) {
            return recursiveTreeSearch(node.left, key);
        } else {
            return recursiveTreeSearch(node.right, key);
        }
    };

    return recursiveTreeSearch(this.root, key);
};

Tree.prototype.iterativeTreeSearch = function (key) {
    let node = this.root;

    while (node !== null && key !== node.key) {
        if (key < node.key) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return node;
};

Tree.prototype.treeMinimum = function () {

    const treeMinimum = function (node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    };

    return treeMinimum(this.root);
};

Tree.prototype.treeMaximum = function () {
    const treeMaximum = function (node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    return treeMaximum(this.root);

};

module.exports = {
    Tree,
    Node
};
