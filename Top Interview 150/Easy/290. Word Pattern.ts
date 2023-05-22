// https://leetcode.com/problems/word-pattern/solutions/3552375/js-ts-simple-solution-100-explained-and-commented/

/* 290. Word Pattern
    Given a pattern and a string s, find if s follows the same pattern.
    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

    Example 1:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true

    Example 2:
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false

    Example 3:
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false
*/

const wordPattern = function (pattern: string, str: string): boolean {
  // If either the pattern or the string of words is empty, return false
  if (!pattern || !str) return false;

  // Split the string of words into an array of words and store it in s
  const p = pattern;
  const s = str.split(" ");

  // If the length of the pattern does not match the length of the array of words, return false
  if (pattern.length !== s.length) return false;

  // Create an empty object to store key-value pairs of the pattern and corresponding words
  const mapper: Record<string, number> = {};

  // Loop through the array of words
  for (let i = 0; i < s.length; i++) {
    // If the current word and pattern character do not match their previous indices in the mapper object, return false
    if (mapper["_" + s[i]] !== mapper[p[i]]) {
      return false;
    }

    // Add or update the current word and pattern character in the mapper objects with their current index
    mapper["_" + s[i]] = i;
    mapper[p[i]] = i;
  }

  // If all pattern characters match their corresponding words, return true
  return true;
};

wordPattern("abba", "dog cat cat dog");
