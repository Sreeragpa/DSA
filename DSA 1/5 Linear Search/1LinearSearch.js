function indexFinder(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return i
        }
    }
    return -1;
}

let arr1 = [1,2,3,4,5,66,7,8]

console.log(indexFinder(arr1,5));