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
    get(index){
        if(index<0 || index>=this.length){
            return false
        }else if(index <= this.length/2){
            let pos = 0;
            let ele = this.head;
            while(pos!==index){
                pos++;
                ele = ele.next;
            }
            return ele
        }else{
            let pos = this.length-1;
            let ele = this.tail;
            while(pos!== index){
                pos--;
                ele=ele.prev
            }
            return ele;
        }
    }

    set(val,index){
        const setNode = this.get(index);
        if(setNode){
            setNode.val = val;
            return true;
        }
        return false;
    }



}

const list = new DoublyLinkedList;
list.push(5);
list.push(55);
list.push(545);
list.push(1);

list.set(500,0)


console.log(list);