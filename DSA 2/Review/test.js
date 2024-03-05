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
        if(this.isEmpty())return null;
        const poppedNode = this.first;
        this.first = poppedNode.next;
        this.size--;
        return poppedNode.val;
    }

    isEmpty(){
        return this.size === 0;
    }
}


class Queue{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(val){
        this.stack1.push(val)
    }

    dequeue(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop());
            }
        }
         this.stack2.pop()
        //  return this.stack1 = this.stack2;
    }

    display(){
        let current = this.stack2.first;

        while(current!=null){
            console.log(current.val);
            current = current.next;
        }

        let stack1Array = []
        current = this.stack1.first;

        while(current!=null){
            stack1Array.push(current.val);
            current = current.next;
        }

        stack1Array.forEach((value)=>console.log(value))
    }
}

const myQueue = new Queue();
myQueue.enqueue("first")
myQueue.enqueue("second")
myQueue.enqueue("third");
myQueue.dequeue()
myQueue.dequeue()
myQueue.display()
// console.log(myQueue);