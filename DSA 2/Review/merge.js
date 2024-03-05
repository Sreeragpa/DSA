function merge(arr1,arr2){
    let result = [];
    let i=0,j=0,k=0;
    const size = arr1.length + arr2.length;
    
    while(k<size){
        k++;
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++
        }else if(arr1[i]>arr2[j]){
            result.push(arr2[j]);
            j++;
        }else{
            if(i<arr1.length){
                result.push(arr1[i])
                i++;
            }else{
                result.push(arr2[j]);
                j++;
            }
        }
    }
    return result;
}

function mergeSort(arr){
    if(arr.length<=1)return arr
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(mid);

    return merge(left,right)
}