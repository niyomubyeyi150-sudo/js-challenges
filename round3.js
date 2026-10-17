// Challenge 13: sumTo(n)
// Pseudocode:
// 1. Start total at zero.
// 2. Loop from 1 to n.
// 3. Add each number to total.
// 4. Return total.

function sumTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}
// Tests: compare both methods
console.log("Challenge 13: Sum to n");
console.log(sumTo(5));   // 15, 15
console.log(sumTo(10)); // 55, 55
console.log(sumTo(1));   // 1, 1
console.log(sumTo(0));   // 0, 0 (edge case)

// Challenge 14: isPrime(n)
// Pseudocode:
// 1. If n is less than 2, return false.
// 2. Loop from 2 up to the square root of n.
// 3. If n is divisible by any number in the loop, return false.
// 4. If no divisor is found, return true.

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Tests
console.log("\nChallenge 14: Prime Number");
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(2));  // true



 // Challenge 15: printPyramid(rows)
 // Pseudocode:
 // 1. Loop from row 1 to rows.
 // 2. Add spaces before the stars to center each row.
 // 3. Calculate stars using 2 * row - 1.
 // 4. Print the spaces and stars together.

function printPyramid(rows) {
    for (let row = 1; row <= rows; row++) {
        let spaces = "";
        let stars = "";

        // Add spaces before the stars
        for (let j = 1; j <= rows - row; j++) {
            spaces += " ";
        }

        // Add an odd number of stars
        for (let j = 1; j <= (2 * row - 1); j++) {
            stars += "*";
        }

        console.log(spaces + stars);
    }
}

// Tests
console.log("Pyramid with 4 rows:");
printPyramid(4);

// Expected:
//    *
//   ***
//  *****
// *******

console.log("Pyramid with 1 row:");
printPyramid(1);

// Expected:
// *

console.log("Pyramid with 0 rows:");
printPyramid(0);

// Expected: no output (edge case)
