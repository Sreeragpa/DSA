class Node{
    constructor(val){
        this.value = val;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(this.head === this.tail)this.tail = null;
        let prev;
        while(!this.tail){
             prev = this.tail.next;
            this.tail = this.tail.next;
        }
        prev.next = null;
        this.tail = prev;

    }

}

class queue{
    constructor(){
        let mystack = new Stack;
    }
    enqueue(val){
        let item = mystack.push(val)
        if(!mystack.head){
            
        }else{

        }
        this.size++;
    }


    // dequeue(){
    //     if(!this.first)return null;
        
    // }
}

let mystack = new Stack;

mystack.push('first');
mystack.push('second');
// mystack.pop()
console.log(mystack);