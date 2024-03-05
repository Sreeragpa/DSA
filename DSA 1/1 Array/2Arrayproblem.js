
let arr = [2,4,5,6,9];
let target =10;

    function findtargetSum(arr,target){
        const newSet = new Set();
        for (let index = 0; index < arr.length; index++) {        //O(n)
            if(newSet.has(target-arr[index])){                    //O(1)
                console.log(arr[index],target-arr[index]);
            }else{
                newSet.add(arr[index])                            //O(1) 
            }
            
        }
    }

    findtargetSum(arr,target)

    //O(n) ST

    