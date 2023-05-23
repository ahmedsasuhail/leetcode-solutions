// https://leetcode.com/problems/contains-duplicate-ii/solutions/3554038/js-ts-simple-solution-100-explained-and-commented/

/* 219. Contains Duplicate II
    Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

    Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

    Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false
*/

const containsNearbyDuplicate = function (nums, k) {
  // Create a counter object to keep track of the most recent index where each value appears
  const counter = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If we've seen this value before and the difference between its current index and
    // the most recent index is less than or equal to k, we have a valid duplicate
    if (counter[nums[i]] !== undefined && Math.abs(counter[nums[i]] - i) <= k)
      return true;

    // Update the most recent index for this value in the counter object
    counter[nums[i]] = i;
  }

  // If we haven't found any duplicates within k indices, return false
  return false;
};

containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3);
