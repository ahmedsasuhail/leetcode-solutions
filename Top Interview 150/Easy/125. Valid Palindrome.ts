// https://leetcode.com/problems/valid-palindrome/solutions/3513982/jsts-simple-solution-100-explained-and-commented/

/* 125. Valid Palindrome
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isPalindrome(s: string): boolean {
  // If the input string is falsy, return false
  if (!s) return false;

  // Remove special characters and convert to lowercase
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Initialize two pointers, one at the start of the string and one at the end
  let start = 0;
  let end = s.length - 1;

  // Loop until the two pointers meet in the middle
  while (start < end) {
    // If the characters at the start and end of the string don't match, return false
    if (s[start] !== s[end]) {
      return false;
    }
    // Move the pointers towards each other
    start++;
    end--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

isPalindrome("A man, a plan, a canal: Panama");
