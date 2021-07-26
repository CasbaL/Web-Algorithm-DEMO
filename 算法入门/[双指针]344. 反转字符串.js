// 344. 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：

// 输入：["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]
// https://leetcode-cn.com/problems/reverse-string/

var reverseString = function (s) {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    let tem = s[l]
    s[l] = s[r]
    s[r] = tem
    l++
    r--
  }
}

let input = ['H', 'a', 'n', 'n', 'a', 'h']
console.log(input)
console.time()
reverseString(input)
console.timeEnd()
console.log(input)
console.log('--------344----------');


// 557. 反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

//  

// 示例：

// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reverseString = str => {
    return Array.prototype.reverse.call(str)
  }
  return s.split(' ').map(str => {
    let strArr = str.split('')
    reverseString(strArr)
    return strArr.join('')
  }).join(' ')
};

let input2 = "Let's take LeetCode contest"
console.log(input2)
console.time()
console.log(reverseWords(input2))
console.timeEnd()
console.log('--------557----------')