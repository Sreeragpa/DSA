
// Helper Method Recursion

function collectOddNums(arr){
    let result = [];
    // Helper Method 
    function oddcheck(checkInput) {
        if(checkInput.length===0){
            return
        }
        if(checkInput[0]%2!==0){
            result.push(checkInput[0]);
        }
       
        return oddcheck( checkInput.slice(1))
    }
    oddcheck(arr)
    return result
}


let arr = [1,2,3,4,5,6];
console.log(collectOddNums(arr));

// Pure Recursion

function collectOdd(arr){
    let result = [];

    if(arr.length === 0 ){
        return result
    }
    if(arr[0]%2!==0){
        result.push(arr[0])
    }
    return result.concat(collectOdd(arr.slice(1)))
}

let array1 = [1,2,3,4,5]

console.log(collectOdd(array1));