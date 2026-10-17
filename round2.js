// Challenge 6: reverseString(str)
// Pseudocode:
// 1. Create an empty string called reversed.
// 2. Loop through the input from the last character to the first.
// 3. Add each character to reversed.
// 4. Return reversed.

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Tests
console.log("Challenge 6: reverseString");
console.log(reverseString("hello"));  // "olleh"
console.log(reverseString("Kigali")); // "ilagiK"
console.log(reverseString(""));       // "" (edge case)

// Readability vs. cleverness:
// A loop makes each reversal step easy for beginners to understand.
// Using split(), reverse(), and join() is shorter but violates this challenge's rule.