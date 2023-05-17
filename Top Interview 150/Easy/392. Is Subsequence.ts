// https://leetcode.com/problems/is-subsequence/solutions/3517750/jsts-simple-solution-100-explained-and-commented/

/* 392. Is Subsequence
    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

    Example 1:
    Input: s = "abc", t = "ahbgdc"
    Output: true

    Example 2:
    Input: s = "axc", t = "ahbgdc"
    Output: false
*/

function isSubsequence(s: string, t: string): boolean {
  // If the subsequence string s is longer than the target string t, s cannot be a subsequence of t
  if (s.length > t.length) return false;

  // If s and t are equal, s is a subsequence of t
  if (s === t) return true;

  // Initialize a pointer sPointer to keep track of the current character in s
  let sPointer = 0;

  // Loop through the characters in t
  for (let tPointer = 0; tPointer < t.length; tPointer++) {
    // If the current character in s matches the current character in t, move to the next character in s
    if (s[sPointer] === t[tPointer]) sPointer++;
    // If we have matched all characters in s, s is a subsequence of t
    if (sPointer === s.length) return true;
  }

  // If we reach the end of t without matching all characters in s, s is not a subsequence of t
  return false;
}

isSubsequence("abc", "ahbgdc");
