function findOdd(arr){
    let odds = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
           odds.push(arr[i])
        }
    }
    return odds;
}

let arr1 = [1,2,3,4,5,66,7,8]

console.log(findOdd(arr1));