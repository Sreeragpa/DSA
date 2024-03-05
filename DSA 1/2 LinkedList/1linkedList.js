
// Piece of data - val
// Reference to the next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.head===null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this

    }
}

let list = new SinglyLinkedList();

list.push(15);
list.push(155);
list.push("hee");

console.log(list.head.next);
console.log(list.head.next.next);


// let first = new Node('hii');
// first.next = new Node("hehe");
// first.next.next = new Node('helooo')

// console.log(first);