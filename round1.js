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
 

// Challenge 4: convertSeconds(total)
// Pseudocode:
// 1. Calculate hours by dividing total seconds by 3600.
// 2. Find the remaining seconds.
// 3. Calculate minutes from the remaining seconds.
// 4. Find the remaining seconds again.
// 5. Use padStart() to make minutes and seconds two digits.
// 6. Return the formatted string.

function convertSeconds(total) {
    const hours = Math.floor(total / 3600);
    const remainingAfterHours = total % 3600;

    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${hours}h ${formattedMinutes}m ${formattedSeconds}s`;
}

console.log("\nChallenge 4: Convert Seconds");
console.log(convertSeconds(7509));  
console.log(convertSeconds(3600)); 
console.log(convertSeconds(0));    


// Challenge 5: changeMaker(amount)
// Pseudocode:
// 1. Store the denominations from largest to smallest.
// 2. For each denomination, calculate how many pieces fit.
// 3. Print the denomination and its count if the count is greater than zero.
// 4. Subtract the value of those pieces from the remaining amount.
// 5. Continue until all denominations have been checked.

function changeMaker(amount) {
    if (amount < 0 || !Number.isInteger(amount)) {
        console.log("Please enter a non-negative whole amount.");
        return;
    }

    const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const count = Math.floor(amount / denomination);

        if (count > 0) {
            console.log(`${count} x ${denomination}`);
            amount = amount % denomination;
        }
    }
}

console.log("\nChallenge 5: Change Maker");
console.log("Amount: 7385");
changeMaker(7385);

console.log("\nAmount: 10");
changeMaker(10);

console.log("\nAmount: 0");
changeMaker(0); 