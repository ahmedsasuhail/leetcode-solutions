// https://leetcode.com/discuss/topic/3566224/jsts-simple-solution-100-explained-and-commented/

/* 35. Search Insert Position
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

    Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

    Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4
*/

const searchInsert = function (nums, target) {
  // If the array is empty, return 0
  if (!nums.length) return 0;

  // Define variables to keep track of the start and end indices of the array
  let start = 0,
    end = nums.length - 1,
    middle;

  // Use a while loop to perform binary search for the target value
  while (start <= end) {
    // Calculate the middle index of the array using the formula (start + end) / 2, rounded down using Math.floor()
    middle = Math.floor((start + end) / 2);

    // If the value at the middle index is less than the target value, update the start variable to middle + 1
    // This eliminates the left half of the array from consideration
    if (nums[middle] < target) start = middle + 1;
    // If the value at the middle index is greater than the target value, update the end variable to middle - 1
    // This eliminates the right half of the array from consideration
    else if (nums[middle] > target) end = middle - 1;
    // If the value at the middle index is equal to the target value, return the middle index
    else return middle;
  }

  // If the target value is not found in the array, return the start variable
  // This represents the index where the target value should be inserted to maintain the sorted order of the array
  return start;
};

searchInsert([1, 3, 5, 6]);
