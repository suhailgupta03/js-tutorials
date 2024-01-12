var x = 100;

var z = x++;
// x++ is a shorthand for x = x + 1
// It first assigns the value of x to z
// then increments the value of x by 1
/**
 * The above code is same as:
 * var old = x;
 * x = x + 1;
 * console.log(x);
 * console.log(old);
 */
console.log(x);
console.log(z);