// https://leetcode.com/problems/length-of-last-word/solutions/3489227/jsts-simple-solution-100-explained-and-commented/

/* 58. Length of Last Word
    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.

    Example 1:
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

    Example 2:
    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

    Example 3:
    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.
*/

function lengthOfLastWord(s: string): number {
  // If empty, return 0
  if (!s) return 0;

  // Initialize
  let lastWordCount = 0;

  // Loop backwards
  for (let i = s.length - 1; i > 0; i--) {
    // Increment if there is a valid character
    if (s[i] !== " ") lastWordCount++;

    // Break out of the loop if already found a character and encountered empty space
    if (lastWordCount && s[i] === " ") break;
  }

  // Return the count
  return lastWordCount;
}

lengthOfLastWord("Hello World");
