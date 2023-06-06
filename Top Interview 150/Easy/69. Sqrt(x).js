// https://leetcode.com/problems/sqrtx/solutions/3606375/js-ts-simple-solution-100-explained-and-commented/

/* 69. Sqrt(x)
    Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
    You must not use any built-in exponent function or operator.
    For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

    Example 1:
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.

    Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

function mySqrt(x) {
  // Initialize the left and right variables for binary search
  let left = 0,
    right = x;

  // Binary search to find the square root of x
  while (left <= right) {
    // Calculate the midpoint between left and right
    const mid = Math.floor((left + right) / 2);

    // Check if the square of the midpoint is less than or equal to x
    if (mid * mid <= x) {
      // If the square of the midpoint is less than or equal to x, we update the left variable to move towards the right half of the search space
      left = mid + 1;
    } else {
      // If the square of the midpoint is greater than x, we update the right variable to move towards the left half of the search space
      right = mid - 1;
    }
  }

  // Return the value of right, which is the integer square root of x rounded down to the nearest integer
  return right;
}

mySqrt(8);
