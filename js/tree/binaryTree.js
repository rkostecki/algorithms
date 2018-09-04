function Node ({left = null, right = null, key = null, p = null}) {
    this.left = left;
    this.right = right;
    this.key = key;
    this.p = p;
}

function Tree () {
    this.root = null;
}

Tree.prototype.inorderTreeWalk = function () {
    const acc = [];
    inorderTreeWalk(this.root, node => {
        acc.push(node.key);
    });
    return acc;
};

Tree.prototype.treeInsert = function (newNode) {
    treeInsert(this, newNode);
};

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
    return treeMinimum(this.root);
};

Tree.prototype.treeMaximum = function () {
    return treeMaximum(this.root);
};

Tree.prototype.treeSuccesor = function (node) {
    return treeSuccesor(node);
};

Tree.prototype.treeDelete = function (node) {
    return treeDelete(this, node);
};

function inorderTreeWalk (x, callback) {
    if (x !== null) {
        inorderTreeWalk(x.left, callback);
        callback(x);
        inorderTreeWalk(x.right, callback);
    }
}

function treeInsert (T, z) {
    let y = null;
    let x = T.root;

    while (x !== null) {
        y = x;
        if (z.key < x.key) {
            x = x.left;
        } else {
            x = x.right;
        }
    }

    z.p = y;
    if (y === null) {
        T.root = z;
    } else if (z.key < y.key) {
        y.left = z;
    } else {
        y.right = z;
    }
}

function transplant (T, u, v) {
    if (u.p === null) {
        T.root = v;
    } else if (u === u.p.left) {
        u.p.left = v;
    } else {
        u.p.right = v;
    }
    if (v !== null) {
        v.p = u.p;
    }
}

function treeDelete (T, z) {
    if (z.left === null) {
        transplant(T, z, z.right);
    } else if (z.right === null) {
        transplant(T, z, z.left);
    } else {
        let y = treeMinimum(z.right);
        if (y.p !== z) {
            transplant(T, y, y.right);
            y.right = z.right;
            y.right.p = y;
            transplant(T, z, y);
            y.left = z.left;
            y.left.p = y;
        }
    }
}

function treeMaximum (node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node;
}


function treeMinimum (x) {
    while (x.left !== null) {
        x = x.left;
    }
    return x;
}

function treeSuccesor (x) {
    if (x.right !== null ) {
        return treeMinimum (x.right);
    }
    let y = x.p;
    while (y !== null && x === y.right) {
        x = y;
        y = y.p;
    }
    return y;
}


module.exports = {
    Tree,
    Node
};
