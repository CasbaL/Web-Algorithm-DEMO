// 581. 最短无序连续子数组

// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。
//

// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
// butaixing
// var findUnsortedSubarray = function (nums) {
//   // 数组长度小于三的话就没有符合题意的子数组
//   if (nums.length < 2) return 0
//   // 用双指针从两端计算中间的子数组中的最小值和最大值的位置；
//   let l = 0,
//     r = nums.length - 1,
//     lock_l = null,
//     lock_r = null
//   while (l < r) {
//     console.log(l, r, lock_l, lock_r)
//     if (lock_l === null) {
//       // console.log('min', Math.min(...nums.slice(l, r)) === nums[l])
//       if (Math.min(...nums.slice(l, r + 1)) === nums[l]) {
//         l++
//       } else {
//         lock_l = l
//       }
//     }
//     if (lock_r === null) {
//       if (Math.max(...nums.slice(l, r + 1)) === nums[r]) {
//         r--
//       } else {
//         lock_r = r
//       }
//     }
//     if (lock_l !== null && lock_r) {
//       // console.log('lock', lock_l, lock_r)
//       return lock_r - lock_l + 1
//     }
//   }
//   return 0
// }
//  最优解：
var findUnsortedSubarray = function (nums) {
  let len = nums.length
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE
  let l = -1
  let r = -1
  for (let i = 0; i < len; i++) {
    if (max > nums[i]) {
      r = i
    } else {
      max = nums[i]
    }
    if (min < nums[len - i - 1]) {
      l = len - i - 1
    } else {
      min = nums[len - i - 1]
    }
  }
  return r === -1 ? 0 : r - l + 1
}

let inp = [1, 2, 5, 3, 4]
console.time()
console.log(findUnsortedSubarray(inp))
console.timeEnd()
