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
console.log(`Preorder: ${preorder(root)}`);

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

console.log(`Postorder: ${postorder(root)}`);

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
    if(!node) return

    inorderTree(node.left)
    consolee.log(node.value)
    inorderTree(node.right)
}

console.log(`Inorder: ${inorder(root)}`);
