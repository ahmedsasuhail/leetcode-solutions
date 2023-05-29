// https://leetcode.com/problems/plus-one/solutions/3575534/js-ts-simple-solution-100-explained-and-commented/

/* 66. Plus One
    You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
    Increment the large integer by one and return the resulting array of digits.

    Example 1:
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].

    Example 2:
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
    Incrementing by one gives 4321 + 1 = 4322.
    Thus, the result should be [4,3,2,2].

    Example 3:
    Input: digits = [9]
    Output: [1,0]
    Explanation: The array represents the integer 9.
    Incrementing by one gives 9 + 1 = 10.
    Thus, the result should be [1,0].
*/

const plusOne = function (digits) {
  const length = digits.length;

  // If the array is empty, return [1]
  if (!length) return [1];

  // Start from the least significant digit and work our way up
  for (let i = length - 1; i >= 0; i--) {
    // If the current digit is less than 9, we can simply increment it by 1 and return the array
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    // If the current digit is 9, we set it to 0 and continue to the next digit
    digits[i] = 0;
  }

  // If we reach this point, it means all digits were 9, so we need to add an additional digit to the array
  const newArr = new Array(length + 1).fill(0);
  newArr[0] = 1;
  return newArr;
};

plusOne([4, 3, 2, 1]);
