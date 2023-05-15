// https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3517729/js-ts-simple-solution-100-explained-and-commented/

/* 26. Remove Duplicates from Sorted Array
    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
    Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.

    Example 1:
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

    Example 2:
    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
*/

const removeDuplicates = function (nums) {
  // If the input array is empty or undefined, there are no duplicates to remove.
  if (!nums || nums.length === 0) return 0;

  // Initialize a pointer k to keep track of the last unique element.
  let k = 0;

  // Loop through the array starting from the second element.
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the last unique element,
    // increment k and copy the current element to the kth position.
    if (nums[k] !== nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }

  // The length of the subarray nums[0..k] is k+1, which is the number of unique elements.
  return k + 1;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
