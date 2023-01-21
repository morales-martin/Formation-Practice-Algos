let array1 = [3, 66, 7, 2, 241, 24];
let array2 = [0];
let array3 = [1, 2, 3, 4, 5];
/* 

SELECTION SORT
Have two loops: One to keep track of your swap placeholder 
    and the other to find the minimum value of the entire array
*/

const selection = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
};

// console.log(selection(array1))
// console.log(selection(array2))
// console.log(selection(array3))

/*
        i
[3,4,1,36]
     j
INSERTION SORT
Have two loops: One that goes through the array n-1 times and
    another that finds a value that is greater than its previous
*/

const insertion = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }

  return array;
};

// console.log(insertion(array1))
// console.log(insertion(array2))
// console.log(insertion(array3))

/*
       i
[3,6,2,1,7,13]
 j    

BUBBLE SORT
Concept: Start at first element. If element is greater than it's next, swap.
    Keep swapping until 
-Create two for loops
-One that acts as a placeholder for elements that are sorted at the end of our array
-One that iterates through each element and stops at our second pointer

*/

const bubble = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};

// console.log(bubble(array1))
// console.log(bubble(array2))
// console.log(bubble(array3))

/*

MERGE SORT
Recursive: 
-Base case: Array size is 1
-Recursive call on:
    -Left: slice of array from 0-middle
    -Right: slice of array from middle - end
-Call helper function that takes in both left and right array and returns a sorted result array

*/

const mergeArrays = (left, right) => {
  let result = [];

  let leftP = 0;
  let rightP = 0;

  while (leftP < left.length && rightP < right.length) {
    if (left[leftP] < right[rightP]) {
      result.push(left[leftP]);
      leftP++;
    } else {
      result.push(right[rightP]);
      rightP++;
    }
  }

  while (leftP < left.length) {
    result.push(left[leftP]);
    leftP++;
  }

  while (rightP < right.length) {
    result.push(right[rightP]);
    rightP++;
  }

  return result;
};

const merge = (array) => {
  if (array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = merge(array.slice(0, middle));
  let right = merge(array.slice(middle));

  return mergeArrays(left, right);
};

// console.log(merge(array1));
// console.log(merge(array2));
// console.log(merge(array3));

/*

[1,2,3]
QUICKSORT

Recursive function using left and right pointers
-Initialize pointers as both ends of the array
-while the pointers do not meet:
    -Call helper function to pivot the original array
    -Recursive call on left side of pivot index
    -Recursive call on right side of pivot index
-Return array

Helper function to pivot array and return pivot index
-Initialize pointers to parameters of left and right / start and end
-Initialize third pointer to act as placeholder for elements to be swapped (starts at start of array)
-Loop while your traversal pointer has not reached your pivot
    -Check if current element is less than pivot
    If so: Increment placeholder and swap elements at 1.swap placeholder and 2. traversal pointer
    If no: Increment traversal pointer
-Lastly, swap pivot with placeholder since we know all elements at placeholder are less than pivot
-Return placeholder

[0,3,2,5,7,10,9,8]
*/

function pivot(array, left, right) {
  let pivot = right;
  let eleToSwap = left;

  for (let i = left; i < pivot; i++) {
    if (array[i] < array[pivot]) {
      [array[i], array[eleToSwap]] = [array[eleToSwap], array[i]];
      eleToSwap++;
    }
  }

  [array[pivot], array[eleToSwap]] = [array[eleToSwap], array[pivot]];

  return eleToSwap;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(array, left, right);

    quickSort(array, left, pivotIdx - 1); // perform quicksort on left side of pivot index
    quickSort(array, pivotIdx + 1, right); // // perform quicksort on right side of pivot index
  }
  return array;
}

// console.log(quickSort(array1))
// console.log(quickSort(array2))
// console.log(quickSort(array3))

/*
HEAP SORT

[1,2,3] - Parent: 1 Children: 2, 3
      parents: 0 to math.floor(array length - 1)
      children: parent * 2 + 1 (left); parent * 2 + 2 (right)

Main function
-"Heapify" our array / Max heap: root is our largest number
  -Loop through all of our parents, starting with our rightmost parent (deepest)
    -call helper function that checks left and right node of each parent to see which is greater
    -if a child node is greater than the parent: swap child with parent & call heap function on child to update child's children
- Sort our heap
  -Swap our root with our last element before our "boundary"
  -Heapify tree to get max heap again
*/

const heapify = (array, boundary, root) => {
  let largest = root;

  let left = 2 * root + 1;
  let right = 2 * root + 2;

  if (left < boundary && array[left] > array[largest]) largest = left;
  if (right < boundary && array[right] > array[largest]) largest = right;

  if (largest !== root) {
    [array[largest], array[root]] = [array[root], array[largest]];

    heapify(array, boundary, largest);
  }
};

const heapSort = (array) => {
  // parents middle - 1
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  // heap sort
  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];

    heapify(array, i, 0);
  }

  return array;
};

console.log(heapSort(array1));
console.log(heapSort(array2));
console.log(heapSort(array3));
