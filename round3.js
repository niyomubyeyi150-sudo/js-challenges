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



// Challenge 16: fibonacci(n)
// Pseudocode:
// 1. Create an empty array for the Fibonacci numbers.
// 2. Start with a = 0 and b = 1.
// 3. Repeat n times.
// 4. Add a to the array.
// 5. Calculate the next number as a + b.
// 6. Move b into a and the next number into b.
// 7. Join the numbers with commas and spaces, then return the string.

function fibonacci(n) {
    const numbers = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        numbers.push(a);

        const next = a + b;
        a = b;
        b = next;
    }

    return numbers.join(", ");
}

// Tests
console.log("\nChallenge 16: Fibonacci");
console.log(fibonacci(8)); // "0, 1, 1, 2, 3, 5, 8, 13"
console.log(fibonacci(1)); // "0"
console.log(fibonacci(2)); // "0, 1"
console.log(fibonacci(0)); // "" (edge case)

// Comparison:
// Using a loop and two variables avoids complicated recursive calls.
// Recursion can look elegant, but it is less suitable for this beginner exercise.


// Challenge 17: guessingGameSimulator(secret)
// Pseudocode:
// 1. Set the lowest possible guess to 1 and highest to 100.
// 2. Set the guess count to zero.
// 3. While the lowest value is not greater than the highest:
//    a. Guess the middle of the remaining range.
//    b. Increase the guess count.
//    c. Print the guess.
//    d. If the guess equals secret, return the count.
//    e. If the guess is too low, move the lower limit up.
//    f. If the guess is too high, move the upper limit down.
// 4. Return -1 if secret is outside 1–100.

function guessingGameSimulator(secret) {
    if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
        console.log("Secret must be a whole number from 1 to 100.");
        return -1;
    }

    let low = 1;
    let high = 100;
    let guesses = 0;

    while (low <= high) {
        const guess = Math.floor((low + high) / 2);
        guesses++;

        console.log("Guess:", guess);

        if (guess === secret) {
            return guesses;
        } else if (guess < secret) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }

    return -1;
}

// Tests
console.log("\nChallenge 17: Guessing Game");
console.log("Secret 50, guesses:", guessingGameSimulator(50));
console.log("Secret 1, guesses:", guessingGameSimulator(1));
console.log("Secret 100, guesses:", guessingGameSimulator(100));
console.log("Secret 0, result:", guessingGameSimulator(0)); // edge case
