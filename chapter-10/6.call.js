function greet(message, arg2, arg3) {
    console.log("Hello, " + this.name + ". You have a new message: " + message);
    console.log(arg2, arg3);
}

var o = {name: "John Doe"}
var greetFn = greet.bind(o);
greetFn("Call me back!", 1, 2); // In this new function this points to o
// which means that this is eqivalent to: o = {name: "John Doe"}

greet.call(o, "Call me back!",1 ,2); // Hello, John Doe. You have a new message: Call me back!

/**
 * call function is similar to bind function except that it calls the function
 * immediately instead of returning a new function.
 */