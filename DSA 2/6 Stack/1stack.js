class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first =null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp
        }
        this.size++;
    }
    pop(){
        if(!this.first)return null;
        if(this.first === this.last)this.last = null;
        this.first = this.first.next;
        this.size--;
    }
}

let stack = new Stack;
stack.push(55);
stack.push("hellloo");
stack.pop()
stack.pop()
console.log(stack);