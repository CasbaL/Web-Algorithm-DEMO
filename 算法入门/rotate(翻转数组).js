// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 进阶：

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 单循环，超出时间限制
  // let i = 1
  // while (i <= k % nums.length) {
  //     nums.unshift(nums.pop())
  //     i++
  // }

  // unshift+splice 数组的剪切拼接
  // k = k % nums.length
  // nums.unshift(...nums.splice(nums.length - k, k))

  // 环状替换
  // len 5 x 2
  // 12345
  // 01234
  // 45123
  let len = nums.length
  k = k % len
  for (let i = 0; i <= k; i++) {
    let tem = nums[i+k]
    nums[i] = nums[nums.length - k]
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
rotate(nums, k)
console.log(nums)
