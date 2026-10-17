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

## Challenges and Points

### Round 1 – Fundamentals (1 point each)

| No. | Challenge | Points |
|---|---|---:|
| 1 | Leap Year Checker | 1 |
| 2 | BMI Category | 1 |
| 3 | Moto Fare Calculator | 1 |
| 4 | Convert Seconds | 1 |
| 5 | Change Maker | 1 |
| | **Round 1 Total** | **5** |

### Round 2 – String Challenges (2 points each)

| No. | Challenge | Points |
|---|---|---:|
| 6 | Reverse a String | 2 |
| 7 | Count a Character | 2 |
| 8 | Palindrome Checker | 2 |
| 9 | Title Case | 2 |
| 10 | Mask Phone Number | 2 |
| 11 | Longest Word | 2 |
| 12 | String Compression | 2 |
| | **Round 2 Total** | **14** |

### Round 3 – Logic and Algorithms (3 points each)

| No. | Challenge | Points |
|---|---|---:|
| 13 | Sum from 1 to n | 3 |
| 14 | Prime Number Checker | 3 |
| 15 | Pyramid Pattern | 3 |
| 16 | Fibonacci Sequence | 3 |
| 17 | Guessing Game Simulator | 3 |
| | **Round 3 Total** | **15** |

### Boss Round – Advanced Challenges (5 points each)

| No. | Challenge | Points |
|---|---|---:|
| 18 | Password Validator | 5 |
| 19 | Roman Numeral Converter | 5 |
| 20 | National ID Checker | 5 |
| | **Boss Round Total** | **15** |

### Total Points

- Round 1: 5 points
- Round 2: 14 points
- Round 3: 15 points
- Boss Round: 15 points

**Maximum available: 49 points.**

My actual points earned: **[Enter the points for the challenges you completed successfully.]**

## Rules Followed

- I wrote pseudocode comments before each solution.
- I tested each function with at least three `console.log()` calls, including an edge case.
- I used loops and avoided `.map()`, `.filter()`, and `.reduce()`.
- I organized the solutions into one file per round.
- I committed my work after solving each challenge.
- I added comments comparing readable and clever approaches in at least two challenges.

## How to Run the Code

Make sure Node.js is installed. Open a terminal in the project folder and run each file separately:

```bash
node round1.js
node round2.js
node round3.js
node boss.js
```

The results will appear in the terminal.

## Debugging Experience

One issue I worked on was the pyramid pattern in Challenge 15. My first version printed a left-aligned triangle instead of a centered pyramid.

To investigate the problem, I compared the expected output with the actual output and checked how many spaces and stars each row contained. I corrected the loop that generates the leading spaces and used `2 * row - 1` to calculate the number of stars. I then ran the function again to check the pattern.

This helped me understand that debugging involves comparing expected and actual results, checking calculations and