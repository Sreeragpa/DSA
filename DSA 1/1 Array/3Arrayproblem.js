let arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 6, 6];
let target = 6;
let lastIndex = arr.length - 1;

for (let i = 0; i < lastIndex + 1; i++) {
    while (arr[lastIndex] === target) {
        lastIndex--;
    }
    if (arr[i] == target) {
        arr[i] = arr[lastIndex];
        arr[lastIndex] = target;
    }
}

console.log(arr);