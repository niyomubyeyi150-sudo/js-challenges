# Week 4 – Logic Challenges

## Project Overview

This project contains my solutions to Workshop 2 JavaScript Logic Challenges. I used plain JavaScript and Node.js to practise problem-solving, loops, conditions, functions, and debugging.

## Project Structure

```text
week4-logic-challenges/
├── round1.js
├── round2.js
├── round3.js
├── boss.js
└── README.md
```

## Challenges

### Round 1 – Fundamentals 

| No. | Challenge 
|---|---|---:|
| 1 | Leap Year Checker 
| 2 | BMI Category 
| 3 | Moto Fare Calculator 
| 4 | Convert Seconds 
| 5 | Change Maker 


### Round 2 – String Challenges (2 points each)

| No. | Challenge
|---|---|---:|
| 6 | Reverse a String 
| 7 | Count a Character
| 8 | Palindrome Checker 
| 9 | Title Case 
| 10 | Mask Phone Number
| 11 | Longest Word 
| 12 | String Compression 


### Round 3 – Logic and Algorithms (3 points each)

| No. | Challenge 
|---|---|---:|
| 13 | Sum from 1 to n 
| 14 | Prime Number Checker 
| 15 | Pyramid Pattern
| 16 | Fibonacci Sequence |
| 17 | Guessing Game Simulator 


### Boss Round – Advanced Challenges (5 points each)

| No. | Challenge
|---|---|---:|
| 18 | Password Validator
| 19 | Roman Numeral Converter 
| 20 | National ID Checker 
|


## Rules Followed

- I wrote pseudocode comments before each solution.
- I tested each function with at least three `console.log()` calls, including an edge case.
- I used loops and avoided `.map()`, `.filter()`, and `.reduce()`.
- I organized the solutions into one file per round.
- I committed my work after solving each challenge.
- I added comments comparing readable and clever approaches in at least two challenges.


# how I runed the codes
node round1.js
node round2.js
node round3.js
node boss.js


The results will appear in the terminal.

## Debugging Experience

One issue I worked on was the pyramid pattern in Challenge 15. My first version printed a left-aligned triangle instead of a centered pyramid.

To investigate the problem, I compared the expected output with the actual output and checked how many spaces and stars each row contained. I corrected the loop that generates the leading spaces and used `2 * row - 1` to calculate the number of stars. I then ran the function again to check the pattern.

This helped me understand that debugging involves comparing expected and actual results, checking calculations and