// Challenge 18: validatePassword(pw)
// Pseudocode:
// 1. Create an empty errors array.
// 2. Check whether the password has at least 8 characters.
// 3. Check for an uppercase letter.
// 4. Check for a lowercase letter.
// 5. Check for a digit.
// 6. Check for a special character from !@#$%^&*.
// 7. Check that the password contains no spaces.
// 8. Return an object containing valid and errors.

function validatePassword(pw) {
    const errors = [];

    if (pw.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[A-Z]/.test(pw)) {
        errors.push("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(pw)) {
        errors.push("Password must contain a lowercase letter.");
    }

    if (!/[0-9]/.test(pw)) {
        errors.push("Password must contain a digit.");
    }

    if (!/[!@#$%^&*]/.test(pw)) {
        errors.push("Password must contain a special character (!@#$%^&*).");
    }

    if (/\s/.test(pw)) {
        errors.push("Password must not contain spaces.");
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

// Tests
console.log("Challenge 18: Password Validation");
console.log(validatePassword("Nadine@123")); // Valid
console.log(validatePassword("abc"));        // Several errors
console.log(validatePassword("Nadine 123!")); // Error: contains a space
console.log(validatePassword(""));            // Edge case: empty password

// Readability vs. cleverness:
// Checking each rule separately makes errors easy to understand.
// Combining all rules into one large condition is shorter but harder to debug.


// Challenge 19: romanNumeral(n)
// Pseudocode:
// 1. If n is not an integer from 1 to 3999, return "Invalid".
// 2. Store Roman numeral values from largest to smallest.
// 3. Loop through each value.
// 4. While n is at least that value, add its symbol to the result.
// 5. Subtract that value from n.
// 6. Return the completed Roman numeral.

function romanNumeral(n) {
    if (!Number.isInteger(n) || n < 1 || n > 3999) {
        return "Invalid";
    }

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (n >= values[i]) {
            result += symbols[i];
            n -= values[i];
        }
    }

    return result;
}

// Tests
console.log("\nChallenge 19: Roman Numerals");
console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(2026)); // MMXXVI
console.log(romanNumeral(1));    // I
console.log(romanNumeral(3999)); // MMMCMXCIX
console.log(romanNumeral(0));    // Invalid (edge case)

// Readability vs. cleverness:
// Two arrays clearly connect each number to its symbol.
// A long chain of nested conditions would be harder to maintain.
