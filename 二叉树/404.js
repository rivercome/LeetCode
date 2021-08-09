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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    //采用后序遍历 递归遍历
    // 1. 确定递归函数参数
    const nodesSum = function(node){
        // 2. 确定终止条件
        if(node===null){
            return 0;
        }
        let leftValue = sumOfLeftLeaves(node.left);
        let rightValue = sumOfLeftLeaves(node.right);
        // 3. 单层递归逻辑
        let midValue = 0;
        if(node.left&&node.left.left===null&&node.left.right===null){
            midValue = node.left.val;
        }
        let sum = midValue + leftValue + rightValue;
        return sum;
    }
    return nodesSum(root);
};
