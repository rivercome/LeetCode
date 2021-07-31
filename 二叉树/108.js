/**
 * Definition for a binary tree node.
 *  */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function getTree(nums, left, right) {
  if (left > right) {
    console.log("退出");
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);
  console.log("root", root);
  root.left = getTree(nums, left, mid - 1);
  root.right = getTree(nums, mid + 1, right);
  return root;
}
var sortedArrayToBST = function (nums) {
  console.log("right", nums.length - 1);
  return getTree(nums, 0, nums.length - 1);
};
sortedArrayToBST([-10, -3, 0, 5, 9]);
