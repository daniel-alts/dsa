const arr = [];

arr.push(1); // insert
arr.push(2);
arr.push(3);

// accessing
arr[0]

// removing
delete arr[0]; // removes the element but leaves a hole

console.log(arr); // [empty, 2, 3]

arr.pop(); // removes the last element
arr.shift(); // removes the first element
arr.splice(1, 1); // removes the element at index 1
arr.slice(1, 2); // returns a new array with the elements from index 1 to 2


// map function (element) => element * 2
// iterating
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// update
arr[0] = 4;

for (let element of arr) {
  if (element === 4) {
    console.log('found');
    element = 4
  }
}


