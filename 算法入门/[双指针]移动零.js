// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/move-zeroes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let len = nums.length
  let i  = 0
  while (i < len) {
    console.log('循环次数', i);
    if (nums[i] === 0 ) {
      nums.splice(i, 1)
      nums.push(0)
      len--
    } else {
      i++
    }
  }
}

// 双指针
var moveZeroes1 = function (nums) {
  let fast = 0
  let slow = 0
  for (let i = 0; i < nums.length; i++) {
    console.log('循环次数', i)
    if (nums[fast] != 0) {
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
}


let input = [1, 0, 1, 0, 3, 12]

console.time();
moveZeroes(input)
// moveZeroes1(input)
console.timeEnd()
console.log(input)
