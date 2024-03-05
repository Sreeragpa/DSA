class Node{
    constructor(val){
        this.val=val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail =null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    sum(){
        let sum = 0;
        let temp = this.head;
        while(temp!=null){
           sum+= temp.val;
           temp = temp.next
        }
        return sum;
    }
    
}


const list = new SinglyLinkedList();
list.push(5)
list.push(10)
list.push(17)

console.log(list);
console.log(list.sum());










































