/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default (nums, target) => {
  const lookup = {}
  for (let i = 0; i < nums.length; i++) {
    if ((target - nums[i]) in lookup) {
      return [lookup[target - nums[i]], i]
    }
    lookup[nums[i]] = i
  }
}
