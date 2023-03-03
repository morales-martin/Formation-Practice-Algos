/*

Q. You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

*/

const removeDuplicates = (s) => {
  let stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

/*

Q. Given a string, insert a star (*) between each character.
  addStars("hello") == "h*e*l*l*o"

*/

function addStars(str) {
  let result = "";

  for (let i = 0; i < str.length - 1; i++) {
    result += `${str[i]}*`;
  }

  return result + str[str.length - 1];
}

/*

  Q. Reverse content inside parentheses.
  
  console.log(solution("(bar(xyz))")) // xyzrab
*/

function solution(inputString) {
  let result = "";
  let mainPointer = 0;
  while (mainPointer < inputString.length) {
    let currentChar = inputString[mainPointer];

    if (currentChar === "(") {
      let stringToProcess = "";
      let parenthStack = ["("];
      mainPointer++;

      while (parenthStack.length) {
        let char = inputString[mainPointer];
        if (char === "(") {
          recursiveCallNeeded = true;
          stringToProcess += char;
          parenthStack.push(char);
        } else if (char === ")") {
          parenthStack.pop();
          if (parenthStack.length) {
            stringToProcess += char;
          }
        } else {
          stringToProcess += char;
        }
        mainPointer++;
      }

      result += reverse(solution(stringToProcess));
    } else {
      result += currentChar;
      mainPointer++;
    }
  }
  return result;
}

/*
  Q. Given a string, return the index of the first occurrence of a target string. Return -1 if the input string does not contain the target string.

  Examples:
  • Given a string: "hello", target: "ll" // returns 2
  • Given a string: "formation", target: "afor" // returns -1

  // Test Cases
  console.log(2 === strStr("hello", "ll"));
  console.log(-1 === strStr("", "a"));
  console.log(0 === strStr("aaaaaaa", "a"));
  console.log(-1 === strStr("formation", "afor"));
  console.log(-1 === strStr("formation", "fora"));

*/

function strStr(inputString, target) {
  for (let i = 0; i <= inputString.length - target.length; i++) {
    if (inputString.substring(i, i + target.length) === target) return i;
  }

  return -1;
}

/*
  Q. Given a string, reverse the string word by word.

  Note:
  • Remove any extra white space (e.g. "b a" -> "a b" // only keep 1 whitespace).
  • Remove any leading or trailing white spaces (e.g. " Hi " -> "Hi").

  Examples:
  • Given a string: "I love programming" // returns: "programming love I"
  • Given a string: " " // returns: ""

  Test Cases
  console.log("world! hello" === rw("  hello world!  "))
  console.log("" === rw(""))
  console.log("" === rw("   "))
  console.log("a" === rw("  a"))
*/

function rw(input) {
  let inputArray = input.split(" ");
  let result = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    if (inputArray[i] !== "") result.push(inputArray[i]);
  }

  return result.join(" ");
}

function printLines(str, k) {
  // Iterative:
  if (!str) return "";
  let count = 0;
  let currWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "\n") {
      currWord += str[i];
    } else {
      if (count === k) return currWord;
      currWord = "";
      count++;
    }
  }

  return "";

  // Using Split:
  // const words = str.split('\n');
  // if (words.length - 1 < k) return '';
  // return words[k];
}

/*

Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"

xyz(abc)123

base case
- reach a character that equals ")"
  - return result

- currChar = '(' or result is not empty
  - add char to result

recursive case
- recursive(idx, result)

*/

const parenBit = (string, idx = 0, start = 0) => {
  if (string[idx] === ")") {
    return string.substring(start, idx + 1);
  }

  let newStart = string[idx] === "(" ? idx : start;

  return parenBit(string, idx + 1, newStart);
};

console.log(parenBit("xyz(abc)123") == "(abc)");
console.log(parenBit("x(hello)") == "(hello)");
console.log(parenBit("(xy)1") == "(xy)");
