// 171. Excel 表列序号
// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。

// 例如，

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...

// 示例 1:

// 输入: columnTitle = "A"
// 输出: 1
// 示例 2:

// 输入: columnTitle = "AB"
// 输出: 28
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/excel-sheet-column-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  // 多余了。。。
  // let hash = Array(26)
  //   .fill(0)
  //   .map((v, i) => v + i + 'A'.charCodeAt())
  // hash.unshift('')
  let i = columnTitle.length
  let ans = 0
  while (i > 0) {
    let keyCode = columnTitle.substr(-i, 1).charCodeAt()
    let mi = keyCode - 64
    ans += 26 ** (i - 1) * mi
    i--
  }
  return ans
}

let inp = 'FXSHRXW'
console.time()
console.log(titleToNumber(inp))
console.timeEnd()
