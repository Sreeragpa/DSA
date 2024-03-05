class MaxHeap{
    constructor(){
        this.Heap = [];
        this.size = 0;
    }

    parent(index){
        return this.Heap[Math.floor((index - 1) /2)];
    }
    leftChild(index){
        return this.Heap[index*2 + 1]
    }
    rightChild(index){
        return this.Heap[index*2 + 1]
    }

    getParentIndex(index){
        return Math.floor((index - 1) /2)
    }

    getLeftChildIndex(index){
        return index*2 + 1
    }

    getRightChildIndex(index){
        return index*2 + 2
    }

    hasLeftChild(index){
        if(this.Heap[index*2 + 1])return true
        return false
    }
    hasRigthChild(index){
        if(this.Heap[index*2 + 2])return true
        return false
    }
    hasParent(index){
        if(this.getParentIndex(index)<0)return false;
        return true
    }

    add(val){
        this.Heap.push(val);
        this.size++;
        this.HeapifyUp();
    }

    poll(){
        this.Heap[0] = this.Heap.pop();
        this.size--;
        this.HeapifyDown()
    }

    HeapifyUp(){
        let index = this.size - 1;

        while(this.hasParent(index) && this.parent(index)<this.Heap[index]){
            [this.Heap[this.getParentIndex(index)],this.Heap[index]] = [this.Heap[index],this.Heap[this.getParentIndex(index)]]
            index = this.getParentIndex(index)
        }
    }

    HeapifyDown(){
        let index = 0;

        while(this.hasLeftChild(index)){
            let biggerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRigthChild(index) && this.rightChild(index)>this.leftChild(index)){
                biggerChildIndex = this.getRightChildIndex(index);
            }

            if(this.Heap[index]<this.Heap[biggerChildIndex]){
                [this.Heap[index], this.Heap[biggerChildIndex]] = [this.Heap[biggerChildIndex], this.Heap[index]];

            }else{
                break;
            }

            index = biggerChildIndex;
        }
    }



    display(){
        console.log(this.Heap);
    }


}

const maxheap = new MaxHeap();

maxheap.add(5)
maxheap.add(10)
maxheap.add(2)
maxheap.add(29)
maxheap.add(19)

maxheap.poll()
maxheap.display()

