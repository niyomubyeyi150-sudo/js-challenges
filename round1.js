// Challenge 1: isLeapYear(year)
// Pseudocode:
// 1. If year is divisible by 400, return true.
// 2. Otherwise, if divisible by 100, return false.
// 3. Otherwise, if divisible by 4, return true.
// 4. Otherwise, return false.

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Challenge 1: Leap Year");
console.log(isLeapYear(2024));
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 


