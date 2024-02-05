var _isGreaterThan = (a, b) => {
    return a > b;
}

// The above function can be re-written as:
var isGreaterThan = (a, b) => a > b;
// a > b actually translates to 'return a > b'
var sum = (a, b) => a + b;
// This actually means
// var sum = (a, b) => {
//    return a + b;   
// }
const result = isGreaterThan(100, 5); // check if 10 > 5
console.log(result); // true    
console.log(sum(1, 2))


var name = () => "John Doe";
// The above function can be re-written as:
// var name = () => {
//     return "John Doe";
// }
console.log(name())