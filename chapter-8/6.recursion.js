function greet(level = 9) {
    if (level >= 10) {
      return; // Stop recursion after 10 levels
    }
    console.log(level);
    greet(level + 1)
  }
  
  // Initial call
  greet(0);
  // greet(0) -> greet(1) -> greet(2) -> ... -> greet(9) -> greet(10)