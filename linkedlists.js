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

function arrayToLL(array) {
  if (array.length < 1) return new ListNode();

  let resultList = new ListNode();
  let newNode = resultList;

  for (let e of array) {
    newNode.next = new ListNode(e);
    newNode = newNode.next;
  }

  return resultList.next;
}

function firstIndexInLL(node, target) {
  let idx = 0;

  while (node) {
    if (node.val === target) return idx;

    idx++;
    node = node.next;
  }

  return -1;
}

// let list1 = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

// console.log(firstIndexInLL(list1, 9) === -1);
// console.log(firstIndexInLL(list1, 3) === 2);

// console.log(toString(arrayToLL([1, 2])) == "1 -> 2");
// console.log(toString(arrayToLL([1, 2, 3])) == "1 -> 2 -> 3");

function append(head, target) {
  if (!head) return new ListNode(target);

  let resultList = head;
  let node = resultList;

  while (node) {
    if (!node.next) {
      node.next = new ListNode(target);
      break;
    }

    node = node.next;
  }

  return resultList;
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// console.log(arrayify(append(null, 1))); // [1]
// console.log(arrayify(append(LL1, 7))); // [1, 4, 5, 7]
// console.log(arrayify(append(new ListNode(), 7))); // [0, 7]

function findMax(node) {
  let max = -Infinity;

  while (node) {
    if (node.val > max) max = node.val;

    node = node.next;
  }

  return max;
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))));
// var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))));
// var LL3 = new ListNode(
//   -1,
//   new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11))))
// );
// console.log(findMax(LL1)); // 5
// console.log(findMax(LL2)); // 7
// console.log(findMax(LL3)); // 0
// console.log(findMax(new ListNode(1))); // 1

function findMissing(head) {
  if (!head) return 1;

  let resultList = new ListNode();
  resultList.next = head;
  let node = resultList;

  while (node) {
    if (!node.next || node.next.val === node.val + 2) return node.val + 1;

    node = node.next;
  }
}

// let head1 = new ListNode(1, new ListNode(3));
// let head2 = new ListNode(-3, new ListNode(-1));
// let head3 = new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9)))));
// let head4 = new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(10)))));

// console.log(findMissing(head1) == 2);
// console.log(findMissing(head2) == -2);
// console.log(findMissing(head3) == 10);
// console.log(findMissing(head4) == 9);

function insert(head, target) {
  if (!head) return new ListNode(target);

  let resultList = new ListNode();
  resultList.next = head;
  let node = resultList;

  while (node) {
    if (!node.next || node.next.val > target) {
      let next = node.next;
      node.next = new ListNode(target);
      node.next.next = next;
      break;
    }

    node = node.next;
  }

  return resultList.next;
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
// var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
// console.log(arrayify(insert(LL1, 2))); // [1, 2, 3, 4]
// console.log(arrayify(insert(LL2, -4))); // [-4, -3, -2, -1]
// console.log(arrayify(insert(LL2, 0))); // [-3, -2, -1, 0]
// console.log(arrayify(insert(null, 1))); // [1]

function secondToLast(head) {
  if (!head || !head.next) return null;

  while (head) {
    if (!head.next.next) return head;

    head = head.next;
  }
}
// let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
// head = new ListNode(1)
// console.log(secondToLast(head))

function count(head) {
  let counter = 0;
  while (head) {
    counter++;
    head = head.next;
  }

  return counter;
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// console.log(count(null)); // 0
// console.log(count(LL1)); // 3
// console.log(count(new ListNode())); // 1

function createLLInReverse(node) {
  let nodeArr = [];

  while (node) {
    nodeArr.push(node.val);
    node = node.next;
  }

  let i = 0;
  let j = nodeArr.length - 1;
  while (i < j) {
    [[nodeArr[i]], [nodeArr[j]]] = [[nodeArr[j]], [nodeArr[i]]];

    i++;
    j--;
  }

  return nodeArr;
}

function everyKthNode(node, target) {
  let resultList = new Node();
  let newNode = resultList;

  while (node) {
    for (let i = 1; i < target; i++) {
      node = node.next;
      if (!node) return resultList.next;
    }

    newNode.next = new Node(node.val);
    newNode = newNode.next;
    node = node.next;
  }

  return resultList.next;
}

function createPalindromeLL(array) {
  /*

    Output: LL

    Iterating through array
    [1,2,3] -> 1 -> 2 -> 3 -> 2 -> 1
        add elements to linked list

    Iterate through array backwards (skipping last element)
        add elements to our linked list

    Result = palindrome LL
 */

  let resultList = new Node();
  let newNode = resultList;

  for (let int of array) {
    newNode.next = new Node(int);
    newNode = newNode.next;
  }

  // array needs to be >1
  if (array.length < 1) return resultList.next;

  for (let i = array.length - 2; i >= 0; i--) {
    newNode.next = new Node(array[i]);
    newNode = newNode.next;
  }

  return resultList.next;
}

function createLL(count, value) {
  /*
    Initialize result list

    loop up to count -1 and create new node containing value & add to our result list

    return result list

*/
  let resultList = new Node();
  let newNode = resultList;

  while (count > 0) {
    newNode.next = new Node(value);
    newNode = newNode.next;

    count--;
  }

  return resultList.next;
}

function numPairs(head) {
  /*

    BRUTE FORCE 
    Iterate through linked list and add to map(element, frequency)
    Loop through map, if count === 2. Add to target counter (2).
    */

  let freqMap = new Map();

  while (head) {
    count = (freqMap.get(head.val) || 0) + 1;
    freqMap.set(head.val, count);

    head = head.next;
  }

  let resultCounter = 0;
  for (const [ele, count] of freqMap) {
    if (count === 2) resultCounter++;
  }

  return resultCounter;
}

function checkOdd(head) {
  /*

    Iterating through linked list (head), as we do this, we incremenet an odd counter that is outside our loop.
    return odd counter.

    
    let oddCounter = 0;

    while(head) {
        if(!(head.val%2===0)) oddCounter++
        head = head.next
    }

    return oddCounter

    */

  /*

    when !node return 0

    count = checkOdd node.next
    
    return (node.val % 2 === 0) count : count + 1
    */

  if (!head) return 0;

  let oddCount = checkOdd(head.next);

  return head.val % 2 === 0 ? oddCount : oddCount + 1;
}

// function isLLPalindrome(head) {}

// let head = new Node(1, new Node(2, new Node(3, new Node(2, new Node(1)))));
// console.log(isLLPalindrome(head)); // true

// head = new Node(1, new Node(1));
// console.log(isLLPalindrome(head)); // true

// head = new Node(1);
// console.log(isLLPalindrome(head)); // true

// head = new Node(1, new Node(2, new Node(1, new Node(2))));
// console.log(isLLPalindrome(head)); // false

// head = new Node(1, new Node(2, new Node(1, new Node(2))));
// console.log(isLLPalindrome(head)); // false

// console.log(isLLPalindrome(head)); // false

function insertZero(head) {
  let resultList = new ListNode();
  resultList.next = head;
  let node = resultList;

  while (node && node.next) {
    let next = node.next;
    node.next = new ListNode(0);
    node.next.next = next;

    node = node.next.next;
  }

  return resultList.next;
}

// console.log(toString(insertZero(head)));

function removeFirstAndLast(head) {
  if (!head) return null;

  let resultList = new ListNode();
  resultList.next = head.next;
  let node = resultList;

  while (node) {
    if (!node.next || !node.next.next) {
      node.next = null;
      break;
    }

    node = node.next;
  }

  return resultList.next;
}

// console.log(toString(removeFirstAndLast(head)));

function reversePairs(head) {
  if (!head) return null;

  let resultList = new ListNode(0, head);
  let prev = resultList;
  let curr = resultList.next;

  while (curr && curr.next) {
    // save nodes
    let nextPair = curr.next.next;
    let next = curr.next;

    // swap
    next.next = curr;
    prev.next = next;
    curr.next = nextPair;

    // update pointers
    prev = curr;
    curr = curr.next;
  }

  return resultList.next;
}

// let head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))
// );
// console.log(toString(reversePairs(head)))

// Iterate thru LL once to get length O(n)
// Iterate thru the LL again O(0.75n) = O(1.75n) = O(n)

function removeLastQuarterNodes(head) {
  let dummyNode = new ListNode(undefined, head);
  let slow = dummyNode;
  let fast = dummyNode;

  while (
    fast &&
    fast.next &&
    fast.next.next &&
    fast.next.next.next &&
    fast.next.next.next.next
  ) {
    slow = slow.next.next.next;
    fast = fast.next.next.next.next;
  }

  slow.next = null;
  return dummyNode.next;
}

function swapValuePairs(head) {
  if (head == null || head.next == null) return head;

  let curr = head;
  while (curr && curr.next != null) {
    [curr.value, curr.next.value] = [curr.next.value, curr.value]; // swap values
    curr = curr.next.next; //2 steps
  }
  return head;
}

function reverseLL(head) {
  let dummyNode = head;
  let curr = dummyNode;
  let prev = null;

  while (curr) {
    let next = curr.next;

    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}

// let head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
// console.log(toString(reverseLL(head))); // true

/*
Q. Given a linked list, return the kth element from the end of the list.
   If the k exceeds the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1
*/
function splitList(root) {
  let sentinel = new ListNode();
  sentinel.next = root;
  let slow = sentinel.next;
  let fast = sentinel.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHalf = slow.next;
  slow.next = null;
  let firstHalf = sentinel.next;

  return [firstHalf, secondHalf];
}

function reverseList(root) {
  let prev = null;
  let curr = root;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

var reorderList = function (head) {
  let [firstHalf, secondHalf] = splitList(head);
  let reversedHalf = reverseList(secondHalf);

  let currNode = firstHalf;

  while (reversedHalf) {
    let next = currNode.next;
    let next_post = reversedHalf.next;

    reversedHalf.next = next;
    currNode.next = reversedHalf;

    currNode = next;
    reversedHalf = next_post;
  }
};

// Test Cases
var LL1 = new ListNode(
  13,
  new ListNode(
    1,
    new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))
  )
);
// console.log(kthFromLast(LL1, 1)); // 10

/*
Q. Given K sorted linked lists, merge all the lists into one sorted list. Each linked list is sorted in ascending order.

Examples:
• Given a linked list: [] // returns []
• Given an array of linked lists (only the head pointers): 
    [[1, 4, 5], [1, 3, 4], [2, 6]] // returns: [1, 1, 2, 3, 4, 4, 5, 6]
*/

function mkl(lists) {
  let sentinel = new ListNode();
  if (lists.length === 0) return lists[0];
  if (!lists.length) return sentinel;

  let newNode = sentinel;

  while (true) {
    let min = Infinity;

    for (let list of lists) {
      if (list !== null && list.val < min) min = list.val;
    }

    if (min === Infinity) break;

    for (let i = 0; i < lists.length; i++) {
      let list = lists[i];

      if (list !== null && list.val === min) {
        let next = list.next;

        list.next = null;
        newNode.next = list;

        newNode = newNode.next;
        lists[i] = next;
      }
    }
  }
  return sentinel.next;
}

/*
Q. Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class.

If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
*/

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;

    this.cache = new Map();

    //left = lru
    //right = most recent
    this.left = new ListNode(0, 0);
    this.right = new ListNode(0, 0);

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  delete(node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  insert(node) {
    let prev = this.right.prev;
    let next = this.right;

    next.prev = node;
    prev.next = node;

    node.next = next;
    node.prev = prev;
  }

  get(key) {
    if (this.cache.has(key)) {
      this.delete(this.cache.get(key));
      this.insert(this.cache.get(key));
      return this.cache.get(key).val;
    }

    return -1;
  } // int -> int

  put(key, val) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    let newNode = new ListNode(key, val);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.capacity) {
      let lru = this.left.next;
      this.delete(this.cache.get(lru.key));
      this.cache.delete(lru.key);
    }
  } // int, int -> int
}

// // Test Cases
// let cache = new LRUCache(2)

// // console.log(cache.get(0)) // undefined
// cache.put(2, 1)
// cache.put(1, 1)
// cache.put(2, 3)
// cache.put(4, 1)

// console.log(cache.get(1)) // 10
// console.log(cache.get(2)) // 20

// cache.put(4, 40)
// console.log(cache.get(3)) // undefined because purged when 4 was put in.

/*
Swapping Nodes in a Linked List


You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).


Input: head = [1,2,3,4,5], k = 4
Output: [1,4,3,2,5]

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]


check if head is null
  return null if head is null

define slow pointer and fast pointer, set values to head 
for i in range(k):
  fast pointer = fast pointer.next 

kth_node = fast_pointer 

while fast pointer is not null 
  fast pointer = fast pointer next 
  slow pointer = slow pointer next
** slow pointer should be at kth end of the list 

temp_val = slow pointer.value 
slow pointer.value = kth_node.value 
kth_node.value = temp_val 

return head 
*/

function swapKthNodeFromStartAndEnd(head, k) {
  if (head === null) {
    return null;
  }

  let fastPtr = head;
  for (let i = 0; i < k - 1; i++) {
    fastPtr = fastPtr.next;
  }

  let kthNode = fastPtr;

  let slowPtr = head;
  while (fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  let temp_val = slowPtr.val;
  slowPtr.val = kthNode.val;
  kthNode.val = temp_val;

  return head;
}

// 1, 2, 3, 4, 5
const ex1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
// [7,9,6,6,7,8,3,0,9,5]
const ex2 = new ListNode(
  7,
  new ListNode(
    9,
    new ListNode(
      6,
      new ListNode(
        6,
        new ListNode(
          7,
          new ListNode(
            8,
            new ListNode(3, new ListNode(0, new ListNode(9, new ListNode(5))))
          )
        )
      )
    )
  )
);
const oneNodeTest = new ListNode(1);
/*
[1,2,3,4,5] k=2
     ^   ^

*/
// const h1 = swapKthNodeFromStartAndEnd(ex1, 1)
// printLL(h1) // Output: [1,4,3,2,5]
// const h2 = swapKthNodeFromStartAndEnd(ex2, 5)
// printLL(h2) // Output: [7,9,6,6,8,7,3,0,9,5]
// const h3 = swapKthNodeFromStartAndEnd(oneNodeTest, 1)
// printLL(h3) // Output: [1]

function printLL(head) {
  let output = [];

  while (head) {
    output.push(head.val);
    head = head.next;
  }

  console.log(output);
}

const zipperLists = (head1, head2) => {
  let dummyNode = new ListNode();
  let newNode = dummyNode;

  let count = 0;

  while (head1 && head2) {
    if (count % 2 === 0) {
      newNode.next = head1;
      head1 = head1.next;
    } else {
      newNode.next = head2;
      head2 = head2.next;
    }
    count++;
    newNode = newNode.next
  }

  if(head1) newNode.next = head1
  if(head2) newNode.next = head2

  return dummyNode.next;
};

let listA = new ListNode("a", new ListNode("c"));
let listB = new ListNode("x", new ListNode("y", new ListNode("z")));

console.log(arrayify(zipperLists(listA, listB)));