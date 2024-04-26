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
        const newNode =  new Node(val);
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.val < root.val){
            if(root.left===null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,val){
        if(!root)return false
        if(val===root.val)return true
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

   inOrder(root,inorder = []){
    if(root){
        this.inOrder(root.left,inorder)
        inorder.push(root.val)
        this.inOrder(root.right,inorder)
    }
    return inorder
   }
   
   postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.val);
    }
   }

   isBST(){
    // const inorder = this.inOrder(this.root);
    // return inorder.sort((a,b)=>a-b) == inorder;

   }

   



}



// const bst = new BST();
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.isBST());

// bst.inOrder(bst.root)


const words = ["Hello", "world", "how", "are", "you"];  
const result = words.flatMap(word => word.split(''));
console.log(result);