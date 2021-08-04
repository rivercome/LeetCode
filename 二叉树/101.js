var isSymmetric1 = function(root) {
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if(root===null){
        return true;
    }
    let queue=[];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length){
        let leftNode=queue.shift();//左节点
        let rightNode=queue.shift();//右节点
        if(leftNode===null&&rightNode===null){
            continue;
        }
        if(leftNode===null||rightNode===null||leftNode.val!==rightNode.val){
            return false;
        }
        queue.push(leftNode.left);//左节点左孩子入队
        queue.push(rightNode.right);//右节点右孩子入队
        queue.push(leftNode.right);//左节点右孩子入队
        queue.push(rightNode.left);//右节点左孩子入队
    }
    return true;
  };
  
// 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric2 = function(root) {
    var q = [root, root], n, m
   while (q.length) {
       n = q.shift(), m = q.shift()
       if (!m && !n) continue
       if (!m || !n || m.val !== n.val) return false
       q.push(n.left, m.right, n.right, m.left)
   }
   return true
};


