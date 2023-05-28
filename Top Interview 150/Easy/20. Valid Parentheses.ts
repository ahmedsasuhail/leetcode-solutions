// https://leetcode.com/problems/valid-parentheses/solutions/3569896/js-ts-simple-solution-100-explained-and-commented/

/* 20. Valid Parentheses
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "()[]{}"
    Output: true

    Example 3:
    Input: s = "(]"
    Output: false
*/

function isValid(s: string): boolean {
  // Initialize an empty stack to keep track of expected closing brackets
  const stack: string[] = [];

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If the current character is an opening bracket, push the expected closing bracket onto the stack
    if (s[i] === "(") stack.push(")");
    else if (s[i] === "[") stack.push("]");
    else if (s[i] === "{") stack.push("}");
    else {
      // If the current character is a closing bracket, check if it matches the last expected closing bracket in the stack
      // If the stack is empty, the string is invalid
      // If the closing bracket does not match the last expected closing bracket in the stack, the string is invalid
      if (stack.length === 0 || s[i] !== stack.pop()) return false;
    }
  }

  // If there are no unmatched expected closing brackets left in the stack, the string is valid
  return stack.length === 0;
}

isValid("()[]{}");
