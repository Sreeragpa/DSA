class Node{
   constructor(value){
    this.value = value;
    this.next = null;
   }
}

class queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode
        }
        this.size++;
    }
    dequeue(){
        if(!this.first)return null;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
    }
}

const myQueue = new queue;

myQueue.enqueue("first");
myQueue.enqueue("second");
myQueue.enqueue("third");

myQueue.dequeue()
console.log(myQueue);