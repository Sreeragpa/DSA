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

   inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.val);
        this.inOrder(root.right)
    }
   }
   
   postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.val);
    }
   }

   BFS(){
    const queue = [];
    queue.push(this.root);
    
    while(queue.length){
        let curr = queue.shift();
        console.log(curr.val);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
    return queue;
   }


}

// inOrder(10){
//     if(root){
//         this.inOrder(5)
//         console.log(root.val); 10 fourth
//         this.inOrder(15)  
//     }
//  }

// inOrder(5){
//     if(root){
//         this.inOrder(3)
//         console.log(root.val);  5  first
//         this.inOrder(7)                 
//     }
//  }

// inOrder(3){
//     if(root){
//         this.inOrder(null)
//         console.log(root.val);  3  second
//         this.inOrder(null)    
//     }
//  }

// inOrder(null){
//     if(root){
//         this.inOrder(null)
//         console.log(root.val);
//         this.inOrder(null)
//     }
//  }



// right

// inOrder(7){
//     if(root){
//         this.inOrder(null)
//         console.log(root.val);  7    third
//         this.inOrder(null)                   
//     }
//  }

// inOrder(15){
//     if(root){
//         this.inOrder(null)
//         console.log(root.val);  15    fifth
//         this.inOrder(null)                   
//     }
//  }




const bst = new BST();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.postOrder(bst.root)
// console.log(bst.BFS());
console.log(bst.search(bst.root,5));

bst.inOrder(bst.root)
// console.log(bst);