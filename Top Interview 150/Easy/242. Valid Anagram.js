// https://leetcode.com/problems/valid-anagram/solutions/3558712/js-ts-simple-solution-100-explained-and-commented/

/* 242. Valid Anagram
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/

const isAnagram = function (s, t) {
  // If the strings are of different lengths, they cannot be anagrams, so return false
  if (s.length !== t.length) return false;

  // Create a counter object to count the frequency of each character in the first string s
  const counter = {};

  // Iterate through each character in s and increment the counter object for each character
  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = (counter[s[i]] || 0) + 1;
  }

  // Iterate through each character in t and decrement the counter object for each character
  // If the counter value becomes negative or undefined, return false, since this means that t
  // contains a character that is not present in s, or t contains more instances of a character
  // than s, respectively
  for (let j = 0; j < t.length; j++) {
    if (counter[t[j]] >= 0) counter[t[j]]--;
    if (counter[t[j]] < 0 || counter[t[j]] === undefined) return false;
  }

  // If the function has not returned false by this point, then s and t are anagrams of each other, so return true
  return true;
};

isAnagram("anagram", "nagaram");
