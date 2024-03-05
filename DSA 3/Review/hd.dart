class Heap {
  List<int> heap = [];

  void insert(List<int> arr){

    for(int i in arr){
      heap.add(i);
      heapifyUp(heap.length - 1);
    }
  }

  void heapifyUp(int current){
    if(current < 2) return;

    int parent = (current - 1) ~/2;

    if(heap[current] > heap[parent]){
      swap(current,parent);
      heapifyUp(parent);
    }
  }

  void swap(int current , int parent){
    int temp = heap[current];
      heap[current] = heap[parent];
      heap[parent] = temp;
  }
}

void main(){
  final heap = Heap();
  heap.insert([2,4,5,6,1,3,8,9,2]);
  print(heap.heap);
}