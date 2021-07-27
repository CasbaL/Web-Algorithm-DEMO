// 567. 字符串的排列
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
// 示例 1：
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").

// 示例 2：
// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutation-in-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 暴力循环
var checkInclusion1 = function (s1, s2) {
  let _s1 = s1.split('').sort().join('')
  let i = 0
  while (i <= s2.length - s1.length) {
    let subStr = s2.substr(i, s1.length).split('').sort().join('')
    console.log(subStr)
    if (_s1 === subStr) {
      return true
    }
    i++
  }
  return false
}
// 滑动窗口
var checkInclusion = function (s1, s2) {
  let diff = {}
  // 计算差值
  for (let j = 0; j <= s1.length - 1; j++) {
    const k = s1[j]
    const k2 = s2[j]
    if (diff[k]) {
      diff[k]--
    } else {
      diff[k] = -1
    }

    if (diff[k2]) {
      diff[k2]++
    } else {
      diff[k2] = 1
    }
  }
  Object.entries(diff).map(([key, value]) => {
    if (value === 0) {
      delete diff[key]
    }
  })
  console.log(diff);
  if (Object.keys(diff).length === 0) {
    return true
  }

  let i = -1
  while (++i < s2.length - s1.length) {
    let cur = s2[i]
    let curEnd = s2[i + s1.length]
    if (diff[curEnd]) {
      diff[curEnd]++
    } else {
      diff[curEnd] = 1
    }
    if (!diff[curEnd]) {
      delete diff[curEnd]
    }
    if (diff[cur]) {
      diff[cur]--
    } else {
      diff[cur] = -1
    }
    if (!diff[cur]) {
      delete diff[cur]
    }
    // console.log('while', cur, curEnd, diff)
    if (Object.keys(diff).length === 0) {
      return true
    }
  }
  return false
}

let s1 = 'a'
let s2 = 'ab'
console.time()
console.log(checkInclusion(s1, s2))
console.timeEnd()
