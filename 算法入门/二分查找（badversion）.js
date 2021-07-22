// https://leetcode-cn.com/problems/first-bad-version/


let i = 1
const n = 2126753390
const badVer = 1702766719
// 二分
const search = function (n) {
  let l = 1
  let r = n
  while (l <= r) {
    // let mid = (l + r) >> 1
    let mid = Math.floor((l+r)/2)
    console.log(i++, mid)
    let beforeMid = mid - 1
    let afterMid = mid + 1
    const isBad = isBadVersion(mid)
    if (isBad) {
      if (isBadVersion(beforeMid)) {
        r = mid - 1
      } else {
        return mid
      }
    } else {
      if (isBadVersion(afterMid)) {
        return afterMid
      } else {
        l = mid + 1
      }
    }
  }
}
// 优化版: 两端缩小 至 l = r 
// const search = function (n) {
//   let l = 1
//   let r = n
//   while (l < r) {
//     // let mid = (l + r) >> 1
//     let mid = Math.floor((l + r) / 2)
//     console.log(i++, mid)
//     let beforeMid = mid - 1
//     let afterMid = mid + 1
//     const isBad = isBadVersion(mid)
//     if (isBad) {
//       r = mid
//     } else {
//       l = mid + 1
//     }
//   }
//   return l
// }
function isBadVersion(v) {
  // console.log(v)
  return v >= badVer
}
// 单个for
// const search = n => {
//   for (let i = 2; i <= n; i++) {
//     const isBad = isBadVersion(i);
//     if(isBad && !isBadVersion(i-1)){
//       return i
//     }
//   }
// }

console.time()
console.log(search(n))
console.timeEnd()