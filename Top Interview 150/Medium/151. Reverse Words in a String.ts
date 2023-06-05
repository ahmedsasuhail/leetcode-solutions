// https://leetcode.com/problems/reverse-words-in-a-string/solutions/3601899/js-ts-2-simple-solutions-100-explained-and-commented/

/* 151. Reverse Words in a String
    Given an input string s, reverse the order of the words.
    A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
    Return a string of the words in reverse order concatenated by a single space.
    Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

    Example 1:
    Input: s = "the sky is blue"
    Output: "blue is sky the"

    Example 2:
    Input: s = "  hello world  "
    Output: "world hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

    Example 3:
    Input: s = "a good   example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

// Solution #1: Without using built-in methods and utilizing two pointers approach
function reverseWordsOne(s: string): string {
  // Step 1: Construct an array of words by removing spaces
  let sArr: string[] = constructWordsArr(s);

  // Step 2: Join the constructed array with spaces
  s = joinArrReverse(sArr);

  // Return the final reversed string
  return s;
}

function constructWordsArr(str: string): string[] {
  let word: string = "",
    idx: number = 0;
  const strArr: string[] = [];

  // Iterate over each character in the input string `str`
  while (idx < str.length) {
    if (str[idx] === " ") {
      // If the current character is a space, add the current word to the array of words `strArr` and reset the current word
      if (word) {
        strArr.push(word);
        word = "";
      }

      idx++;
      continue;
    }

    // If the current character is not a space, add it to the current word
    word += str[idx];
    idx++;
  }

  // If there is a word left over at the end of the input string, add it to the array of words `strArr`
  if (word) {
    strArr.push(word);
  }

  // Return the array of words `strArr`
  return strArr;
}

function joinArrReverse(strArr: string[]): string {
  let newStr: string = "";
  const lastIdx: number = strArr.length - 1;

  // Iterate over each word in the array of words `strArr` in reverse order
  for (let idx = lastIdx; idx >= 0; idx--) {
    // If the current word is not the last word in the array, add a space to the new string `newStr`
    if (idx !== lastIdx) newStr += " ";
    // Add the current word to the new string `newStr`
    newStr += strArr[idx];
  }

  // Return the new string `newStr`
  return newStr;
}

reverseWordsOne("a good   example");

// Solution #2: Using built-in methods
function reverseWordsTwo(s: string): string {
  return s
    .split(" ") // Split the input string into an array of words
    .reverse() // Reverse the order of the words
    .filter(Boolean) // Filter out any empty strings
    .join(" "); // Join the filtered words separated by a single space
}

reverseWordsTwo("a good   example");
