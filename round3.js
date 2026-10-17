// Challenge 13: sumTo(n)
// Pseudocode:
// 1. Start total at zero.
// 2. Loop from 1 to n.
// 3. Add each number to total.
// 4. Return total.

// Method 1: Using a loop
function sumTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

// Method 2: Using the formula n * (n + 1) / 2
function sumToFormula(n) {
    return n * (n + 1) / 2;
}

// Tests: compare both methods
console.log("Challenge 13: Sum to n");
console.log(sumTo(5), sumToFormula(5));   // 15, 15
console.log(sumTo(10), sumToFormula(10)); // 55, 55
console.log(sumTo(1), sumToFormula(1));   // 1, 1
console.log(sumTo(0), sumToFormula(0));   // 0, 0 (edge case)

// Comparison:
// The loop is easier to follow when learning addition step by step.
// The formula is shorter and faster for large n because it avoids a loop.