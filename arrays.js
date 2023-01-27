let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 3;

//Print out every value
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//Print out every other value
function printEveryOtherValue(array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
}

//Print out every other value, skipping the first one
function printEveryOtherValueSkipFirst(array) {
  for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
  }
}

//Add a second parameter, k, and now print out every kth value, starting with the first.
function printEveryKth(array, k) {
  for (let i = 0; i < array.length; i += k) {
    console.log(array[i]);
  }
}

//Finally, print all of these again in reverse:
//Every element starting with the last
function printReverse(array) {
  for (let i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
  }
}

//Every other element starting with the last index
function printReverseEveryOtherValue(array) {
  for (let i = array.length - 1; i > -1; i -= 2) {
    console.log(array[i]);
  }
}

//Every other element skipping the last index
function printReverseEveryOtherValueSkipLast(array) {
  for (let i = array.length - 2; i > -1; i -= 2) {
    console.log(array[i]);
  }
}

//Every kth element starting with the last
function printReverseEveryKth(array, k) {
  for (let i = array.length - 1; i > -1; i -= k) {
    console.log(array[i]);
  }
}

//Print all possible pairs of elements in an array`
function printAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(`(${array[i]},${array[j]})`);
    }
  }
}

// Check if the sum of a pair equals k
function sumToK(array, k) {
  /*
    Brute Force Method

    find all pairs using two for loops - O(n^2)
    add condition to check sum of two pairs
  
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === k) return true;
    }
  }
  */

  /*

  Two Pointer Approach O(n) - Only works because array is sorted
  Pointer at head
  Pointer at tail

  while pointers do not meet:
  if sum > k, change pointer at tail (since value is greater)
  if sum < k, change pointer at head (since value is lesser)
  if sum === , return true

  end of while: return false (no pair was found)
  */

  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 <= p2) {
    if (array[p1] + array[p2] > k) {
      p2--;
    } else if (array[p1] + array[p2] < k) {
      p1++;
    } else {
      return true;
    }
  }
  return false;
}

function selectionSort(array) {
  /*
  
    Array (assuming length > 1)
  
    Loop through the array. As we loop, we have two pointers (one for min, other for scanning & comparing min). After each loop, swap our current position (i) with the min that we have found.
  
    */

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }

    if (min != i) {
      let tmp = array[min];
      array[min] = array[i];
      array[i] = tmp;
    }
  }

  return array;

  /*

  function selectionSort(array){
    let currentIdx = 0;


      while(currentIdx < array.length-1){
        let smallestIdx = currentIdx;

        for(let i = currentIdx + 1; i < array.length;i++){
          if(array[smallestIdx] > array[i]){
            smallestIdx = i;
          }
        }

      [array[currentIdx],array[smallestIdx]] = [array[smallestIdx],array[currentIdx]]
      currentIdx++;
      }
      return array;
    }
*/
}

function diagonalLeftToRightGoingUp() {
  for (let k = arr.length - 1; k >= 0; k++) {
    console.log(arr[k][arr.length - 1 - k]);
  }
}

function diagonalLeftToRightGoingDown() {
  for (let k = 0; k < arr.length; k++) {
    console.log(arr[k][k]);
  }

  /*
    for (let k = arr.length - 1; k >= 0; k++) {
      for (let j = arr.length - 1; j >= 0; k++) {
        if (j == k) console.log(arr[j][k]);
      }
    }
  */
}

function firstRepeatedElement(input) {
  //SUBOPTIMAL
  // for (let i = 0; i < input.length - 1; i++) {
  //   for (let j = i + 1; j < input.length; j++) {
  //     if (input[j] === input[i]) return input[j];
  //   }
  // }
  // return false;

  //OPTIMAL
  let inputSet = new Set();

  for (let i = 0; i < input.length; i++) {
    if (inputSet.has(input[i])) {
      return input[i];
    } else {
      inputSet.add(input[i]);
    }
  }
  return null;
}

function indicesOfTarget(input, target) {
  let results = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === target) results.push(i);
  }

  return results;
}

function isMontonic(array) {
  let increase = true;
  let decrease = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1]) increase = false;
    if (array[i] >= array[i - 1]) decrease = false;
    if (!increase && !decrease) return false;
  }

  return increase || decrease;
}

function canPlaceFlowers(flowerbed, n) {
  let plotsAvailable = 0;
  flowerbed.unshift(0);
  flowerbed[flowerbed.length] = 0;

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0)
      plotsAvailable++;
  }

  return n <= plotsAvailable;
}

function numUniques(array) {
  let arrayMap = new Map();

  for (let i = 0; i < array.length; i++) {
    if (arrayMap.has(array[i])) {
      arrayMap.set(array[i], arrayMap.get(array[i]) + 1);
    } else {
      arrayMap.set(array[i], 1);
    }
  }

  return Array.from(arrayMap.values()).filter((c) => c === 1).length;
}

/*

  Q. Give an array, with target x, return number of elements in array that repeat x times.

  const elementArray = [1, 2, 3, 1, 2, 3]; 
  console.log(numElementsRepeatedX(elementArray,2)) // [1,2,3]
*/


function numElementsRepeatedX(elementArray, target) {
  let repeatCountMap = new Map();

  for (const element of elementArray) {
    if (repeatCountMap.has(element)) {
      repeatCountMap.set(element, repeatCountMap.get(element) + 1);
    } else {
      repeatCountMap.set(element, 1);
    }
  }

  let result = 0;
  for (const [element, count] of repeatCountMap) {
    if (count === target) {
      result++;
    }
  }

  return result;
}

function everyXth(input, x) {
  let result = [];

  if (x < 1) return result;
  for (let i = x - 1; i < input.length; i += x) {
    result.push(input[i]);
  }

  return result;
}

function maxProfitPotential(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let currPrice of prices) {
    let profit = currPrice - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, currPrice);
  }
  return maxProfit;
}

// console.log(maxProfitPotential([7, 1, 5, 3, 6, 4]));

function wa(heights) {
  if (!heights) return 0;

  let l = 0;
  let r = heights.length - 1;

  let leftMax = heights[l];
  let rightMax = heights[r];

  let result = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, heights[l]);
      result += leftMax - heights[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, heights[r]);
      result += rightMax - heights[r];
    }
  }

  return result;
}

const findLongestWord = (s, dictionary) => {
  let i = 0;
  let j = 0;
  let length = 0;
  let result = "";

  for (let word of dictionary) {
    j = 0;
    i = 0;
    while (i < s.length && j < word.length) {
      if (s[i] === word[j]) j++;
      i++;
    }

    if (j === word.length && word.length > length) {
      length = word.length;
      result = word;
    }
  }

  return result;
};

function sbs(input, target) {
  let l = 0;
  let r = input.length - 1;
  let mid;

  while (l < r) {
    mid = Math.floor((l + r) / 2);

    if (input[mid] === target) return mid;

    if (input[l] <= input[mid]) {
      // left side is sorted
      if (target >= input[l] && target <= input[mid]) {
        // target falls within left side
        r = mid - 1;
      } else {
        // target falls within right side
        l = mid + 1;
      }
    } else {
      //right side is sorted
      if (target <= input[r] && target >= input[mid]) {
        // target falls within right side
        l = mid + 1;
      } else {
        // target falls within left side
        r = mid - 1;
      }
    }
  }

  return -1;
}

const minDominoRotations = (tops, bottoms) => {
  for (let target of [tops[0], bottoms[0]]) {
    let topMissing = 0;
    let bottomMissing = 0;

    for (let i = 0; i < tops.length; i++) {
      if (tops[i] !== target && bottoms[i] !== target) break;

      if (tops[i] !== target) topMissing++;
      if (bottoms[i] !== target) bottomMissing++;
      if (i === tops.length - 1) return Math.min(topMissing, bottomMissing);
    }
  }

  return -1;
};

// let tops = [2,1,2,4,2,2]
// let bottoms = [5,2,6,2,3,2]
// console.log(minDominoRotations(tops, bottoms))


/*
Q. Given an array of integers, find all unique triplets (a, b, c) in the array such that their sum equals zero (a + b + c = 0).

Examples:
• Given an array: [1, 2, 0] returns: []
• Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
• Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]]
*/

function tns(input) {
  let result = new Set();
  if (!input.length) return result;

  function helper(input, index = 0, subset = [], total = 0) {
    if (subset.length >= 3) {
      if (total === 0) {
        result.add(subset.sort().join(","));
      }
      return;
    }

    for (let i = index; i < input.length; i++) {
      subset.push(input[i]);
      helper(input, i + 1, subset, total + input[i]);
      subset.pop();
    }
  }

  helper(input);

  return [...result].map((r) => {
    return r.split(",");
  });
}

const threeSum = (nums, target) => {
  /*

sort our input

[1,1,2,2,3,4,5,6]
      
Main loop that starts at 0 and ends at length - 2
-Create result array 
-Check if my pivot has already been used
  (because my list is sorted, I can check the previous element in the array (i-1) - after first loop)
-Set left and right pointers: left = element after my pivot; right = the end of my list

While left is before right
-Get my current sum using the three pointers that I have established: pivot, left, and right
-3 conditions: sum equals target, sum greater than target, sum less than target

Sum equals target:
-Add our three indices as an array to our result : [pivot, left, right]
-While my left equals left + 1, left++: [1,2,2,2,2,3,4,5,5,5,5]
                                         p         l   r
-while my right equals right - 1, right--
-left++ & right--

sum > target
- while right equals right - 1, r--
-right--

sum < target
- while left equals left + 1, l++
- l++


return result
*/
  let sortedArray = nums.sort((a, b) => a - b);
  let result = [];

  for (let pivot = 0; pivot < sortedArray.length - 2; pivot++) {
    if (pivot > 0 && nums[pivot] === nums[pivot - 1]) continue;

    let left = pivot + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[pivot] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[pivot], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        //sum is less than target
        left++;
      }
    }
  }
  console.log(result);
  return result;
};

// Test Cases
// console.log([] === threeSum([], 0));
// console.log([[-1, 0, 1]] === threeSum([-1, 0, 1], 0));
// console.log([[-1, 0, 1]] === threeSum([-1, -1, 1, 1, 0, 0], 0));
// console.log(
//   [
//     [-1, 0, 1],
//     [-5, 1, 4],
//   ] === threeSum([-5, -1, 0, 1, 4, -1], 0)
// );

/* 

Kadane's Algorithm
Given an array of ints, return the maximum subarray sum

Example:
[1,2,3] => 6 [1,2,3]
[1,-5,11,-3] => 8 [11,-3]

console.log(MaxSubarray([1, 2, 3]));
console.log(MaxSubarray([1, -5, 11, -3,8,6]));

*/

const MaxSubarray = (array) => {
  let currSum = array[0];
  let maxSum = array[0];

  for (let i = 1; i < array.length; i++) {
    currSum = Math.max(array[i], currSum + array[i]);

    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
};

function swap(array, target) {
  let nonZeroPointer = 0;
  let swapCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      nonZeroPointer = i + 1;

      while (array[nonZeroPointer] === array[i]) {
        nonZeroPointer++;
      }
      if (nonZeroPointer > array.length - 1) break;

      swapCount += nonZeroPointer - i;
      [array[i], array[nonZeroPointer]] = [array[nonZeroPointer], array[i]];
    }
  }

  return swapCount;
}

function minSwap(array) {
  return Math.min(swap(array, 0), swap(array, 1));
}

// console.log(minSwap([1, 0, 1, 1, 0]));
// console.log(minSwap([0, 1]));
// console.log(minSwap([1, 1, 0, 0]));

/*

  Prompt
  Given an array, reverse every sub-array formed by consecutive k elements.

*/

function reverseK(arr, k) {
  if (k === 1) return arr;

  function helper(array, start, end) {
    let left = start;
    let right = end;

    while (left < right) {
      [array[start], array[end]] = [array[end], array[start]];
      left++;
      right--;
    }
  }

  for (let i = 0; i < arr.length; i += k) {
    let start = i;
    let end = Math.min(i + k - 1, arr.length - 1);
    helper(arr, start, end);
  }

  return arr;
}

/*
Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.

Examples:
• Given an array: [2, 1] // returns [1, 2]
• Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]

*/

function dnf(input) {
  if (!input.length) return [];
  let left = 0;
  let right = input.length - 1;

  let i = 0;
  while (i <= right) {
    if (input[i] === 0) {
      [input[i], input[left]] = [input[left], input[i]];

      while (input[left] === 0) left++;
      i++;
    } else if (input[i] === 2) {
      [input[i], input[right]] = [input[right], input[i]];

      while (input[right] === 2) right--;
    } else {
      i++;
    }
  }

  return input;
}

// Test Cases
var array1 = [];
var array2 = [2, 1, 1, 0];
// var array3 = [0, 2, 1, 0, 1, 2];
// console.log(dnf(array1)); // []
// console.log(dnf(array2)); // [0, 1, 1, 2]
// console.log(dnf(array3)); // [0, 0, 1, 1, 2, 2]

function reverse(str) {
  let strArray = Array.from(str);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
    left++;
    right--;
  }

  return strArray.join("");
}

function partialProduct(arr) {
  if (!arr.length) return arr;

  let result = [];
  let left = Array(arr.length).fill(1);
  let right = Array(arr.length).fill(1);

  /*

  [1,2,3,4,5]

  left: [1,2,6,24,120]
  right: [120,60,20,5,1]
  */

  // left products
  let product = 1;
  for (let i = 1; i < arr.length; i++) {
    left[i] = product *= arr[i - 1];
  }

  product = 1;
  // right products
  for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = product *= arr[i + 1];
  }

  // populate result
  for (let i = 0; i < arr.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

// console.log(partialProduct([1, 2, 3, 4, 5])); // [120,60,40,30,24]
// console.log(partialProduct([1, 2, 3, 0, 5])); // [0,0,0,30,0]
// console.log(partialProduct([1, 2, 0, 4, 0])); // [0,0,0,0,0]
// console.log(partialProduct([])); // []



const rotateArray = (nums, k) => {
  if (!(nums instanceof Array) || !nums.length || k === 0) return nums;
  k = k % nums.length;

  if (k < 0) {
    // rotate right
    nums = [
      ...nums.slice(Math.abs(k), nums.length),
      ...nums.slice(0, Math.abs(k)),
    ];
  } else {
    // rotate left
    nums = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
  }

  return nums;
};

/*

Fisher-Yates shuffle algorithm
Shift used numbers to back and then decrease size by 1

*/
Array.prototype.shuffle = function() {
  // loop through entirety of array
  let randomIndex;
  for(let i = this.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i+1));
    [this[i], this[randomIndex]] = [this[randomIndex], this[i]];
  }

  return this;
}

// console.log([1,2,3,4,5,6,7,8,9,10].shuffle());

/*

Q. Given a sorted array of unique positive integers and a target integer, 
    check if the array contains a target using binary search and return its index. 
    If the array does not contain the target, return -1.

*/

function binarySearch(array, target) {
  let left = 0;
  let right = array.length-1;
  
  while(left <= right) {
    let mid = Math.floor((right + left) / 2);
    if(array[mid] !== target) {
      if(target > array[mid]) { // target is on right side
        left = mid+1;
      }else{ // target is on left side
        right = mid-1;
      }
    }else{
      return mid;
    }
  }
  
  return -1
}

// Test Cases
// var arrayBS = [1, 2, 3, 6, 8, 13, 113, 153, 200]
// console.log(binarySearch(arrayBS, 1)) // 0
// console.log(binarySearch(arrayBS, 200)) // 8
// console.log(binarySearch(arrayBS, 8)) // 4
// console.log(binarySearch(arrayBS, 154)) // -1
