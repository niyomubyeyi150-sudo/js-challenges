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



// Challenge 9: titleCase(str)
// Pseudocode:
// 1. Convert the sentence to lowercase.
// 2. Split the sentence into words.
// 3. Loop through each word.
// 4. Capitalize the first letter of each word.
// 5. Join the words with spaces and return the result.

function titleCase(str) {
    const words = str.toLowerCase().split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i][0].toUpperCase() + words[i].slice(1);
        }

        if (i < words.length - 1) {
            result += " ";
        }
    }

    return result;
}

console.log(titleCase("welcome to kigali tech hub"));
console.log(titleCase("HELLO WORLD"));
console.log(titleCase("javascript"));
console.log(titleCase(""));



// Challenge 10: maskPhone(phone)
// Pseudocode:
// 1. Check that the phone number contains exactly 10 digits.
// 2. Check that it starts with "07".
// 3. If either check fails, return "Invalid".
// 4. Keep the first 3 digits and last 3 digits.
// 5. Replace the 4 middle digits with asterisks and return the result.

function maskPhone(phone) {
    if (!/^07[0-9]{8}$/.test(phone)) {
        return "Invalid";
    }

    return phone.slice(0, 3) + "****" + phone.slice(-3);
}

console.log("\nChallenge 10: maskPhone");
console.log(maskPhone("0788123456")); // "078****456"
console.log(maskPhone("0712345678")); // "071****678"
console.log(maskPhone("12345"));      // "Invalid" 
console.log(maskPhone("07AB123456"));


// Challenge 11: longestWord(sentence)
// Pseudocode:
// 1. Split the sentence into words.
// 2. Set longest to an empty string.
// 3. Loop through the words.
// 4. Remove punctuation at the beginning and end of each word.
// 5. If a word is longer than longest, save it.
// 6. Return longest. Do not replace it when lengths are equal.

function longestWord(sentence) {
    const words = sentence.split(/\s+/);
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i].replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// Tests
console.log("\nChallenge 11: longestWord");
console.log(longestWord("I love programming")); // "programming"
console.log(longestWord("small big"));          // "small" (tie: first wins)
console.log(longestWord(""));                   // "" (edge case)

