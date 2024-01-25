console.log(x());
/**
 * The above statment will crash because 
 * the function is not defined yet and x is just
 * a variable with no value assigned to it.
 */

var x = function() {
    return 3 + 2;
}

/**
 * The above variable will be hoisted to the top
 */

