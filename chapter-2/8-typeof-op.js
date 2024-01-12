var x = 100;
var y = "100";

console.log(typeof x);
console.log(typeof y);
console.log(x == y); // check for equality
console.log(x === y); // check for equality and type
// === is called strict equality operator
// == is called equality operator

console.log(x + y); // this will be incorrect
// because it will convert x to string and concatenate
// that is the reason we have === operator