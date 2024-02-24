function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const { leftArr, rightArr } = splitArray(arr); // split the array into two halves
    const leftSorted = mergeSort(leftArr);
    const rightSorted = mergeSort(rightArr);

    return merge(leftSorted, rightSorted);
}

function splitArray(arr) {
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return { leftArr, rightArr };
}

function merge(leftArr, rightArr) {
    let result = []; // the sorted array
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Example usage:
const arrayToSort = [5, 3, 8, 4, 2];
console.log("Original array:", arrayToSort);
console.log("Sorted array:", mergeSort(arrayToSort));
