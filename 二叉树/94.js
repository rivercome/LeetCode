/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const res = [];
    const outMIdTree = (root) => {
        if(!root) {
            return null
        }
        outMIdTree(root.left)
        res.push(root.val)
        outMIdTree(root.right)
    }
    outMIdTree(root)
    return res
};