// Binary Tree


class TreeNode {
    constructor(val, left, right) {
      (this.val = val), (this.left = left), (this.right = right);
    }
  }
  
  const example1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
    new TreeNode(3, new TreeNode(6, null, null), new TreeNode(7, null, null))
    )
  
  
    function preorderTraversal(root){
      let stack = [ root ]
      while(stack.length){
        if(root == null){
          root = stack.pop()
        } 
        else{
          console.log(root.val)
          stack.push(root.right)
          root = root.left
        }
      }
    }
    function reversePreorder(root){
      let stack = [ root ]
      while(stack.length){
        if(root == null){
          root = stack.pop()
        } 
        else{
          console.log(root.val)
          stack.push(root.left)
          root = root.right
        }
      }
    }
  
    function inorderTraversal(root){
      let stack = []
      while(root || stack.length){
        if(root == null){
          root = stack.pop()
          console.log(root.val)
          root = root.right
        } 
        else{
          stack.push(root)
          root = root.left
      }
    }
  }
  
  function twoStackIterativePostorder(root){
    let stack1 = [root]
    let stack2 = []
    while(stack1.length){
      root = stack1.pop()
      stack2.push(root)
      if(root.left) stack1.push(root.left)
      if(root.right) stack1.push(root.right)
    }
    while(stack2.length){
      console.log(stack2.pop().val)
    }
  }