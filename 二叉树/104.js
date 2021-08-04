/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};
// 为代码的逻辑其实是求的根节点的高度，而根节点的高度就是这颗树的最大深度，所以才可以使用后序遍历。

// 在104.二叉树的最大深度中，如果真正求取二叉树的最大深度，代码应该写成（前序遍历）

// 求深度适合用前序遍历，而求高度适合用后序遍历。
// 二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数。
// 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数。
// 但leetcode中强调的深度和高度很明显是按照节点来计算的
