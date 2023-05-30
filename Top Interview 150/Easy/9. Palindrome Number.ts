// https://leetcode.com/problems/palindrome-number/solutions/3579097/js-ts-simple-solution-100-explained-and-commented/

/* 9. Palindrome Number
    Given an integer x, return true if x is a palindrome, and false otherwise.

    Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

    Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

    Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

function isPalindrome(x: number): boolean {
  // Store the original input number in a separate variable for comparison later.
  const originalNum: number = x;
  // Initialize a variable to store the reverse of the input number.
  let reverse: number = 0;

  // Repeatedly extract the last digit from the input number and add it to the reverse variable.
  while (x > 0) {
    // Extract the last digit of the input number using the modulus operator.
    const lastDigit: number = x % 10;
    // Multiply the reverse variable by 10 to shift its digits to the left, and then add the last digit.
    // This effectively reverses the order of the digits in the input number.
    reverse = reverse * 10 + lastDigit;
    // Remove the last digit from the input number by integer dividing it by 10 and rounding down.
    x = Math.floor(x / 10);
  }

  // Compare the reverse variable with the original input number to determine if it is a palindrome.
  return reverse === originalNum;
}

isPalindrome(121);
