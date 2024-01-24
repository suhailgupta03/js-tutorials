console.log(x);
var x = 20;

/**
 * Javascript because of hoisting will convert the above code to
 * 
 * var x;
 * console.log(x);
 * x = 20;
 */

greet();
function greet() {
    console.log('Hello');
}

/**
 * Javascript because of hoisting will convert the above code to
 * 
 * function greet() {
 *   console.log('Hello');
 * }
 * 
 * greet();
 */