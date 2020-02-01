/**
 * @param {string} str
 * @return {string}
 */
export default (str) => {
  const arr = str.split(' ')
  const result = arr.map((item) => item.split('').reverse().join(''))
  return result.join(' ')
}
