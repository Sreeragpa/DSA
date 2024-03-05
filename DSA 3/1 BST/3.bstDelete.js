class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null
    }

    insert(val){
        const newNode = new Node(val);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.val<root.val){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.val
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.val
        }else{
            return this.max(root.right)
        }
    }

    delete(val){
        this.root = this.deleteNode(this.root,val)
    }

    deleteNode(root,val){
        if(root === null){
            return root;
        }

        if(val<root.val){
            root.left = this.deleteNode(root.left,val)
        }else if(val>root.val){
            root.right = this.deleteNode(root.right,val)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.right
            }else{
                root.val = this.min(root.right);
                root.right = this.deleteNode(root.right,root.val)
            }
        }
        return root
    }
}


const bst = new BST();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.delete(10)
console.log(bst);
console.log(bst.min(bst.root));