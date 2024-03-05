function heapify(arr,length,parentIndex){
    let largest = parentIndex;
    let left = parentIndex*2 + 1;
    let right = left + 1;

    if(left<length && arr[left]>arr[largest]){
        largest = left
    }

    if(right<length && arr[right]>arr[largest]){
        largest = right
    }

    if(largest!=parentIndex){
        [arr[parentIndex],arr[largest]]  = [arr[largest],arr[parentIndex]];
        heapify(arr,length,largest)
    }

    return arr
}

function heapSort(arr){
    const length = arr.length;
    let lastParentIndex = Math.floor(length /2 -1);
    // let lastChildIndex = length - 1;

    while(lastParentIndex>=0){
        heapify(arr,length,lastParentIndex);
        lastParentIndex--;
    }

    // while(lastChildIndex>=0){
    //     [arr[0],arr[lastChildIndex]] = [arr[lastChildIndex],arr[0]]
    //     heapify(arr,length,lastChildIndex);
    //     lastChildIndex--;
    // }

    return arr
}


function remove(arr){
    let heapedArr = heapSort(arr)
    const poppedNode = heapedArr.pop();
    heapedArr[0]  = poppedNode;
    return heapSort(heapedArr)
}

let arr1 = [4,6,3,2,9];
console.log(heapSort(arr1));
console.log(remove(arr1));


