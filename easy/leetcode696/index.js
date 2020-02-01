/**
 * @param {string} str
 * @return {number}
 */
export default (str) => {
  const r = []
  const match = (s) => {
    const j = s.match(/^(0+|1+)/)[0]
    const o = (j[0] ^ 1).toString().repeat(j.length)
    const reg = new RegExp(`^(${j}${o})`)
    if (reg.test(s)) {
      return RegExp.$1
    }
    return false
  }

  for (let i = 0; i < str.length - 1; i++) {
    const sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r.length
}
