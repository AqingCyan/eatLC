/**
 * @param {number} x
 * @return {number}
 */
export default (x) => {
  const max = 2 ** 31 - 1
  const min = (2 ** 31) * -1
  let s = x
  let tmp = 0
  let result = 0
  while (s !== 0) {
    tmp = s % 10
    s = parseInt(s / 10, 10)
    result = tmp + result * 10
  }
  return (result <= max && result >= min) ? result : 0
}
