// The bind() method creates a new function that, 
// when called, has its 'this' keyword set to the provided value.

function greet() {
    console.log("Hello, " + this.name + ". How are you?");
}

const user = {
    name: "John"
};

const greetUser = greet.bind(user);
// Here greetUser is a new function, where this points to "user"
// this = user 

greetUser();

let userNew = {
    name: "Mark"
};

const greetUserNew = greet.bind(userNew);
greetUserNew();