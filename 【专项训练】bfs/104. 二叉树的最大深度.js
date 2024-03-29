// 104. 二叉树的最大深度
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const createTree = require('../TreeNode')
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  const que = [root]
  let i = 0
  while (que.length) {
    let q_len = que.length
    for (let i = 0; i < q_len; i++) {
      let head = que.shift()
      if (head.left) {
        que.push(head.left)
      }
      if (head.right) {
        que.push(head.right)
      }
    }
    i++
  }
  return i
}

let tree = createTree([
  3,
  9,20,
  null,null,15,7,
  null,null,null,null,2,null,null,9,
])
console.log(tree)
console.time()
console.log(maxDepth(tree))
console.timeEnd()
