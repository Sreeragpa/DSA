class Node{
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
        return this.root === null
    }

    insert(val){
        const newNode = new Node(val)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode);
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
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,val){
        if(!root)return false
        if(root.val===val)return true

        if(val<root.val){
            return this.search(root.left,val)
        }else{
            return this.search(root.right,val)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.val);
            this.preOrder(root.left)
            this.preOrder(root.right)

        }
    }
    
}

const mybst = new BST();

mybst.insert(4)
mybst.insert(1)
mybst.insert(9)
mybst.insert(10)
mybst.insert(12)
mybst.insert(2)

console.log(mybst.search());
mybst.preOrder(mybst.root)