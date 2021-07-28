// 695. 岛屿的最大面积
// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
// 示例 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

// 示例 2:

// [[0,0,0,0,0,0,0,0]]
// 对于上面这个给定的矩阵, 返回 0。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/max-area-of-island
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var maxAreaOfIsland = function (grid) {
  let maxX = grid[0].length - 1
  let maxY = grid.length - 1
  let maxArea = 0
  // let searched = []
  let land = 0
  // let x = 0
  // let y = 0
  // let hasSearch = (x, y) => {
  //   if (searched.find(v => v[0] === x && v[1] === y)) {
  //     return true
  //   } else {
  //     searched.push([x, y])
  //   }
  // }
  let fn = (x, y) => {
    if (x > maxX || y > maxY || x < 0 || y < 0) return 
    // if (hasSearch(x, y)) return
    if (grid[y][x] === 0) return
    // 当前为陆地
    grid[y][x] = 0
    land++
    // console.log('x', x, 'y', y)
    // land.push([x, y])
    fn(x + 1, y)
    fn(x, y + 1)
    fn(x - 1, y)
    fn(x, y - 1)
  }
  let i = 0,
    j = 0
  while (i <= maxY) {
    j = 0
    while (j <= maxX) {
      // console.log('y', i, 'x', j);
      fn(j, i)
      maxArea = Math.max(maxArea, land)
      land = 0
      j++
    }
    i++
  }
  return maxArea
}

let inp = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]
console.time()
console.log(maxAreaOfIsland(inp))
console.timeEnd()
