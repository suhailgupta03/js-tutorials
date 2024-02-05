// The bind() method creates a new function that, 
// when called, has its 'this' keyword set to the provided value.

function greet() {
    console.log("Hello, " + this.name + ". How are you?");

    var insideGreet = () => {
        console.log(this.name, " ...");
        // The above this will point to the 'this' of the parent function
        // because arrow functions do not have their own 'this'
    }

    var insideGreet2 = function() {
        console.log(this.name, " ...");
        // The above this will not point to the 'this' of the parent function
        // because normal functions have their own 'this'
    
    }
    insideGreet();
    insideGreet2();
}

const user = {
    name: "John"
};

const greetUser = greet.bind(user);
// Here greetUser is a new function, where this points to "user"
// this = user 

greetUser();