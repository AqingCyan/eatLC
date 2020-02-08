import reverse from '../../easy/leetcode007'

test('reverse(123)', () => {
  expect(reverse(123)).toEqual(321)
})

test('reverse(-123)', () => {
  expect(reverse(-123)).toEqual(-321)
})

test('reverse(120)', () => {
  expect(reverse(120)).toEqual(21)
})

test('reverse(1000000009)', () => {
  expect(reverse(1000000009)).toEqual(0)
})
