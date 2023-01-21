class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function toString(head) {
  if (!(head instanceof ListNode)) return "<empty>";

  parts = [];
  while (head) {
    parts.push(head.val);
    head = head.next;
  }

  return parts.join(" -> ");
}

function arrayify(head) {
  let ptr = head;
  var array = [];
  while (ptr != null) {
    array.push(ptr.val);
    ptr = ptr.next;
  }
  return array;
}

function sumDigits(number) {
  if (number < 10) return number;

  let rightmostDigit = number % 10;
  let remainingDigits = Math.floor(number / 10);

  return rightmostDigit + sumDigits(remainingDigits);
}

// console.log(sumDigits(12) == 3)
// console.log(sumDigits(49) == 13)
// console.log(sumDigits(126) == 9)

function countSkippedPairs(word) {
  function helper(word, idx = 0) {
    if (idx > word.length - 3) return 0;

    if (word[idx] === word[idx + 2]) return 1 + helper(word, idx + 1);

    return helper(word, idx + 1);
  }

  return helper(word, 0);
}

// console.log(countSkippedPairs("axa") == 1);
// console.log(countSkippedPairs("axax") == 2);
// console.log(countSkippedPairs("aaa") == 1);

function findMinIndex(arr) {
  if (arr.length === 1) return 0;

  let minIndex = findMinIndex(arr.slice(1)) + 1;

  if (arr[0] <= arr[minIndex]) return 0;

  return minIndex;
}

function findMaxIndex(arr) {
  if (arr.length === 1) return 0;

  let maxIndex = findMaxIndex(arr.slice(1)) + 1;

  if (arr[0] >= arr[maxIndex]) return 0;

  return maxIndex;
}

// console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4)
// console.log(findMinIndex([10, 20, 30]) == 0)
// console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)

// console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
// console.log(findMaxIndex([10, 20, 30]) == 2)
// console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)

function count7(n) {
  if (n < 7) return 0;

  let rightMostChar = n % 10;
  let remainingChars = Math.floor(n / 10);

  if (rightMostChar === 7) return 1 + count7(remainingChars);

  return 0 + count7(remainingChars);
}

// console.log(count7(7) == 1);
// console.log(count7(123) == 0);
// console.log(count7(717) == 2);

function bunnyEarsTwist(bunnies) {
  if (bunnies < 1) return 0;

  if (bunnies % 2 === 0) return 3 + bunnyEarsTwist(bunnies - 1);

  return 2 + bunnyEarsTwist(bunnies - 1);
}

// console.log(bunnyEarsTwist(2) == 5)
// console.log(bunnyEarsTwist(3) == 7)
// console.log(bunnyEarsTwist(5) == 12)
// console.log(bunnyEarsTwist(0) == 0)

function changePi(word) {
  function changePiHelper(word, idx) {
    if (idx > word.length - 1) return "";

    if (word[idx] + word[idx + 1] === "pi")
      return "3.14" + changePiHelper(word, idx + 2);

    return word[idx] + changePiHelper(word, idx + 1);
  }

  return changePiHelper(word, 0);
}

// console.log(changePi("xpix") == "x3.14x");
// console.log(changePi("pipi") == "3.143.14");
// console.log(changePi("pip") == "3.14p");

function pairStars(word) {
  function pairStarsHelper(word, idx = 0) {
    if (idx > word.length - 1) return "";

    if (word[idx] === word[idx + 1])
      return `${word[idx]}*` + pairStarsHelper(word, idx + 1);

    return word[idx] + pairStarsHelper(word, idx + 1);
  }

  return pairStarsHelper(word, 0);
}

// console.log(pairStars("hello") == "hel*lo")
// console.log(pairStars("xxyy") == "x*xy*y")
// console.log(pairStars("aaaa") == "a*a*a*a")

function strCopies(word, sub, n) {
  function strCopiesHelper(word, sub, n, idx = 0) {
    if (n === 0) {
      return true;
    }
    if (idx > word.length - sub.length) {
      return false;
    }

    if (sub === word.slice(idx, idx + sub.length)) {
      return strCopiesHelper(word, sub, n - 1, idx + 1);
    }

    return strCopiesHelper(word, sub, n, idx + 1);
  }

  return strCopiesHelper(word, sub, n, 0);
}

// console.log(strCopies("catcowcat", "cat", 2) === true);
// console.log(strCopies("catcowcat", "cow", 2) === false);
// console.log(strCopies("catcowcat", "cow", 1) === true);

function reverseLL(node) {
  if (!node || !node.next) return node;

  let head = reverseLL(node.next);
  node.next.next = node;
  node.next = null;

  return head;
}

// let node = new ListNode(2, new ListNode(2, new ListNode(5)));
// console.log(toString(reverseLL(node)));

// taylorSeriesEstimate
// The function `sin(x)` can be estimated using the infinite polynomial (Taylor series):
// sin(x) = x − x^3/3! + x^5/5! − x^7/7! + x^9/9! + ...
function sinx(x, n) {
  function fact(num) {
    if (num === 1) return 1;

    return num * fact(num - 1);
  }

  function sinxHelper(x, n, oddNum = 3) {
    if (n === 1) return x;

    if (n % 2 === 0)
      return (
        sinxHelper(x, n - 1, oddNum + 2) - Math.pow(x, oddNum) / fact(oddNum)
      );

    return (
      sinxHelper(x, n - 1, oddNum + 2) + Math.pow(x, oddNum) / fact(oddNum)
    );
  }

  return sinxHelper(x, n);
}

// console.log(sinx(1,1))
// console.log(sinx(1,2))
// console.log(sinx(2,4))

// Given an integer array and an integer, find whether the integer exists in the array. Return a boolean.
function intExists(arr, int) {
  function intExistsHelper(arr, int, idx = 0) {
    if (idx > arr.length - 1) return false;

    if (arr[idx] === int) return true;

    return intExistsHelper(arr, int, idx + 1);
  }

  return intExistsHelper(arr, int);
}
//  console.log(intExists([1,4,5,6,7,8,2],10))
//  console.log(intExists([],10))

// console.log(countInt([1,4,5,6,7,7],7)) // 2

// Find mean of an integer array
function meanInt(arr) {
  function meanIntHelper(arr, idx = 0) {
    if (idx > arr.length - 1) return 0;

    if (idx == 0) return (arr[idx] + meanIntHelper(arr, idx + 1)) / arr.length;

    return arr[idx] + meanIntHelper(arr, idx + 1);
  }

  return meanIntHelper(arr);
}

// console.log(meanInt([1,2,3,4])) // 10/4 = 2.5
// console.log(meanInt([1,8,3,2])) // 14/4 = 3.5

// Replace all negative values with a 0
function replaceNegatives(arr) {
  function replaceNegativesHelper(arr, idx = 0) {
    if (idx > arr.length - 1) return arr;

    if (arr[idx] < 0) arr[idx] = 0;

    return replaceNegativesHelper(arr, idx + 1);
  }

  return replaceNegativesHelper(arr);
}

// console.log(replaceNegatives([-1, 2, 3, -4, 5, 7, -3, -12]));

// Reverse the values in an array
function reverseArray(arr) {
  function reverseArrayHelper(arr, idx = 0) {
    if (idx > Math.floor(arr.length / 2) - 1) return arr;

    // [[arr[idx]],[arr[arr.length - idx - 1]]] = [[arr[arr.length - idx - 1]],[arr[idx]]]
    let tmp = arr[idx];
    arr[idx] = arr[arr.length - idx - 1];
    arr[arr.length - idx - 1] = tmp;

    return reverseArrayHelper(arr, idx + 1);
  }

  return reverseArrayHelper(arr);
}

// console.log(reverseArray([1,2,3,4])) // [4,3,2,1]
// console.log(reverseArray([1,2,3,4,5,6,7])) // [7,6,5,4,3,2,1]
// [4,5,6,6,7]
// [0,1,2,3,4]
// [4,3,2,1,0]

function printXTriangle(k, blank = 0) {
  if (k < 1) return;

  console.log(" ".repeat(blank / 2) + "*".repeat(k) + " ".repeat(blank / 2));

  printXTriangle(k - 2, blank + 2);
}

function printTriangle(array, blank = 0) {
  if (blank > array.length - 1) return;

  let arraySubstring = array
    .join("")
    .substring(blank / 2, array.length - blank / 2);

  console.log(" ".repeat(blank / 2) + arraySubstring + " ".repeat(blank / 2));

  printTriangle(array, blank + 2);
}

// printTriangle(["t", "a", "c", "o", "c", "a", "t"]);
// // tacocat
// //  acoca
// //   coc
// //    o

// printTriangle(["a", "b", "c", "d", "e"]);
// // abcde
// //  bcd
// //   c

// printTriangle(["X"]);
// // X

function append(head, target) {
  if (!head) return new ListNode(target);

  head.next = append(head.next, target);

  return head;
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(arrayify(append(null, 1))) // [1]
// console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
// console.log(arrayify(append(new ListNode(), 7))) // [0, 7]

function count(head) {
  if (!head) return 0;

  return 1 + count(head.next);
}

// Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// console.log(count(null)); // 0
// console.log(count(LL1)); // 3
// console.log(count(new ListNode())); // 1

function atoi(intAsString) {
  let start = 0;
  intAsString[0] === "-" ? (start = 1) : (start = 0);

  function atoiHelper(string, multiplier = "1") {
    if (string.length === 1) return string[string.length - 1] * 1 * multiplier;

    return (
      string[string.length - 1] * 1 * multiplier +
      atoiHelper(string.substring(0, string.length - 1), multiplier + "0")
    );
  }

  let value = atoiHelper(intAsString.substring(start));
  return start === 0 ? value : -value;
}

// console.log(atoi("123") == 123);
// console.log(atoi("4") == 4);
// console.log(atoi("007") == 7);
// console.log(atoi("-1") == -1);

function getAllSubsequences(str) {
  const output = [];

  function getAllSubsequencesHelper(str, index = 0) {
    if (index === arr.length) return;

    const smallAns = getAllSubsequencesHelper(str, index + 1);
    for (let i = 0; i < smallAns.length; i++) {
      output.push(arr);
    }

    output.push(getAllSubsequencesHelper(arr, index + 1));
  }

  getAllSubsequencesHelper(str);
  return output;
}

// console.log(getAllSubsequences("abc")); // == ["a", "b", "c", "ab", "ac", "bc", "abc"]);

/**
 * Prompt
Define a subsequence of a string s to be a list of characters from s such that the characters appear in the same order in the list and in s.
For instance, for the string abcd, a, ab, and acd are valid subsequences, whereas db is not, since b comes before d in the original string.
Given an input string, return all subsequences of the string except the empty string.

Function Signature
def getAllSubsequences(s: str) -> List[str]:

Expected Runtime
Time: O(2n) to generate each of the 2 possibilities for all n positions
Space: O(n) to create up to n stack frames


Example:
getAllSubsequences("abc") == [
  "a",
  "b",
  "c",
  "ab",
  "ac",
  "bc",
  "abc",
]
 */

// function getAllSubsequences(s) {
//   let process = [];
//   let output = [];

//   function helper(prefix, string) {
//     process.push([prefix, string]);
//     if (string.length == 0) {
//       output.push(prefix);
//     } else {
//       let char = string[0];
//       string = string.substring(1);
//       helper(prefix, string);
//       helper(prefix + char, string);
//       char = char.toUpperCase();
//       helper(prefix + char, string);
//     }
//   }
//   helper("", s);
//   return output;
// }

// console.log(getAllSubsequences("abc"))

const recursiveSum = (array) => {
  if (!array) return array;
  if (array.length === 1) return array[0];
  if (array.length === 0) return 0;

  console.log(array);

  for (let i = array.length - 1; i > 0; i++) {
    array[i] += array[i - 1];
  }

  return recursiveSum(array.splice(1));
};

/*
Given an integer array and an integer, find whether the integer exists in the array. Return a boolean.

base case:
  once we reach end of the array, return false

recursive case:
  check current element and if it is our target, return true
  return the recursive call to the next element by incrementing our index paramter


  0 == '0' => true
  0 === 0 

*/

function targetExist(array, target, index = 0) {
  if (index === array.length) {
    return false;
  }
  if (array[index] === target) {
    return true;
  }
  return targetExist(array, target, index + 1);
}

function targetExistPop(array, target) {
  if (array.length === 0) {
    return false;
  }
  if (array.pop() === target) {
    return true;
  }
  return targetExist(array, target);
}

/*
Given an integer array and an integer, return how many times the integer exists in the array.

bottom up: we need an extra variable to hold our count
base case:
  if our index is equal to our array size, return count

recursive case:
  if elem at our current index is equal to our target, increment our count
  return recursive call with updated index and (new) count

*/

function countInt(arr, target, idx = 0, count = 0) {
  if (idx > arr.length - 1) return count;

  if (arr[idx] === target) count++;

  return countInt(arr, target, idx + 1, count);
}

function countIntTD(arr, target, idx = 0) {
  if (idx > arr.length - 1) return 0;

  let add = 0;
  if (arr[idx] === target) add = 1;

  return add + countInt(arr, target, idx + 1);
}

/*
Find mean of an integer array

mean = sum of all numbers / number of numbers

base case:
  when our index is equal to our input size, 
    check if our array is empty, if it is, return 0
    otherwise return sum / count as normal

recursive case:
  add current value to our sum
  return recursive call with updated index and sum

*/

const findMean = (arr, sum = 0, index = 0) => {
  if (index === arr.length) {
    if (arr.length === 0) {
      return 0;
    }
    return sum / index;
  }

  return findMean(arr, sum + arr[index], index + 1);
};

// function reverseArray(arr, left = 0, right = arr.length - 1) {
//   if (left >= right) {
//     return arr;
//   }

//   [arr[left], arr[right]] = [arr[right], arr[left]];

//   return reverseArray(arr, left + 1, right - 1);
// }


const sumNestedList = (arr) => {
  if (!(arr instanceof Array)) return arr;

  let sum = 0;
  for (let ele of arr) {
    sum += sumNestedList(ele);
  }

  return sum;
};

// console.log(sumNestedList([1, 2, 3])); // == 6);
// console.log(sumNestedList([1, [1, 2, 3], 3])); //== 10);
// console.log(sumNestedList([1, [1, [1, [1, [1]]]]])); // == 5);

// const factorial = (n) => {
//   if(n < 1) return 0
//   if(n===1) return 1

//   return n * factorial(n-1)
// }

// def longestCommonRecursive(s1, s2, m, n):
//     # key  = (m, n)
//     # if table.get(key) 
//     global recursed
//     recursed += 1
//     # base case: empty string(s)
//     if m == 0 or n == 0:
//         return 0
    
//     # increment match and continue
//     if s1[m - 1] == s2[n - 1]:
//         return longestCommonRecursive(s1, s2, m - 1, n - 1) + 1
    
//     # pick highest count so far (starting from end)
//     return max(
//         longestCommonRecursive(s1, s2, m, n - 1), 
//         longestCommonRecursive(s1, s2, m - 1, n)
//     )

// print(longestCommonRecursive(s1, s2, len(s1), len(s2)))
// print("recursive count " + str(recursed))

/*

Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
Example(s)
countX("xxhixx") == 4
countX("xhixhix") == 3
countX("hi") == 0

*/

function countX(str) {
  if(str.length === 0) return 0;

  let result = str[0] === 'x' ? 1 : 0;
  
  return result + countX(str.substring(1));
}

console.table([
  countX("xxhixx") === 4,
  countX("xhixhix") === 3,
  countX("hiX") === 0,
  countX("XXXhXXX") === 0,
  countX("x") === 1,
  countX("") === 0,
  countX("hihi") === 0,
  countX("hiAAhi12hi") === 0,
])

