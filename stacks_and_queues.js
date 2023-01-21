function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Approach:
    Loop through string, adding open brackets to a stack
    When we run into a close bracket, pop stack and check if they match

    Once we have looped through the entire string and our stack is empty, return true... else return false
*/

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
// root = new TreeNode(1)
// console.log(inorderTraversal(root));

const isValid = (str) => {
  let symbolStack = [];
  let symbolMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      symbolStack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (symbolStack.pop() != symbolMap[str[i]]) return false;
    }
  }

  if (symbolStack.length === 0) return true;

  return false;
};

/*

Constraints:
Stack can never be taller than 4
Stack can never be empty

Input: Array of ints
Positive ints: # of pancakes being added to stack
Negative ints: # of pancakes being removed from stack

Output: 
[
  True or false whether constraints always pass,
  Max height of pancake stack
]

pancakes int
max int
result bool
Iterate through pancakes:
-let currMax = p + pancakes[i]
- max = math.max(max, currMax)
- if p > 4 || p < 1: bool = false

return [result, max]

*/
function goldilockFlapjacks(pancakes) {
  let p = 0;
  let max = 0;
  let result = true;

  for (let ele of pancakes) {
    max = Math.max(max, p + ele);
    p += ele;

    if (p > 4 || p < 1) result = false;
  }

  return [result, max];
}

/*

[1,10,4,5,2] = [10,5]

Loop through our array
  Loop through and pop elements in stack that are less than curr ele

Add element to stack

Return stack

*/

function find_left_peaks(arr) {
  let stack = [];
  for (let ele of arr) {
    while (stack.length > 0 && stack[stack.length - 1] < ele) stack.pop();
    stack.push(ele);
  }

  console.log(stack);
  return stack;
}

const rotateString = (s, goal) => {
  if (s.length != goal.length) return false;

  let str = s;
  for (let i = 0; i < s.length; i++) {
    if (str === goal) return true;

    str = str.slice(1) + str.slice(0, 1);
  }

  return false;
};

const rotateStringStackQueue = (s, goal) => {
  let string = [];

  for (let char of s) {
    string.push(char);
  }

  for (let char of s) {
    if (string.join("") === goal) return true;

    let charToShift = string.shift();
    string.push(charToShift);
  }

  return false;
};

// console.log(rotateStringStackQueue('abcde', 'cdeab'))

const findHat = (dogs, bestFriend) => {
  let map = dogs;
  let queue = [bestFriend];
  let dogsAsked = new Set();
  let curr;

  while (queue.length > 0) {
    curr = queue.shift();
    if (dogsAsked.has(curr)) break;

    if (map[curr][0] === "HAT") {
      return curr;
    }

    dogsAsked.add(curr);
    for (let ele of map[curr]) {
      queue.push(ele);
    }
  }

  return "Couldn't find the hat";
};

// let dogs = {
//   'Carter': ['Fido', 'Ivy'],
//   'Ivy': ["HAT"], // Ivy has seen the hat
//   'Loki': ['Snoopy'],
//   'Pepper': ['Carter'],
//   'Snoopy': ['Pepper'],
//   'Fido': []
// };
// console.log(findHat(dogs, 'Loki') == "Ivy");
// console.log(findHat(dogs, 'Snoopy') == "Ivy");
// console.log(findHat(dogs, 'Ivy') == "Ivy");
// console.log(findHat(dogs, 'Fido') == "Couldn't find the hat");

/*

Input: Array of strings

Problem: given an array of strings representing if statements in vb, return the max depth
        if If statement is incorrect, return -1

If statement is incorrect when:
  - First keyword is not If
  - An else or elseif is not inside an if
  - There are two else blocks in a row
  - An else is after an elseif

Loop through array, adding keywords to stack
once a closing string is met (elseif..endif), pop stack to check if corresponding opening keyword is at top.
Otherwise return -1.

*/
function vbNesting(controlFlow) {
  let ifStack = [];
  let depth = 0;
  let matchMap = {
    elseif: ["else", "elseif"],
    endif: ["if", "else"],
  };

  for (let str of controlFlow) {
    if (str === "if") {
      ifStack.push(str);
      depth = Math.max(depth, ifStack.length);
    } else if (str === "else") {
      if (ifStack[ifStack.length - 1] != "if") return -1;
      ifStack.push(str);
    } else if (str === "elseif" || str === "endif") {
      let top = ifStack.pop();
      if (!matchMap[str].includes(top)) return -1;
      if (top === "else") ifStack.pop();
    }
  }

  if (ifStack.length > 0) return -1;

  return depth;
}

function theLastWord(str) {
  let strArray = str.split(" ");
  let stack = [];

  for (let word of strArray) {
    let top = stack[stack.length - 1];

    if (word === top) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }

  if (stack.length > 0) return false;
  return true;
}

const dailyTemperatures = (temperatures) => {
  /*
  
  [2,3,1] => [1,0,0]
  
  BRUTE FORCE
  Loop through each element
      Loop through rest of array, counting elements until you reach a higher value.
      If you reach end of array, return 0
  
  OPTIMIZED
  
  Loop through temperatures using i
      while( stack.length && stack top is less than temps[i]) Set result[top] = i - top
      Adding i to stack
  
  */

  let result = new Array(temperatures.length).fill(0);
  let idxStack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (idxStack.length && temperatures[idxStack[idxStack.length - 1]] < temperatures[i]) {
      result[idxStack[idxStack.length - 1]] = i - idxStack.pop();
    }
    idxStack.push(i);
  }

  return result;
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

const removeOuterParentheses = (s) => {
   let stack = []
   let level = 0
   
   for(let c of s) {
       if(c === '(') {
           if(level !== 0) stack.push(c);
           level++
       }else if(c === ")" && level > 0){
           if((level - 1) !== 0) stack.push(c)
           level--
       }
   }
   
   return stack.join("")
};

const printLvl = (root) => {
  let queue = [root];

  while (queue.length > 0) {
    const nextQ = [];

    for (const elt of queue) {
      process.stdout.write(elt.key.toString());
      process.stdout.write(" ");

      if (elt.left) nextQ.push(elt.left);
      if (elt.right) nextQ.push(elt.right);
    }

    process.stdout.write("\n");

    queue = nextQ;
  }
};
