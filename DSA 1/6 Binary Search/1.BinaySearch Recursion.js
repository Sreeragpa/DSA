function binarySearch(arr,ele){
    let left = 0;
    let right = arr.length-1;
    function helper(){
        let mid = Math.floor((left+right)/2);
        if(ele==arr[mid]){
            return mid;
        }
        if(left<=right){
            if(ele>arr[mid]){
                left = mid+1;
            }else{
                right = mid-1;
            }
            return helper()
        }else{
            return -1
        }
    }
    const found = helper(arr);
    return found

    
}

let myarr = [1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(myarr,6));
