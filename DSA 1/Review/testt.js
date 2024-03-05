class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(val){
        const newNode = new Node(val);
        if(this.head ==null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail= newNode;
        }
        this.length++;
    }

    print(){
        let ele = this.head;
        while(ele!=null){
            console.log(ele);
            ele=ele.next;
        }
    }

    findMiddle(){
        let k = 0;
        let ele = this.head;
        if(this.head===null){
            return false
        }
        while(k<(this.length-1)/2){
            k++;
            ele = ele.next
        }
        return ele.val
    }
}

let list = new LinkedList;
list.add(5)
list.add(12)
list.add(15)
list.add(20)
list.add(40)

// list.print()
console.log(list.findMiddle());
