/**
 * Following is a function definition:
 *  - that adds two numbers
 *  - has x and y as parameters
 *  - and prints the result
 */
function sum(x, y) {
    /**
     * x and y are called parameters or arguments
     */
    var z = x + y;
    console.log(z);
}

/**
 * Here we are calling the function sum with different arguments
 * - sum(2, 3) will add 2 and 3
 * 2 gets assigned to x and 3 gets assigned to y
 */
sum(2, 3);      // to call the function,we use the function name followed by parenthesis
sum(10, 20);    // to call the function,we use the function name followed by parenthesis
sum(99, 88);    // to call the function,we use the function name followed by parenthesis
sum(99, 1)