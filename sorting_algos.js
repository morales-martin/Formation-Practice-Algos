let array1 = [3, 66, 7, 2, 241, 24];
let array2 = [0];
let array3 = [1, 2, 3, 4, 5];
/* 

SELECTION SORT
Have two loops: One to keep track of your swap placeholder 
    and the other to find the minimum value of the entire array
*/

const selection = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let maxIdx = i;

    for (let j = 0; j < i; j++) {
      if (array[maxIdx] < array[j]) maxIdx = j;
    }

    [array[maxIdx], array[i]] = [array[i], array[maxIdx]];
  }

  return array;
};

// console.log(selection(array1))
// console.log(selection(array2))
// console.log(selection(array3))

/*
   i------  
[1,3,4,36]
 
INSERTION SORT
Have two loops: One that goes through the array n-1 times and
    another that finds a value that is greater than its previous
*/

const insertion = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j = j - 1;
    }
  }

  return array;
};

// console.log(insertion(array1));
// console.log(insertion(array2));
// console.log(insertion(array3));

/*

   
[2,1,3,6,7,13]
     

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

const mergeArrays = (array1, array2) => {
  let p1 = 0;
  let p2 = 0;

  let result = [];

  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      result.push(array1[p1]);
      p1++;
    } else {
      result.push(array2[p2]);
      p2++;
    }
  }

  if (p1 < array1.length) result = [...result, ...array1.slice(p1)];
  if (p2 < array2.length) result = [...result, ...array2.slice(p2)];

  return result;
};

const merge = (array) => {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);

  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return mergeArrays(merge(left), merge(right));
};

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));

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

// console.log(heapSort(array1));
// console.log(heapSort(array2));
// console.log(heapSort(array3));
