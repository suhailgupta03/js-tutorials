function callMe() {
    console.log("I am callMe function")
}

function greet() {
    console.log("I am greet function")
}

setTimeout(greet, 2000);
/**
 * greet is a callback function because it is called
 * at a later time by the setTimeout function
 * 
 * 2000 is the time in milliseconds. It represents the time
 * after which the greet function will be called
 * 
 * 1s = 1000ms
 */
