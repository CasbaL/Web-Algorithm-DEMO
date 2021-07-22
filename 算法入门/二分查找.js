// https://leetcode-cn.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, padIdx = 0) {
  let midIdx = Math.floor(nums.length / 2)
  console.log(midIdx, nums, padIdx);
  if (midIdx.length === 0) return -1
  if (nums.length <= 1) {
    if (nums[0] === target) {
      return padIdx + midIdx
    } else {
      return -1
    }
  }
  if (nums[midIdx] === target) return midIdx + padIdx
  // left
  if (nums[midIdx] > target) {
    return search(nums.slice(0, midIdx), target, padIdx)
  }
  // right
  if (nums[midIdx] < target) {
    return search(nums.slice(midIdx + 1), target, midIdx + padIdx + 1)
  }
}

const nums = [-1, 0, 3, 5, 9, 12]
const target = 3

console.log(search(nums, target))

