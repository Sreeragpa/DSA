class Heap{
    constructor(){
        this.heap= []
    }

    add(val){
        this.heap.push(val);
        this.heapify(this.heap.length-1)
    }

    heapify(currentIndex){
        if(currentIndex<=0)return
        let parentIndex = Math.floor((currentIndex -1)/2);
        
        if(this.heap[currentIndex]>this.heap[parentIndex]){
            [this.heap[currentIndex],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[currentIndex]];
            this.heapify(parentIndex)
        }
    }

    print(){
        console.log(this.heap);
    }
}

const myHeap = new Heap();

myHeap.add(4)
myHeap.add(6)
myHeap.add(3)
myHeap.add(2)
myHeap.add(9)
myHeap.add(7)
myHeap.add(6)
// [4,6,3,2,9,7,6]
myHeap.print()