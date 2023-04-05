function isValid(s) {
  let stack = 0;

  for (let c of s) {
    if (c === "(") stack++;
    if (c === ")") stack--;
    if (stack < 0) return false;
  }

  return stack === 0;
}

var removeInvalidParentheses = function (s) {
  let read = [s];
  let nextLevel = [];
  const resultSet = new Set();

  while (read.length && resultSet.size === 0) {
    // For each string at this level (number of edits from original)
    for (let i = 0; i < read.length; i++) {
      const candidate = read[i];

      if (isValid(candidate)) {
        resultSet.add(candidate);
      } else if (resultSet.size === 0) {
        // If we still haven't found a valid string, then put all of the possible
        // strings with one fewer into the nextLevel list.
        for (let j = 0; j < candidate.length; j++) {
          if (candidate[j] === "(" || candidate[j] === ")") {
            const next = candidate.substr(0, j) + candidate.substr(j + 1);
            nextLevel.push(next);
          }
        }
      }
    }
    read = nextLevel;
    nextLevel = [];
  }

  return [...resultSet];
};

/*

                [1,2,3]
        [2,3]  [3,1] [2,1]
     [3]  [2]  [3][1] [2] [1]

Recursive function
base case = 1 single element in array

Recursive call
    for(i:0-length -1 )
        let firstEle = arr.shift()
        let permurations = recursive(arr)
    
        for(perm in permutations)
            perm.append(firstEle)
            results.add(perm)
        
        arr.push(firstElement)
    
    return results


*/

function getAllPermutations(array) {
  let results = [];
  if (array.length === 1) return [array.slice()];

  for (let i = 0; i < array.length; i++) {
    let firstElement = array.shift();
    let permutations = getAllPermutations(array);

    for (let perm of permutations) {
      perm.push(firstElement);
      results.push(perm);
    }

    array.push(firstElement);
  }
  return results;
}

function get_permutations(input) {
  //global result
  let result = [];
  // create a helper function
  function helper(idx, input) {
    //base case
    if (idx === input.length) {
      result.push(input.slice());
      return;
    }
    for (let j = idx; j < input.length; j++) {
      [input[idx], input[j]] = [input[j], input[idx]];
      helper(idx + 1, input);
      [input[idx], input[j]] = [input[j], input[idx]];
    }
  }
  helper(0, input);
  return result;
}

function get_permutations2(input) {
  let allPermutations = [];

  function helper(idx = 0, path = []) {
    console.log("path", path);
    console.log("------------");
    if (path.length > input.length) {
      return;
    }
    allPermutations.push(path.slice());
    for (let i = idx; i < input.length; i++) {
      // i = 0 , [1, 2 , 3 ]
      if (!path.includes(input[i])) {
        path.push(input[i]);
        console.log("after push", path);
        console.log("----------------");
        helper(i + 1, [...path]);
        path.pop();
        console.log("after pop", path);
      }
    }
  }
  helper();
  return allPermutations;
}

// function getAllSubsequences(s) {
//     let result = []
//     function helper(s,prefix="") {
//         if(s.length === 0) return result.push(prefix)

//         let firstChar = s[0]
//         let string = s.substr(1)
//         helper(string,prefix)
//         helper(string,prefix+firstChar)
//     }

//     helper(s)
//     return result
// }

function getAllSubsequences(s) {
  let result = [];
  function helper(index = 0, subset = "") {
    if (index > s.length) return;

    result.push(subset.substring(0));

    for (let i = index; i < s.length; i++) {
      subset += s[i];
      helper(i + 1, subset);
      subset = subset.slice(0, subset.length - 1);
    }
  }

  helper();
  return result;
}

// console.log(getAllSubsequences("123"));

function sumList(list) {
  let sum = 0;
  for (let int of list) {
    sum += int;
  }

  return sum;
}

var combinationSum = function (candidates, target) {
  let results = [];

  function helper(idx = 0, sub = []) {
    if (sumList(sub) > target || idx >= candidates.length) return;

    if (sumList(sub) === target) {
      results.push([...sub]);
      return;
    }

    sub.push(candidates[idx]);
    helper(idx, sub); // add same element
    sub.pop();
    helper(idx + 1, sub); // add next element
  }
  helper();
  return results;
};

/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.
*/
var combine = function (n, k) {
  let results = [];

  function helper(index = 1, subset = []) {
    if (subset.length === k) return results.push([...subset]);

    for (let i = index; i <= n; i++) {
      subset.push(i);
      helper(i + 1, subset);
      subset.pop();
    }
  }

  helper();
  return results;
};

/*
Given three students, who will refer to as “A”, “B”, and “C”, return an array representing all the combinations that they can sit in three seats.
*/

function seatCombo(seats) {
  function seatComboHelper(available, taken) {
    //Base case
    if (available.length === 0) {
      // or if taken.length === seats.length
      console.log(taken);
    }

    for (let i = 0; i < available; i++) {
      seatComboHelper(
        available.substring(0, i) +
          available.substring(i + 1, available.length),
        taken + available[i]
      );
    }
  }
  seatComboHelper(seats, "");
}

function seatCombo2(seats) {
  function seatComboHelper(available, taken) {
    //Base case
    if (available.length === 0) {
      // or if taken.length === seats.length
      console.log(taken);
    }

    for (let i = 0; i < available.length; i++) {
      taken += available[i];
      seatComboHelper(
        available.substring(0, i) +
          available.substring(i + 1, available.length),
        taken
      );
      taken = taken.substring(0, taken.length - 1);
    }
  }
  seatComboHelper(seats, "");
}

/*
'''
Today, you will be working on the student attendance question.

Every day, a student earns a grade for their attendance:
P - Present
A - Absent
L - Late

The student gets to pass the class if they have:
1) No more than one absence
2) No more than 2 consecutive late days.
 

EXAMPLE(S)
Example: PLLPAL => true
Example: PPPPLLL => false
Example: AAP => false

Edge Cases:
  - String will not be empty and will contain only PAL

Approach:
- Var for absences,
- Traverse through the string (treat as array)
  - As we're traversing:
  - incrementing absences as we encounter "A"
  - If our char is 'L': // index > 1
    - Check prev 2 chars to see if they both equal 'L': false
- return absences > 1 

FUNCTION SIGNATURE
func canPass(record: String) -> Bool
'''
*/

const canPass = (record) => {
  let absences = 0;

  for (let i = 0; i < record.length; i++) {
    let currChar = record[i];

    if (currChar === "A") {
      absences++;
    } else if (currChar === "L") {
      let lateCount = 1;
      while (i + lateCount < record.length && record[i + lateCount] === "L")
        lateCount++;

      if (lateCount > 2) {
        return false;
      } else {
        i += lateCount - 1;
      }
    }
  }

  return absences < 2;
};

console.log(canPass("PLLPAL"),true);
console.log(canPass("PPPPLLL"),false);
console.log(canPass("AAP"),false);

/*
Followup: 
given a number of days k, return the total unique attendance records that would be passible?

*/

const numUniqueRecords = (k) => {
  let uniqueRecordsCount = 0;

  let stack = [];
  let recordChars = ["A", "L", "P"];
  const backtrack = () => {
    //base case
    if (stack.length === k) {
      if (canPass(stack.join(""))) uniqueRecordsCount++;
      return;
    }

    // recursive case
    for (let char of recordChars) {
      stack.push(char);
      backtrack();
      stack.pop();
    }
  };

  backtrack();
  return uniqueRecordsCount;
};

// AP, AL, PA, PL, LL, PP, LA, LP
console.log(numUniqueRecords(1), 3); // "A" "L" "P"
console.log(numUniqueRecords(2), 8);
console.log(numUniqueRecords(3), 19);

// O(3^K * K)

/*

Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.
This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.

Example(s)
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

4^1
4^1

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]

max^n

function generatePasswords
  - result array
  - call backtrack function
  - return result array

- init stack (will be pushed onto by backtrack func)
function backtrack params:
  base case:
    - when our stack reaches a length of min-max (inclusively)
      - push to result array

  recursive case
  - Loop through our input array
    - push to stack
    - backtrack
    - pop from stack

*/

const generatePasswords = (chars, min, max) => {
  const result = [];

  const stack = [];
  const backtrack = () => {
    // base case 
    if(stack.length >= min && stack.length <= max){
      result.push([...stack].join(""));
      return;
    }

    // recursive case
    for(const char of chars) {
      stack.push(char);
      backtrack();
      stack.pop();
    }
  }

  backtrack();

  return result;
}

console.log(generatePasswords(["a"], 2, 4))

// [
//   "aa",
//   "aaa",
//   "aaaa",
// ]

console.log(generatePasswords(["a", "b", "c"], 2, 3))
// [
//   "aa","aaa","aab","aac",
//   "ab","aba","abb","abc",
//   "ac","aca","acb","acc",
//   "ba","baa","bab","bac",
//   "bb","bba","bbb","bbc",
//   "bc","bca","bcb","bcc",
//   "ca","caa","cab","cac",
//   "cb","cba","cbb","cbc",
//   "cc","cca","ccb","ccc"
// ]

