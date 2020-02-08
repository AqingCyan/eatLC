import twoSum from '../../easy/leetcode001'

test('twoSum([2,7,11,15], 9)', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('twoSum([2,7,11,15], 18)', () => {
  expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2])
})

test('twoSum([2,7,11,15], 30)', () => {
  expect(twoSum([2, 7, 11, 15], 30)).toEqual(undefined)
})
