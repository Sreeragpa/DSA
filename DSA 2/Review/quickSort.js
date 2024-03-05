function quickSort(arr){
    if(arr.length<=1) return arr
    let pivot = arr[arr.length-1];
    let right =[];
    let left =[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left),pivot,...quickSort(right)];
}

let arrr = [56,-9,567,2,1,9];
console.log(quickSort(arrr))