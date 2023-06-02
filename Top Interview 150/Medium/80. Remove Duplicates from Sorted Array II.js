// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/3589635/js-ts-simple-solution-100-explained-and-commented/

/* 80. Remove Duplicates from Sorted Array II
    Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
    Return k after placing the final result in the first k slots of nums.
    Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:
    Input: nums = [1,1,1,2,2,3]
    Output: 5, nums = [1,1,2,2,3,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

    Example 2:
    Input: nums = [0,0,1,1,1,1,2,3,3]
    Output: 7, nums = [0,0,1,1,2,3,3,_,_]
    Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// Solution #1: Works for at most any number if we change the comparison value in the if block.
const removeDuplicatesOne = function (nums) {
  // If the input array is empty, return 0
  if (!nums.length) return 0;

  // Initialize a pointer k to keep track of the unique elements
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // If we have not yet seen this element (k < 2), or if the current element is greater than
    // the second-to-last unique element (nums[k-2]), then we have a new unique element
    // Comparison value = 2
    if (k < 2 || nums[i] > nums[k - 2]) {
      // Assign the current element to the new position indicated by k
      nums[k] = nums[i];
      // Increment k to move the pointer to the next position
      k++;
    }
  }

  // Return the number of unique elements, which is k
  return k;
};

removeDuplicatesOne([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// Solution #2: Works only for at most twice
const removeDuplicatesTwo = function (nums) {
  // If the input array is empty, return 0
  if (!nums.length) return 0;

  // Initialize a pointer k to keep track of the unique elements
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    // If the current element is not equal to the previous unique element (nums[k]), or
    // if the current element is equal to the previous unique element (nums[k]) but the previous
    // two elements are not equal (nums[k] !== nums[k - 1]), then we have a new unique element
    if (
      nums[i] !== nums[k] ||
      (nums[i] === nums[k] && nums[k] !== nums[k - 1])
    ) {
      // Increment k to move the pointer to the next position
      k++;
      // Assign the current element to the new position indicated by k
      nums[k] = nums[i];
    }
  }

  // Return the number of unique elements, which is k+1
  return k + 1;
};

removeDuplicatesTwo([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
