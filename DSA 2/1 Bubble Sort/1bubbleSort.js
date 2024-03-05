
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }
        }
    }
    return arr
}




// function bubbleSort2(arr){
//     for(let i=arr.length-1;i>0;i--){
//         for(let j=0;j<i;j++){
//             if(arr[i]<arr[j]){
//                 [arr[i],arr[j]] = [arr[j],arr[i]];
//             }
//         }
//     }
//     return arr
// }



let arr1  = [1,6,4,5,9,0,12,56,23,77,0]

console.log(bubbleSort(arr1));

    