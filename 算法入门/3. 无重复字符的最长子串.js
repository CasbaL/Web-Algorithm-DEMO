// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
//   输入: s = "abcabcbb"
//   输出: 3
//   解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length
  let i = 0
  let maxLen = 0
  let str = ''
  while (i < len) {
    let subIdx = str.indexOf(s[i])
    if (subIdx !== -1) {
      str = str.substring(subIdx + 1)
    }
    str += s[i]
    maxLen = Math.max(str.length, maxLen)
    console.log(str);
    i++
  }
  return maxLen
}

let input = 'abcabcbb'

console.time()
console.log(lengthOfLongestSubstring(input))
console.timeEnd()
