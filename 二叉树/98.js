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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let arr = []
    const Midtree = (root) => {
        if(!root) {
            return null
        }
        Midtree(root.left)
        arr.push(root.val)
        Midtree(root.right)
    }
    Midtree(root)
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] >= arr[i+1]) {
            return false
        }
    }
    return true
  };