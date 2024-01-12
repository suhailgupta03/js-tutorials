/**
 * 
 * var z = x++;
 * 
 * JS Converts Into Following
 * z = x;
 * x = x + 1;
 * console.log(z);
 * ===
 * var z = ++x;
 * 
 * JS Converts Into Following:
 * z = x + 1
 * console.log(z)
 */