# Uncommon JavaScript Bug: Handling Null, Undefined, and NaN in Addition

This repository demonstrates a common yet easily overlooked bug in JavaScript related to handling null, undefined, and NaN values during arithmetic operations.  The bug involves incorrect handling of edge cases leading to unexpected behavior or runtime errors.

## Bug Description

The JavaScript function `foo` intends to add two numbers. However, it only explicitly checks for `null` values and does not properly handle cases where either input is `undefined` or `NaN` (Not a Number). This oversight can lead to incorrect results or runtime exceptions depending on the context.

## Solution

The improved version includes robust checks for `undefined` and `NaN` values using `typeof` and `isNaN` operators respectively, ensuring that the function behaves correctly in all cases.  The solution provides a more resilient and reliable way to handle various input types.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run the function `foo` with different inputs to observe the bug. 
3. Compare the output with the expected result.
4. Run the corrected function in `bugSolution.js` to see the improved behavior.