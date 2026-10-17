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
console.log(reverseString("hello")); 
console.log(reverseString("Kigali")); 
console.log(reverseString(""));     

// Readability vs. cleverness:
// A loop makes each reversal step easy for beginners to understand.
// Using split(), reverse(), and join() is shorter but violates this challenge's rule.


// Challenge 7: countChar(str, char)
// Pseudocode:
// 1. Convert the input string and target character to lowercase.
// 2. Set count to zero.
// 3. Loop through each character in the string.
// 4. If it matches the target, increase count.
// 5. Return count.

function countChar(str, char) {
    let count = 0;
    const lowerStr = str.toLowerCase();
    const lowerChar = char.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }

    return count;
}

// Tests
console.log("\nChallenge 7: countChar");
console.log(countChar("Banana", "a"));
console.log(countChar("Hello", "L")); 
console.log(countChar("Hello", "z")); 