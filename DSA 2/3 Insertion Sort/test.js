function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let curr = arr[i];
        for(let j=i-1;j>=0;j--){
            if(arr[j]>curr){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }else{
                break;
            }
        }
    }
    return arr
}

let arr1 = [45,2,90,1,900,-12]

console.log(insertionSort(arr1));