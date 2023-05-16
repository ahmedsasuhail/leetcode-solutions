// https://leetcode.com/problems/two-sum/solutions/3531633/js-ts-simple-solution-100-explained-and-commented/

/* 1. Two Sum
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

const twoSum = function (nums, target) {
  // If the array is empty, return undefined
  if (!nums.length) return undefined;

  // Create a counter object to keep track of numbers that have been seen
  const counter = {};

  // Loop through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference between the target and the current number
    const difference = target - nums[i];

    // If the difference is in the counter object and it's not the current index,
    // return the indices of the two numbers that add up to the target
    if (counter[difference] !== undefined && counter[difference] !== i) {
      return [counter[difference], i];
    } else {
      // Otherwise, add the current number and its index to the counter object
      counter[nums[i]] = i;
    }
  }

  // If no two numbers add up to the target, return undefined
  return undefined;
};

twoSum([2, 10, 8, 7, 1], 9);
