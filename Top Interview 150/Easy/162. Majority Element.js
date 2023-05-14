// https://leetcode.com/problems/majority-element/solutions/3524640/js-ts-simple-solution-100-explained-and-commented/

/* 162. Majority Element
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    Example 1:
    Input: nums = [3,2,3]
    Output: 3

    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
*/

const majorityElement = function (nums) {
  // Initialize major and count variables
  let major = nums[0],
    count = 1;

  // Loop through all elements in the nums array
  for (let i = 1; i < nums.length; i++) {
    // If count is 0, update major to current element and set count to 1
    if (count === 0) {
      count++;
      major = nums[i];
    }
    // If current element is equal to major, increment count
    else if (major === nums[i]) {
      count++;
    }
    // Otherwise, decrement count as current element is not part of potential majority element
    else {
      count--;
    }
  }

  // Return the potential majority element
  return major;
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
