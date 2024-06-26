
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

    remove(index){
        if(index<0 || index>=this.length)return false;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop()
        const pre = this.get(index-1);
        const toDel = pre.next
        pre.next = toDel.next
        this.length--;
    }
    
    reverse(){
        let currNode = this.head;
        let prevNode = null;
        let nextNode ;
        this.head = this.tail;
        this.tail = currNode;

        while(currNode!==null){
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
    }
    

    printme(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.val);
            temp = temp.next;
        }
    }
    
}

let list = new SinglyLinkedList();

list.push(15);
list.push(20);
list.push(25);
list.push(30);



list.reverse()
// list.printme()
console.log(list);



// reverse(){
//         let currNode = this.head;
//         let nextNode;
//         let prev = null;
//         this.head = this.tail;
//         this.tail = currNode;

//         while(currNode!==null){
//             nextNode = currNode.next;
//             currNode.next = prev;
//             prev = currNode;
//             currNode = nextNode 
//         }
    
//     }