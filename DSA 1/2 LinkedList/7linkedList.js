
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

    pop(){
        let temp=this.head;
        let prev = temp;
        if(this.head===null){
            return undefined
        }else{
            while(temp.next!=null){
                prev = temp;
                temp=temp.next
            }

            this.tail=prev;
            this.tail.next = null;
            this.length--;
            if(this.length===0){
                this.head=null;
                this.tail=null;
            }
            return temp
        }

    }
    
    shift(){
        let temp = this.head
        if(!temp){
            return undefined
        }
            if(!temp.next){
                this.tail = null;
            }
            
            this.head = temp.next;
            this.length--;
           
        }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
    }

    get(index){
        if(index<0 || index >= this.length ){
            return null
        }else{
            let pos =0;
            let ele = this.head;
            while(pos!==index){
                pos++;
                ele = ele.next
            }
            return ele
        }
    }

    set(index,val){
        const ele = this.get(index);
        if(!ele){
            return false
        }
        ele.val = val
        return this
    }

    insert(index,val){
        if(index<0 || index>this.length){
            return false
        }
        if(index===this.length){
            return this.push(val)
        }
        if(index===0){
            return this.unshift(val)
        }
        let prev = this.get(index-1);
        const newNode = new Node(val);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        
        

    }
  
    
}

let list = new SinglyLinkedList();

list.push(15);
list.push(20);
list.push(25);

list.insert(2,200);
console.log(list);