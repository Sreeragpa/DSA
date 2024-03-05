let arr1 = [2,3,4,5,7,9,10,12,23];

function binarySearch(arr,target){
    let left = 0;
    let right = arr1.length-1;
    let mid = Math.floor((left+right)/2);

    while(left<=right){
        if(target==arr[mid]){
            arr[mid]=0;
            return arr
        }
        if(target<arr[mid]){
            right = mid-1;
        }else{
            left = mid + 1;
        }
        mid = Math.floor((left+right)/2);
    }
    return 0
}

console.log(binarySearch(arr1,9));

