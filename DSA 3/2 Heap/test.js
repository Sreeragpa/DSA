class MinHeap{
    constructor(){
        this.heap =[];
        this.size = 0;
    }

    parent(index){
        return this.heap[Math.floor((index-1) /2)];
    }

    rightChild(index){
        return this.heap[index*2 + 2]
    }

    leftChild(index){
        return this.heap[index*2 + 1]
    }

    hasParent(index){
        if(this.heap[Math.floor((index-1) /2)]){
            return true
        }else{
            return false
        }
    }

    hasLeftChild(index){
        if(this.heap[index*2 + 1]){
            return true
        }else{
            return false
        }
    }

    hasRightChild(index){
        if(this.heap[index*2 + 2])return true
        return false
    }

    getParentIndex(index){
        return Math.floor((index-1) /2)
    }

    getLeftChildIndex(index){
        return index*2 + 1
    }

    getRightChildIndex(index){
        return index*2 + 2
    }

    add(val){
        this.heap.push(val);
        this.size++;
        this.heapifyUp()
    }

    poll(){
        this.heap[0] = this.heap.pop();
        this.size--;
        this.heapifyDown()
    }

    heapifyUp(){
        let index = this.size - 1 ;

        while(this.hasParent(index) && this.parent(index)>this.heap[index]){
            [this.heap[index],this.heap[this.getParentIndex(index)]] =   [this.heap[this.getParentIndex(index)],this.heap[index]];
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(){
        let index = 0;

        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index);

            if(this.hasRightChild(index) && this.rightChild(index)<this.leftChild(index)){
                smallerChildIndex = this.getRightChildIndex(index)
            }

            if(this.heap[index]>this.heap[smallerChildIndex]){
                [this.heap[index],this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex],this.heap[index]]
            }else{
                break;
            }
            
            index = smallerChildIndex;

        }
    }

    display(){
        console.log(this.heap);
    }
}


const myheap = new MinHeap();

myheap.add(45)
myheap.add(4)
myheap.add(90)
myheap.add(12)
myheap.add(9)
myheap.add(7)
myheap.add(99)
myheap.poll()
myheap.poll()   
myheap.display()