function Node ({left, right, value}) {
    this.left = left;
    this.right = right;
    this.value = value;
}


function Tree (key) {
    this.root = new Node({
        left: null,
        right: null,
        key: key,
        value: value
    })
}

Tree.prototype.toString = function () {

}

Tree.prototype.treeInsert = function (node) {
    const tree = this.tree;

    const currentNode = null;
    const x = tree.root;
    while (x !== null ){
        currentNode = x;
        if (z.key < x.key) {
            x = x.left;
        } else {
            x = x.right;
        }
    }
    node.root = currentNode;
    if (y === null) {
        tree.root = node;
    } else if (z.key < y.key) {
        y.left = node;
    } else {
        y.right = node;
    }
}

Tree.prototype.treeSearch = function (root, key) {
    if (root === null || key === root.key) {
        return root;
    }
    if (key < root.key) {
        return this.treeSearch(root.left, key);
    } else {
        return this.treeSearch(root.right, key);
    }
}

