class TreeNode {
  constructor(val, left, right) {
    (this.val = val), (this.left = left), (this.right = right);
  }
}

/**
 *
 * Preorder
 *
 */
const preorderT = (root) => {
  let stack = [];
  let result = [];
  let curr = root;

  while (stack.length > 0 || curr) {
    while (curr) {
      result.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    curr = curr.right;
  }

  return result;
};

const preorderR = (root) => {
  let result = [];
  function preorderRHelper(root) {
    if (!root) return;

    result.push(root.val);

    preorderRHelper(root.left);
    preorderRHelper(root.right);
  }
  preorderRHelper(root);
  return result;
};

const inorderI = (root) => {
  let stack = [];
  let result = [];
  let curr = root;

  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
};

const inorderR = (root) => {
  let result = [];
  function inorderRHelper(root) {
    if (!root) return;

    inorderRHelper(root.left);
    result.push(root.val);
    inorderRHelper(root.right);
  }

  inorderRHelper(root);
  return result;
};

let root = new TreeNode(
  1,
  new TreeNode(4, new TreeNode(6), new TreeNode(7)),
  new TreeNode(2, new TreeNode(3), null)
);

console.log("Preorder: " + preorderT(root));
console.log("Preorder: " + preorderR(root));
console.log("Preorder: " + inorderI(root));
console.log("Preorder: " + inorderR(root));
