function pivot(arr,start = 0 ,end = arr.length+1){
    let pivot = arr[start];
    let swapIdx = start;
    
    for(let i=start+1;i<arr.length;i++){
        if(arr[i]<pivot){
            swapIdx++;
            [arr[swapIdx],arr[i]] = [arr[i],arr[swapIdx]]
        }
    }
    [arr[start],arr[swapIdx]]
    return arr
}

let arr1 =[2,1,9,3];

console.log(pivot(arr1));

