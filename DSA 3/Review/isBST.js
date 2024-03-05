
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }

    isBST(root){
        if(!root)return;
        while(root){
            if((root.left<root.val || !root.left) && (root.right>root.val || !root.right)){
                this.isBST(root.left)
                this.isBST(root.right)
            }else{
                return false;
            }
        }
    }
    isBST2(root, min = null, max = null) {
        if (!root) return true;
    
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false;
        }
    
        return this.isBST(root.left, min, root.val) && this.isBST(root.right, root.val, max);
    }

    insert(val){
        const newNode = new Node(val)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(root.val > newNode.val){
            if(root.left===null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

const bst = new BST();

bst.insert(4)
bst.insert(8)
bst.insert(2)
bst.insert(12)
bst.insert(16)


console.log(bst);

console.log(bst.isBST(bst.root));