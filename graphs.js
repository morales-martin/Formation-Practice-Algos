class Node {
  constructor(value, children = []) {
    (this.value = value), (this.children = children);
  }

  addChild(value) {
    this.children.push(new Node(value));
    return this;
  }
}

/*
        A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K
*/
let root = new Node("A", [
  new Node("B", [new Node("E"), new Node("F", [new Node("I"), new Node("J")])]),
  new Node("C"),
  new Node("D", [new Node("G", [new Node("K")]), new Node("H")]),
]);

// DEPTH FIRST SEARCH

//preorder
function preorder(node) {
  let arr = [];

  function dfs(root) {
    if (!root) return;

    arr.push(root.value);

    for (let child of root.children) {
      dfs(child);
    }
  }
  dfs(node);
  return arr;
}
// console.log(`Preorder: ${preorder(root)}`);

function postorder(node) {
  let arr = [];

  function dfs(root) {
    if (!root) return;

    for (let child of root.children) {
      dfs(child);
    }
    arr.push(root.value);
  }
  dfs(node);

  return arr;
}

// console.log(`Postorder: ${postorder(root)}`);

function inorder(node) {
  let arr = [];

  function dfs(root) {
    if (!root) return;
    // arr.push(root.value);

    for (let child of root.children) {
      dfs(child);
    }
  }
  dfs(node);

  return arr;
}

function inorderTree(node) {
  if (!node) return;

  inorderTree(node.left);
  consolee.log(node.value);
  inorderTree(node.right);
}

// console.log(`Inorder: ${inorder(root)}`);

/*
'''
Given a 2D board of characters and a word, find if the word exists in the grid.

The word is considered to exist in the grid by starting anywhere on the grid and moving adjacent horizontally or vertically.
Each character can only be used one time.
 

EXAMPLE(S)
On this grid:
[['A', 'B', 'C'],
 ['D', 'E', 'F'],
 ['G', 'H', 'I']]

The word "ABEHI" exists.
The word "AE" does not exist.
The word "AC" does not exist.
 

FUNCTION SIGNATURE
func wordExists(grid: [[String]], word: String) -> Bool
def wordExists(board: List[List[str]], word: str) -> bool:
'''
test cases:

1 : empty string -> false
2:  if only substring found ->false

steps:
 
 1 traverse the 2d array check whether first character of the string found or not 
 2 if found : start moving vertically and horizontally upto the length of word
 3 if not found return false

 */
let grid = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
let possibleString = [];

const wordExists = (grid, word) => {
  const visited = new Set();
  const dfsHelper = (i, j, s) => {
    if (
      i === grid.length ||
      j === grid.length ||
      i < 0 ||
      j < 0 ||
      visited.has(`${i} ${j}`)
    ) {
      if (s === word) return true;
      return false;
    }
    visited.add(`${i} ${j}`);

    let result =
      dfsHelper(i - 1, j, s + grid[i][j]) ||
      dfsHelper(i + 1, j, s + grid[i][j]) ||
      dfsHelper(i, j - 1, s + grid[i][j]) ||
      dfsHelper(i, j + 1, s + grid[i][j]);

    visited.delete(`${i} ${j}`);

    return result;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === word.charAt(0)) {
        return dfsHelper(i, j, "");
      }
    }
  }
};

console.log(wordExists(grid, "ABEHI"));
