/**
 * One of the very good use case of IIFE is to create 
 * private variables and functions.
 */
(function() {
    var x = 20; // x is private
    function greet() { // greet is also a private function
        console.log('Hi', x);
    }
    greet();
})();

