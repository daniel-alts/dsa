const arr = [8, 5, 6, 7, 10, 2, 3, 4, 1, 9];

// sort this array in ascending order

const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // swap step
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        }
    }
    return arr;
};

// worst case time complexity is O(n^2)
// console.log(bubbleSort(arr))

// const arr = [8, 5, 6, 7, 10, 2, 3, 4, 1, 9];

const selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i; // 0
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr))

// const arr = [8, 5, 6, 7, 10, 2, 3, 4, 1, 9];

const insertionSort = (arr) => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i]; // 5
        let j = i - 1; // index 0
        while (j >= 0 && arr[j] > current) { // 8 > 5
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

