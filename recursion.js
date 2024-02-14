const log = (n) => {
    if (n <= 1) { // base case
        return;
    }

    console.log(n);
    const nextVale = n - 1 // iterative step
    log(nextVale); // 
}

// log(5)
// [log(5), log(4), log(3), log(2), log(1), log(0)]


// factorial(n), factorial(n) = 5 * 4 * 3 * 2 * 1, where n = 5

function factorial(n) { 
    if (n === 1) { // base case
        return 1; 
    } else { 
        return n * factorial(n - 1);  // iterative step
    } 
}

// function stack
[
    factorial(5), // n = 5, 5 * factorial(4)
    factorial(4), // n = 4, 4 * factorial(3)
    factorial(3), // n = 3, 3 * factorial(2)
    factorial(2), // n = 2, 2 * factorial(1)
    factorial(1), // n = 1, 1
]

// 1 * 2 * 3 * 4 * 5 = 120

console.log(factorial(5));
