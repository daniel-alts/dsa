function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else if (arr[i] > pivot) {
            rightArr.push(arr[i]);
        }
    }

    // [3,5,7], [8] , [9, 10, 11]
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

// Example usage:
const arrayToSort = [5, 3, 8, 4, 2];
console.log("Original array:", arrayToSort);
console.log("Sorted array:", quickSort(arrayToSort));
