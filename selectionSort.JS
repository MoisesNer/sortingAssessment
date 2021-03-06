let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length -1; i++) {
        // min value
        let minValue = arr[i];
        // save min index
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (minValue > arr[j]) {
                minValue = arr[j];
                minIndex = j; 
            }
        }
        // Swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSort(nums));
console.log(selectionSort(otherNums));
console.log(selectionSort(finalTest));