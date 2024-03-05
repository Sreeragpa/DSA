
function binarySearch(arr,ele){
    let left = 0;
    let right = arr.length-1;
    let mid = Math.floor((left+right)/2);

    while(left<=right){ 
        if(ele === arr[mid]){
            return mid
        }
        if(ele<arr[mid]){
            right = mid-1
        }else{
            left = mid+1
        }
        mid = Math.floor((left+right)/2);
    }

    if(arr[mid]==ele){
        return mid
    }else{
        return -1
    }

}

let myarr = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(myarr,100));