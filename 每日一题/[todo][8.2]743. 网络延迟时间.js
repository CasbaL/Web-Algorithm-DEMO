// 743. 网络延迟时间
// 有 n 个网络节点，标记为 1 到 n。

// 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

// 输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// 输出：2

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/network-delay-time
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var networkDelayTime = function (times, n, k) {
//   let idx = times.findIndex(v => v[0] === k)
//   if (idx === -1) return -1
//   let que = []

//   for (let j = 0; j < times.length; j++) {
//     const [u2] = times[j]
//     if (u2 === vi) {
//       que.push(times.splice(j,1))
//     }
//   }
//   let ans = []
//   while (que.length) {
//     let que_len = que.length
//     let wi = 0
//     let [u1] = que[0]
//     for (let i = 0; i < que_len; i++) {
//       const [ui, vi, wi] = que[i]
//       for (let j = 0; j < times.length; j++) {
//         const [u2] = times[j]
//         if (u2 === vi) {
//           que.push(times.splice(j, 1))
//         }
//       }
//       w1 = Math.min(w1, wi)
//     }
//     if (!ans.includes(ui)) ans.push(ui)
//     // if (ans[ans.length - 1]) {
//     //   ans[ans.l]
//     // }
//   }
//   if (ans.length !== n) return -1
// }

var networkDelayTime = function (times, n, k) {
  let idx = times.findIndex(v => v[0] === k)
  if (idx === -1) return -1
  let starts = []
  let timeMap = {}
  for (let j = 0; j < times.length; j++) {
    const [ui] = times[j]
    if (ui === k) {
      starts.push(...times.splice(j, 1))
      j--
    }
    timeMap[ui] = 0
  }
  console.log('start', starts)
  let dfs = nodes => {
    nodes.map(node => {
      const [u1, v1, w1] = node
      if (v1 === k) return
      console.log('map,', nodes)
      let nexts = []
      for (let j = 0; j < times.length; j++) {
        const [ui] = times[j]
        if (ui === v1) {
          nexts.push(...times.splice(j, 1))
        }
      }
      console.log('v1', v1, w1, timeMap[u1])
      if (timeMap[v1]) {
        timeMap[v1] = Math.min(timeMap[v1], timeMap[u1] + w1)
      } else {
        timeMap[v1] = timeMap[u1] + w1
      }
      console.log('next:', nexts)
      dfs(nexts)
    })
  }
  dfs(starts)
  let keys = Object.keys(timeMap)
  console.log(keys)
  if (keys.length !== n) return -1
  return Object.values(timeMap).reduce((pre, cur) => Math.max(pre, cur), 0)
}

let times = [
    [1, 2, 1],
    [2, 3, 2],
    [1, 3, 1],
  ],
  n = 3,
  k = 2

console.time()
console.log(networkDelayTime(times, n, k))
console.timeEnd()
