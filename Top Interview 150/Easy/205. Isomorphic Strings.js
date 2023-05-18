// https://leetcode.com/problems/isomorphic-strings/solutions/3539893/jsts-simple-solution-100-explained-and-commented/

/* 205. Isomorphic Strings
    Given two strings s and t, determine if they are isomorphic.
    Two strings s and t are isomorphic if the characters in s can be replaced to get t.
    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

    Example 1:
    Input: s = "egg", t = "add"
    Output: true

    Example 2:
    Input: s = "foo", t = "bar"
    Output: false

    Example 3:
    Input: s = "paper", t = "title"
    Output: true
*/

const isIsomorphic = function (s, t) {
  // Check if the lengths of the strings are equal, if not, they cannot be isomorphic
  if (s.length !== t.length) return false;

  // Create two empty hash maps to store character mappings
  const mapper1 = {};
  const mapper2 = {};

  // Iterate through each character in the strings
  for (let idx = 0; idx < s.length; idx++) {
    // If the current character has not been mapped, add it to both hash maps
    if (!mapper1[s[idx]] && !mapper2[t[idx]]) {
      mapper1[s[idx]] = t[idx];
      mapper2[t[idx]] = s[idx];
    }
    // If the current character has been mapped, check if the mapping is consistent with previous mappings
    else if (mapper1[s[idx]] !== t[idx] || mapper2[t[idx]] !== s[idx]) {
      // If the mapping is inconsistent, the strings are not isomorphic, return false
      return false;
    }
  }

  // If the function has iterated through both strings without finding any inconsistencies, the strings are isomorphic, return true
  return true;
};

isIsomorphic("paper", "title");
