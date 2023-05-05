// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3490190/jsts-simple-solution-brute-force-100-explained-and-commented/

/* 28. Find the Index of the First Occurrence in a String
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

    Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function strStr(haystack: string, needle: string): number {
  // If haystack is smaller than needle, return -1
  if (haystack.length < needle.length) return -1;

  // Loop through haystack string
  for (let i = 0; i < haystack.length; i++) {
    // If haystack character matched with first character of needle
    if (haystack[i] === needle[0]) {
      // Loop through needle string
      for (let j = 0; j < needle.length; j++) {
        // If needle and haystack characters don't match, break out of the loop
        if (needle[j] !== haystack[i + j]) break;
        // If it gets through till the last item, return the index of first occurence
        if (j === needle.length - 1) return i;
      }
    }
  }

  // If no occurence is found, return -1
  return -1;
}
