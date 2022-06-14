/**
 * Tree traversal
 * Preorder - root -> left -> right
 * Inorder - left -> root -> right
 * Postorder - left -> right -> root
 */


/**
 * PRE-ORDER TRAVERSAL
 */

 class TreeNode {
    public key: any
    public left: any
    public right: any
    constructor(value: any) {
        this.key = value;
        this.left = null;
        this.right = null;
    }
}

function preorder(root: TreeNode) {
    // [[0, left, right], [val, left, right], [val, left, right]]
    /**
     *        0
     *        /\
     *        1 2
     *        /\ /\
     *        5 9 1 4  
     * 
     * 0 -> 1                        
     */

    if (root === null) {
        return;
    }

    console.log(root.key);
    preorder(root.left);
    preorder(root.right);

}

function inorder(root: TreeNode) {
    if (root === null) {
        return;
    }

    inorder(root.left);
    console.log(root.key);
    inorder(root.right);
}

function postorder(root: TreeNode) {
    if (root === null) {
        return;
    }

    postorder(root.left);
    postorder(root.right);
    console.log(root.key);
}

const root = new TreeNode(40);
root.left = new TreeNode(30);
root.right = new TreeNode(50);
root.left.left = new TreeNode(25);
root.left.right = new TreeNode(35);
root.left.left.left = new TreeNode(15);
root.left.left.right = new TreeNode(28);
root.right.left  = new TreeNode(45);
root.right.right = new TreeNode(60);
root.right.right.left = new TreeNode(55);
root.right.right.right = new TreeNode(70);

console.log('tree', root);
console.log('pre-order', preorder(root)) // 40 30 25 15 28 35 50 45 60 55 70
console.log('inorder', inorder(root)); // 15 25 28 30 35 40 45 50 55 60 70
console.log('postorder', postorder(root)); // 15, 28, 25, 35, 30, 45, 55, 70, 60, 50, 40


 /**
     *        40
     *        /\
     *        30 50
     *        /\ /\
     *     25 35 45 60
     *      /\      /\
     *    15 28    55 70
     *                        
     */