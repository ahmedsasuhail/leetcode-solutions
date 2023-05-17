// https://leetcode.com/problems/ransom-note/solutions/3536244/js-ts-simple-solution-100-explained-and-commented/

/* 383. Ransom Note
    Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
    Each letter in magazine can only be used once in ransomNote.

    Example 1:
    Input: ransomNote = "a", magazine = "b"
    Output: false

    Example 2:
    Input: ransomNote = "aa", magazine = "ab"
    Output: false

    Example 3:
    Input: ransomNote = "aa", magazine = "aab"
    Output: true
*/

const canConstruct = function (ransomNote, magazine) {
  // If the length of the ransom note is greater than the length of the magazine, return false
  if (ransomNote.length > magazine.length) return false;

  // Counter object is initialized to keep track of the frequency of each character in the magazine
  const counter = {};

  // Loop through each character in the magazine string and update the counter object accordingly
  for (let i = 0; i < magazine.length; i++) {
    counter[magazine[i]] = (counter[magazine[i]] || 0) + 1;
  }

  // Loop through each character in the ransom note string and check if it can be constructed from the characters in the magazine
  for (let j = 0; j < ransomNote.length; j++) {
    // If the character is not present in the magazine, return false as the ransom note cannot be constructed
    if (!counter[ransomNote[j]]) return false;
    // If the character is present, decrement the frequency count in the counter object
    else counter[ransomNote[j]] -= 1;
  }

  // If the ransom note can be constructed from the characters in the magazine, return true
  return true;
};

canConstruct("aa", "aab");
