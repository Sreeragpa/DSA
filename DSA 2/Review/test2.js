// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.first = null;
//         this.size = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         newNode.next = this.first;
//         this.first = newNode;
//         this.size++;
//     }

//     pop(){
//         if(!this.first) return null;
//         const deletedNode = this.first;
//         this.first = deletedNode.next;
//         this.size--;
//         return deletedNode.val;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }
// }

// class Queue{
//     constructor(){
//         this.stack1 = new Stack();
//         this.stack2 = new Stack();
//     }

//     enqueue(val){
//         this.stack1.push(val)
//     }

//     dequeue(){
//         if(this.stack2.isEmpty()){
//             while(!this.stack1.isEmpty()){
//                 this.stack2.push(this.stack1.pop());
//             }
//             return this.stack2.pop()
//         }
//     }
// }

// const myQueue = new Queue;
// myQueue.enqueue('first')
// myQueue.enqueue('second')
// myQueue.dequeue()
// console.log(myQueue);









// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.first = null;
//         this.size = 0;
//     }

//     push(val){
//         const newNode = new Node(val);
//         newNode.next = this.first;
//         this.first = newNode;
//         this.size++;
//     }

//     pop(){
//         if(this.isEmpty()) return null
//         let poppedNode = this.first;
//         this.first = poppedNode.next;
//         this.size--;
//         return poppedNode.val;
//     }
//     isEmpty(){
//         return this.size===0
//     }
// }

// const myStack = new Stack()
// let str = "Sreerag";
// // myStack.push(str);
// for(let i=0;i<str.length;i++){
//    myStack.push(str[i])
// }
// for(let i=0;i<str.length;i++){
//     console.log(myStack.pop());
// }


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        newNode.next = this.first;
        this.first = newNode;
        this.size++;
    }

    pop(){
        const poppedNode = this.first;
        this.first = poppedNode.next;
        this.size--;
        return poppedNode.val
    }

    display(){
        let current = this.first;
        while(current){
            console.log(current.val);
            current= current.next
        }
    }
}

const myStack = new Stack()

myStack.push("first")
myStack.push("Second")
myStack.push("third")
myStack.display()
myStack.pop()
myStack.display()