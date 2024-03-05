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
        newNode.next = this.first
        this.first = newNode;
        this.size++;
    }

    pop(){

        let poppedElement = this.first;
        this.first = this.first.next;
        this.size--;
        return poppedElement.val;
    }
}

let str = "sreerag";
const myStack = new Stack();

for(let i=0;i<str.length;i++){
    myStack.push(str[i]);
}

for(let i=0;i<str.length;i++){
    console.log(myStack.pop())
}