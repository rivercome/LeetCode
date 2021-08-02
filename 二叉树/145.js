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
 var postorderTraversal = function(root) {
    // 1. 设置结果
    const result = [];
  
    // 2. 递归
    const recursion = (root) => {
      // 2.1 设置终止条件
      if (!root) {
        return;
      }
  
      // 2.2 后序遍历：左、右、根
      recursion(root.left);
      recursion(root.right);
      result.push(root.val);
    };
    recursion(root);
  
    // 3. 返回结果
    return result;
  };