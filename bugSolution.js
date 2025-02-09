function foo(a, b) {
  //Improved version to handle null, undefined, and NaN
  if (a === null || a === undefined || isNaN(a) || b === null || b === undefined || isNaN(b)) {
    return 0; // Handle null, undefined, and NaN values
  }
  return a + b; //Addition operation
} 