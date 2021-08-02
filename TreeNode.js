class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
function createTree(params = []) {
  let head = new TreeNode(params.splice(0, 1))
  let lv = [head]
  let i = 1
  while (params.length) {
    const lv_nodes = params.splice(0, 2 ** i).map(v => new TreeNode(v))
    const lv_copy = lv_nodes.slice()
    for (let j = 0; j < lv.length; j++) {
      const node = lv[j]
      node.left = lv_nodes.shift()
      node.right = lv_nodes.shift()
    }
    lv = lv_copy
    i++
  }
  return head
}

// let inp = [3, 9, 20, null, null, 15, 7]
// console.log(createTree(inp))

// export default TreeNode
module.exports = createTree
