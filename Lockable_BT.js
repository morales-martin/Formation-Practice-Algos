class TreeNode {
    constructor(value, left = null, right = null, parent = null) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.locked = false
      this.descendents_locked_count = 0
      this.parent = parent
    }

    can_lock_or_unlock() {
        if(this.descendents_locked_count > 0) return false

        let curr = this.parent
        while(curr) {
            if(curr.locked) return false
            curr = curr.parent
        }

        return true
    }

    is_locked() {
        return this.locked
    }

    lock() {
        if(this.can_lock_or_unlock()) {
            this.locked = true
            let curr = this.parent
            while(curr) {
                curr.descendents_locked_count++
                curr = curr.parent
            }

            return true
        }else{
            return false
        }
    }

    unlock() {
        if(this.can_lock_or_unlock()){
            this.locked = true

            let curr = this.parent
            while(curr){
                curr.descendents_locked_count--
                curr = curr.parent
            }
            return true
        }else{
            return false
        }
    }
}


/*

             2
          3     4
        8  10  6 9

*/

function lockTarget(root, target) {
    const dfs = (root) => {
        if(!root) return
    
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root,target)
    return
}


