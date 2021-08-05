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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res=[];
    //1. 确定递归函数 函数参数
    const getTree= (node,curPath) => {
     //2. 确定终止条件，到叶子节点就终止
     console.log("node", node)
        if(node.left===null&&node.right===null){
            curPath+=node.val;
            res.push(curPath);
            return ;
        }
        //3. 确定单层递归逻辑
        curPath+=node.val+'->';
        node.left&&getTree(node.left,curPath);
        node.right&&getTree(node.right,curPath);
    }
    getTree(root,'');
    return res;
 };
 
binaryTreePaths([1,2,3,5])