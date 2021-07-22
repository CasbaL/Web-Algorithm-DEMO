const strs = ['123ab321sde12', '123ab321e12e', '123ao321ce12tr']

function comPre(strs) {
  // 得出最短字符串数组
  let [maxStrs] = getMinlStr(strs)

  let comMaxSubStr = []
  // 遍历最短字符串数组
  maxStrs.forEach(str => {
    // 获得公共的子字符串数组
    let coms = _subStr(str).filter(_sub => strs.every(_str => _str.includes(_sub)))
    // 得出最长的子字符串数组
    let [maxComSub] = getMaxlStr([...coms, ...comMaxSubStr])
    comMaxSubStr = maxComSub
  })

  return comMaxSubStr
}

console.log(comPre(strs))

// 计算字符串的所有子字符串
function _subStr(str) {
  let len = str.length
  let subLen = str.length
  let subStrs = []

  while (subLen > 0) {
    let idx = len - subLen
    console.log('idx:', idx, 'sublen:', subLen)
    while (idx >= 0) {
      console.log(str, idx, subLen, str.substr(idx, subLen))
      subStrs.push(str.substr(idx, subLen))
      idx--
    }
    subLen--
  }

  return subStrs
}

function getMinlStr(strs) {
  return strs.reduce(
    (pre, cur) => {
      const [_strs, _minLen] = pre
      if (cur.length > _minLen) return pre
      if (cur.length === _minLen) return [[..._strs, cur], _minLen]
      if (cur.length < _minLen) return [[cur], cur.length]
    },
    [[strs[0]], strs[0].length],
  )
}

function getMaxlStr(strs) {
  return strs.reduce(
    (pre, cur) => {
      const [_strs, _maxLen] = pre
      if (cur.length < _maxLen) return pre
      if (cur.length === _maxLen) return [[...new Set([..._strs, cur])], _maxLen]
      if (cur.length > _maxLen) return [[cur], cur.length]
    },
    [[strs[0]], strs[0].length],
  )
}

// console.log(subStr('12345'))
