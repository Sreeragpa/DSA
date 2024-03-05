function checkDivisible(arr,num){
    let divisibleNums = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]%num==0){
            divisibleNums.push(arr[i])
        }
    }
    return divisibleNums;
}

let arr1 = [1,2,3,4,5,66,7,8]

console.log(checkDivisible(arr1,2));