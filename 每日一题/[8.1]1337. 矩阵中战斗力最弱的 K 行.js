// 1337. 矩阵中战斗力最弱的 K 行
// 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。

// 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。

// 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。

// 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。

// 示例 1：

// 输入：mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// 输出：[2,0,3]
// 解释：
// 每行中的军人数目：
// 行 0 -> 2
// 行 1 -> 4
// 行 2 -> 1
// 行 3 -> 2
// 行 4 -> 5
// 从最弱到最强对这些行排序后得到 [2,0,3,1,4]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let m = mat.length
  let n = mat[0].length
  let week = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (week.includes(j)) continue
      const ele = mat[j][i];
      if (ele === 0) {
        week.push(j)
      }
      if (week.length === k) return week
    }
  }
  if (week.length < k) {
    for (let j = 0; j < m; j++) {
      if (week.includes(j)) continue
      week.push(j)
      if (week.length === k) return week
    }
  }
}

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
]
const k = 2

console.time()
console.log(kWeakestRows(mat, k))
console.timeEnd()
