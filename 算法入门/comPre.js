const strs = ['123ab321sde12', '123ab321e12e', '123ao321ce12tr']

let minLen = strs.reduce((a, b) => (b.length < a ? b.length : a), strs[0].length)
let maxSub = ''
for (let i = 0; i <= minLen; i++) {
  const pre = strs[0].substr(0, i)
  let reg = new RegExp(`^${pre}`)
  if (strs.every(str => reg.test(str))) {
    if (maxSub.length < pre.length) {
      maxSub = pre
    }
  }
}