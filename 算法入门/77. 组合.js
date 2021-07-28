// 77. 组合
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。
// 12345 -> 2
// 12/13/14/15
// 23/24/25
// 34/35
// 45

// 12345 -> 3
// 123/124/125
// 134/135/
// 145

// 234/235
// 245

// 345
// 示例 1：
// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combinations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // todo...
}

let n = 4
let k = 2
console.time()
console.log(combine(n, k))
console.timeEnd()
