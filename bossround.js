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

