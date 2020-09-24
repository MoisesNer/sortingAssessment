let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];


const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // console.log(`i=${i} j=${j}`)
            if (arr[j] > arr[j+1]) {
                let escape = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = escape;
            }
        }
        // console.log(arr[i])
    }
    return arr;
};

console.log(bubbleSort(nums));
console.log(bubbleSort(otherNums));
console.log(bubbleSort(finalTest));