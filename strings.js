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

// console.log(parenBit("xyz(abc)123") == "(abc)");
// console.log(parenBit("x(hello)") == "(hello)");
// console.log(parenBit("(xy)1") == "(xy)");

/*
'''
Generate all plus & minus expressions that equals target

Given a string that contains only digits from 0 to 9, and an integer value, *target*. Print all expressions which evaluate to *target* using the plus(+) and minus(-) binary operators between the digits.

You will likely need a helper function to recurse. You can use a loop within your recursive function because we're not monsters.
 

EXAMPLE(S)
generateExprs("123", 6) == ['1 + 2 + 3']
generateExprs("125", 7) == ['12 - 5']
generateExprs("420", 420) == ['420']
generateExprs("1210", 2) == ['1 + 2 - 1 + 0','1 + 2 - 1 - 0','12 - 10']
 

FUNCTION SIGNATURE
function generateExprs(seq, target) {
def generateExprs(seq: str, target: int) -> None:

'''
*/

const generateExprs = (seq, target) => {
  let results = [];
  let subs = [];

  let stack = [];
  const generateSubs = (idx = 0, sum = 0) => {
    subs.push(parseInt(stack.join("")));

    for (let i = idx; i < seq.length; i++) {
      stack.push(seq[i]);
      generateSubs(i + 1);
      stack.pop();
    }
  };
  generateSubs();

  return subs;
};

// generateExprs("123", 6);
// console.log(generateExprs("1210", 2));

/*
A game developer is creating an online, competitive anagram game where friends can play against each other. 
The game's objective is to create as many anagrams as possible from a random string shown on the screen. 
Given the challenge word, 'displayedWord', and the user input, 'userWord', determine if the user input a valid anagram. 

What would your algorithm look like using built-in functions to simplify the implementation, how about without?
An anagram is a word formed by rearranging the letters of another word using all the original letters exactly once. 
For example, the words 'opts', 'post', 'pots', 'spot', 'stop', and 'tops' are all anagrams of each other.
As a follow-up, the game developer wants to create a custom anagram dictionary in memory to speed up their
 game performance by getting the list of anagrams for a word in less than O(N) time, where N is the length of the word list. 
 Given a long list of words, create a class to represent the anagram dictionary. Then, implement a method that accepts a word 
 and returns a list of the anagrams.

Example(s)
isAnagram("coat", "taco") == True
isAnagram("steak", "skate") == True
isAnagram("pots", "stop") == True
isAnagram("stop", "taco") == False

dictionary = AnagramDictionary(["pots", "stop", "cat", "act", "tops", "opts", "post", "spot"])
dictionary.getAnagramWords("tac") == ["cat", "act"]


🛠️ IMPLEMENT
def isAnagram(displayedWord: str, userWord: str) -> bool:

*/

const isAnagram = (displayedWord, userWord) => {
  let freqMap = new Map();

  for (const char of displayedWord) {
    let count = freqMap.get(char) || 0;
    freqMap.set(char, count + 1);
  }

  for (const char of userWord) {
    let count = freqMap.get(char) || 0;
    if (count >= 1) {
      freqMap.set(char, count - 1);
    }
  }

  for (const [char, freq] of freqMap) {
    if (freq > 0) return false;
  }
  return true;
};

console.log(isAnagram("coat", "taco") == true);
console.log(isAnagram("steak", "skate") == true);
console.log(isAnagram("pots", "stop") == true);
console.log(isAnagram("stop", "taco") == false);
