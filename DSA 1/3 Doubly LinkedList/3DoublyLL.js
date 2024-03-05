class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(this.head === null){
            return false
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            
        }
        this.length--;
        return true
    }

    shift(){
        if(!this.head){
            return false;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let nextNode = this.head.next;
            nextNode.prev = null;
            this.head.next = null;
            this.head = nextNode;
        }
        this.length--;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let currHead = this.head;
            newNode.next = currHead;
            currHead.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }


}

const list = new DoublyLinkedList;
list.push(5);
list.push(55);
list.push(545);
// list.pop()

list.unshift(1)
list.unshift(67)

console.log(list);