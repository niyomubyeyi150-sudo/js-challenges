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


// Challenge 2: getBMICategory(weightKg, heightM)
// Pseudocode:
// 1. If height is less than or equal to zero, return "Invalid height".
// 2. Calculate BMI = weight / (height * height).
// 3. Return the category based on the BMI value.

function getBMICategory(weightKg, heightM) {
    if (heightM <= 0) {
        return "Invalid height";
    }

    const bmi = weightKg / (heightM * heightM);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log("\nChallenge 2: BMI Category");
console.log(getBMICategory(50, 1.7));  
console.log(getBMICategory(70, 1.7)); 
console.log(getBMICategory(85, 1.7));

// Challenge 3: motoFare(km)
// Pseudocode:
// 1. If distance is less than or equal to zero, return zero.
// 2. If distance is at most 2 km, return 300.
// 3. Calculate extra kilometres using Math.ceil().
// 4. Return 300 plus 107 for each extra kilometre.

function motoFare(km) {
    if (km <= 0) {
        return 0;
    }

    if (km <= 2) {
        return 300;
    }

    const extraKm = Math.ceil(km - 2);
    return 300 + (extraKm * 107);
}

console.log("\nChallenge 3: Moto Fare");
console.log(motoFare(1));
console.log(motoFare(2));
console.log(motoFare(3));
 