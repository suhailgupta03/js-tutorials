var importedObject = require("./module1.js"); // ./ is used to specify the current directory

const {sum} = importedObject;
// const sum = importedObject.sum;

var result = sum(2,3);
console.log(result); // 5