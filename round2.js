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


// Challenge 8: isPalindrome(str)
// Pseudocode:
// 1. Convert the string to lowercase.
// 2. Remove spaces, punctuation, and other non-alphanumeric characters.
// 3. Compare characters from the beginning and end.
// 4. If any pair differs, return false.
// 5. If every pair matches, return true.

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Tests
console.log("\nChallenge 8: isPalindrome");
console.log(isPalindrome("Never odd or even"));
console.log(isPalindrome("Hello"));             
console.log(isPalindrome("A man, a plan, a canal: Panama!")); 
console.log(isPalindrome(""));                  

// Readability vs. cleverness:
// Comparing characters from both ends avoids building a second reversed string.
// Building a cleaned string and reversing it can be simpler to read,
// but the loop above demonstrates the comparison directly.


// Challenge 8: isPalindrome(str)
// Pseudocode:
// 1. Convert the string to lowercase.
// 2. Remove spaces, punctuation, and other non-alphanumeric characters.
// 3. Compare characters from the beginning and end.
// 4. If any pair differs, return false.
// 5. If every pair matches, return true.

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Tests
console.log("\nChallenge 8: isPalindrome");
console.log(isPalindrome("Never odd or even"));
console.log(isPalindrome("Hello"));             
console.log(isPalindrome("A man, a plan, a canal: Panama!")); 
console.log(isPalindrome(""));                  

// Readability vs. cleverness:
// Comparing characters from both ends avoids building a second reversed string.
// Building a cleaned string and reversing it can be simpler to read,
// but the loop above demonstrates the comparison directly.