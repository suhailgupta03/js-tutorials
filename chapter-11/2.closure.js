function greet(message) {
    var y = 1;
    return function() {
        console.log(message);
        console.log(y);
    } // Here we are returning a function
    // from the greet function
    // we call this as closure because the returned function
    // has access to the variables of the parent function
}

var x = greet('Hello');
x();