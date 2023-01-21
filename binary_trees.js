class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
}

function preorderTraversal(root) {
  let curr = root;
  let stack = [];
  let result = [];

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      result.push(curr.value);
      curr = curr.left;
    } else {
      curr = stack.pop();
      curr = curr.right;
    }
  }

  return result;
}

// function inorderTraversal(root) {
//   let curr = root;
//   let stack = [];
//   let result = [];

//   while (curr || stack.length > 0) {
//     if (curr) {
//       stack.push(curr);
//       curr = curr.left;
//     } else {
//       curr = stack.pop();
//       result.push(curr.value);
//       curr = curr.right;
//     }
//   }

//   return result;
// }

function postorderTraversal(root) {
  let curr = root;
  let stack = [];
  let result = [];

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);

      curr.left ? (curr = curr.left) : (curr = curr.right);
    } else {
      curr = stack.pop();
      result.push(curr.value);

      if (stack.length > 0 && stack[stack.length - 1].left == curr) {
        curr = stack[stack.length - 1].right;
      } else {
        curr = null;
      }
    }
  }

  return result;
}

/*
              1
            /   \
           4     2
         6  7   /  \
               3   null
         */

// 1,4,6,7,2,3
// console.log(
//   "Preorder: " +
//     preorderTraversal(
//       new TreeNode(
//         1,
//         new TreeNode(4, new TreeNode(6), new TreeNode(7)),
//         new TreeNode(2, new TreeNode(3), null)
//       )
//     )
// );

// 6,4,7,1,3,2
// console.log(
//   "Inorder: " +
//     inorderTraversal(
//       new TreeNode(
//         1,
//         new TreeNode(4, new TreeNode(6), new TreeNode(7)),
//         new TreeNode(2, new TreeNode(3), null)
//       )
//     )
// );

// 6,7,4,3,2,1
// console.log(
//   "Postorder: " +
//     postorderTraversal(
//       new TreeNode(
//         1,
//         new TreeNode(4, new TreeNode(6), new TreeNode(7)),
//         new TreeNode(2, new TreeNode(3), null)
//       )
//     )
// );

function findLeastOccurringNode(root) {
  let freqMap = new Map();

  function dfs(head) {
    if (!head) return;
    freqMap.set(head.value, (freqMap.get(head.val) || 0) + 1);

    dfs(head.left);
    dfs(head.right);
  }

  dfs(root);

  /**
   *     if (!root) return 0;
    let queue = [root]
  
    while (queue.length > 0) {
      // console.log({queue})
      let ele = queue.shift()
  
      freqMap.set(ele.value, (freqMap.get(ele.value) || 0) + 1)
  
      if (ele.left) queue.push(ele.left)
      if (ele.right) queue.push(ele.right)
      // console.log(ele.value)
    }
   */

  let min = Infinity;

  for (const [ele, count] of freqMap) {
    if (count < min) min = ele;
  }

  return min;
}

// console.log(
//   findLeastOccurringNode(new TreeNode(1, new TreeNode(2, new TreeNode(2))))
// );

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorderNTree = (root) => {
  /*

  preorder: <root><children - left to right>

  queue: root
  result array

  while queue is not empty:
      add root to result array

      loop through children and add to queue

  */

  let queue = [root];
  result = [];

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.val);

    let innerQueue = [];
    for (let child of node.children) {
      innerQueue.push(child);
    }
    console.log(innerQueue);

    queue = innerQueue;
  }

  return result;
};

// console.log(preorderNTree(root))

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (val < root.value) root.left = insertIntoBST(root.left, val);
  if (val > root.value) root.right = insertIntoBST(root.right, val);
  return root;
};

// remove subtrees that do not contain a 1
var pruneTree = function (root) {
  if (!root) return null;

  root.right = pruneTree(root.right);
  root.left = pruneTree(root.left);
  if (!root.left && !root.right && root.val !== 1) return null;
  return root;
};

var maxDepth = function (root) {
  let maxDepth = 0;

  const dfs = (root, depth = 1) => {
    if (!root) return;

    maxDepth = Math.max(maxDepth, depth);

    if (root.left) dfs(root.left, depth + 1);
    if (root.right) dfs(root.right, depth + 1);
  };

  dfs(root);
  return maxDepth;
};

function countTree(root) {
  if (!root) return 0;

  return 1 + countTree(root.left) + countTree(root.right);
}

function sumBT(root) {
  if (!root) return 0;

  return root.value + sumBT(root.left) + sumBT(root.right);
}

function createParentSumTree(root, parent_val = 0) {
  if (!root) return;

  createParentSumTree(root.left, root.value);
  createParentSumTree(root.right, root.value);
  root.value += parent_val;
  return root;
}

function hasSingleChildren(root) {
  let result = [];

  function dfs(root) {
    if (!root) return null;

    if (
      (root.left === null && root.right !== null) ||
      (root.right === null && root.left !== null)
    ) {
      result.push(root.value);
    }

    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);

  return result;
}

function findMostFrequentNodeValue(root) {
  let freqMap = new Map();

  function dfs(root) {
    if (!root) return;

    let count = freqMap.get(root.value) || 0;
    freqMap.set(root.value, count + 1);

    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);

  let maxFreq = 0;
  let maxValue;
  for (const [val, freq] of freqMap) {
    if (freq > maxFreq) {
      maxFreq = freq;
      maxValue = val;
    }
  }
  return maxValue;
}

function sumNodesWithEvenParent(root, parent_val) {
  if (!root) return 0;

  let sumVal = parent_val % 2 === 0 ? root.value : 0;

  return (
    sumVal +
    sumNodesWithEvenParent(root.left, root.value) +
    sumNodesWithEvenParent(root.right, root.value)
  );
}

function branchSum(root) {
  let result = [];
  if (!root) return result;
  function dfs(root, prevSum = 0) {
    if (!root) return null;

    let l = dfs(root.left, prevSum + root.value);
    let r = dfs(root.right, prevSum + root.value);

    if (l === null && r === null) result.push(prevSum + root.value);
  }

  dfs(root);

  return result;
}

/*

Q. Given a binary tree, 
find the lowest common ancestor of two given nodes in the 
tree and return its value. A node can be its own ancestor.
Examples:

• Given a binary tree: 
                     10
                    /  \
                  5     12
                 / \    /    
                3   6  11

• For node1: 3, node2: 6 // returns 5
• For node1: 11, node2: 6 // returns 10
*/

function lca(root, node1, node2) {
  if (!root) return null;

  if (root === node1 || root === node2) return root.value;

  let l = lca(root.left, node1, node2);
  let r = lca(root.right, node1, node2);

  if (l === null && r === null) return null;
  if (l !== null && r !== null) return root.value;

  return l !== null ? l : r;
}

/*

Q. Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach.

In-order traversal:
1. Traverse the left subtree.
2. Visit the root.
3. Traverse the right subtree.

Example:
• Given a binary tree:

           1

          / \

         2   3

// returns [2, 1, 3]

*/

function inorderTraversal(root) {
  let result = [];
  let stack = [];
  if (!root) return result;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      result.push(root.value);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }

  return result;
}

const isUnivalTree = (root) => {
  let val = root.val;
  let res = true;

  function dfs(root) {
    if (!root) return;

    if (root.val !== val) res = false;

    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);
  return res;
};

// Insert word into Trie
function insertWord(root, word) {
  if (!word.length) return;
  let currNode = root;

  for (let char of word) {
    // get to node containing char
    let foundNode = null;
    for (let child of currNode.children) {
      if (child.letter === char) {
        foundNode = child;
        break;
      }
    }

    if (foundNode === null) {
      //character does not exist in tree
      let newNode = new Node(char);
      currNode.children.add(newNode);
      currNode = newNode;
    } else {
      //character exists in tree
      currNode = foundNode;
    }
  }

  currNode.isEndOfWord = true;
}

function containsWord(root, desiredWord) {
  if (root === null || desiredWord === null) return false; // simple validation

  if (desiredWord.length === 0) return true; // simple validation

  function containsWordRecursive(root, desiredWord, idx) {
    if (idx === desiredWord.length) return root.isEndOfWord;

    for (let child of root.children) {
      if (child.letter === desiredWord[idx]) {
        return containsWordRecursive(child, desiredWord, idx + 1);
      }
    }

    return false;
  }

  return containsWordRecursive(root, desiredWord, 0);
}

/*
Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.
*/

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  function helper(left, right) {
    // Base Case
    if (left > right) return null;

    let middle = Math.floor((right + left) / 2);
    let root = new TreeNode(nums[middle]);

    root.left = helper(left, middle - 1);
    root.right = helper(middle + 1, right);
    return root;
  }
  return helper(0, nums.length - 1);
}

// // Test Cases
// console.log(arrayifyTree(sortedArrayToBST([1, 2, 3]))); //[2, 1, 3]
// console.log(arrayifyTree(sortedArrayToBST([-10, -3, 0, 5, 9]))); //[[0, -3, 9, -10, 5], [0, -10, 9, -3, 5], [0, -10, 5, -3, 9], [0, -3, 5, -10, 9]]
// console.log(arrayifyTree(sortedArrayToBST([]))); // []

function secondLargest(root) {
  if (!root) return -1;

  console.log(root.value);

  if (root.right) {
    const result = secondLargest(root.right);
    return result === -1 ? root.value : result;
  }

  if (root.left) {
    // the second largest MUST be the largest in this subtree
    let curr = root.left;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }

  return -1;
}

// t = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
// console.log(secondLargest(t), 2)
// t = new TreeNode(3, new TreeNode(2));
// console.log(secondLargest(t), 2);
// let t = new TreeNode(2, new TreeNode(1), new TreeNode(3));
// console.log(secondLargest(t), 2);
// t = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)));
// console.log(secondLargest(t), 2);

/*
Problem: Completify a Binary Tree
Recall the definition of a complete tree: all levels of the tree are full except for possibly the last, lowest level. 
In the lowest level, all nodes are on the left.
The input is a tree that is potentially not complete. Re-arrange these nodes to make a complete tree.

Input:
      4
     / \
    3   7
   /   / 
  2    5  
 /      \
1        6 

Possible Output:
      6
     / \
    2   4
   / \ / \
  3  1 5  7


*/

function completify(root) {
  
  let queue = [root];
  let nodes = [];

  while(queue.length) {
    let currNode = queue.shift();

    nodes.push(currNode)

    if(currNode.left) queue.push(currNode.left)
    if(currNode.right) queue.push(currNode.right)

    currNode.left = null
    currNode.right = null
  }

  let newRoot = nodes.pop();
  let nodesToAddChildren = [];
  let currNode = newRoot;

  while(nodes.length) {
    currNode.left = nodes.pop();
    nodesToAddChildren.push(currNode.left)

    if(nodes.length) {
      currNode.right = nodes.pop();
      nodesToAddChildren.push(currNode.right)
    }

    currNode = nodesToAddChildren.shift();
  }

  return newRoot;
}

let example1 = new TreeNode(
  4,
  new TreeNode(3, new TreeNode(2, new TreeNode(1))),
  new TreeNode(7, new TreeNode(5, null, new TreeNode(6)))
);

console.log(completify(example1));
