// https://leetcode.com/problems/length-of-last-word/solutions/3489227/jsts-simple-solution-100-explained-and-commented/

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