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
  // If the input string is empty, return 0
  if (!s) return 0;

  // Initialize a counter to keep track of the length of the last word
  let lastWordCount = 0;

  // Loop backwards through the string
  for (let i = s.length - 1; i >= 0; i--) {
    // If the current character is not a space, increment the counter
    if (s[i] !== " ") {
      lastWordCount++;
    }
    // If the counter is greater than 0 (meaning we have found at least one non-space character)
    // and we encounter a space, break out of the loop
    if (lastWordCount && s[i] === " ") {
      break;
    }
  }

  // Return the count of the last word
  return lastWordCount;
}

lengthOfLastWord("Hello World");
