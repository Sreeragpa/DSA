function insertionSort(arr){
    let temp;
    for(let i=1;i<arr.length;i++){
        let curr = arr[i];
        for(let j=i-1;j>=0;j--){
            if(curr<arr[j]){
                // temp = arr[j]
                // arr[j] = curr;
                // arr[j+1] = temp;
                arr[j+1] = arr[j] ;
                arr[j] = curr
            }else{
                break;
            }
        }
    }
    return arr
}

let arr1 = [1,100,43,-2,90,900,22];

console.log(insertionSort(arr1));