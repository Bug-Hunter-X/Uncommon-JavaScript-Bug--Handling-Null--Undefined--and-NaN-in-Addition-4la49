function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // The bug is here, it does not handle undefined or NaN values
}