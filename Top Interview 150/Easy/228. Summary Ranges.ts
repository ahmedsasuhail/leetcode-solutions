// https://leetcode.com/problems/summary-ranges/solutions/3562003/js-ts-simple-solution-100-explained-and-commented/

/* 228. Summary Ranges
    You are given a sorted unique integer array nums.
    A range [a,b] is the set of all integers from a to b (inclusive).
    Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
    Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b


    Example 1:
    Input: nums = [0,1,2,4,5,7]
    Output: ["0->2","4->5","7"]
    Explanation: The ranges are:
    [0,2] --> "0->2"
    [4,5] --> "4->5"
    [7,7] --> "7"

    Example 2:
    Input: nums = [0,2,3,4,6,8,9]
    Output: ["0","2->4","6","8->9"]
    Explanation: The ranges are:
    [0,0] --> "0"
    [2,4] --> "2->4"
    [6,6] --> "6"
    [8,9] --> "8->9"
*/

function summaryRanges(nums: number[]): string[] {
  // Create an empty array to store ranges
  const ranges: string[] = [];
  // Set the starting number for the current range
  let everyStart: number = nums[0];

  // Iterate over the array, including an extra iteration with undefined to add the last range
  for (let i = 1; i <= nums.length; i++) {
    // If the difference between the current number and the previous number is greater than 1,
    // or if the current number is undefined (i.e., we have reached the end of the array),
    // then we have reached the end of a range of consecutive numbers
    if (nums[i] - nums[i - 1] > 1 || !nums[i]) {
      ranges.push(
        everyStart === nums[i - 1]
          ? // If the range contains only one number, push that number as a string
            `${nums[i - 1]}`
          : // Otherwise, push the range as a string in the format "start->end"
            `${everyStart}->${nums[i - 1]}`
      );
      // Set the starting number for the next range
      everyStart = nums[i];
    }
  }

  // Return the array of ranges
  return ranges;
}

summaryRanges([0, 2, 3, 4, 6, 8, 9]);
