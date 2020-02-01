import countBinarySubstrings from '../../easy/leetcode696'

test('subStr(00110011)', () => {
  expect(countBinarySubstrings('00110011')).toBe(6)
})

test('subStr(10101)', () => {
  expect(countBinarySubstrings('10101')).toBe(4)
})

test('subStr(00110)', () => {
  expect(countBinarySubstrings('00110')).toBe(3)
})
