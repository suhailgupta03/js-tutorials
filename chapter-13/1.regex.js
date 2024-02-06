var fruitNames = "apple, banana, cherry, date, fig, grape";
// We want to check if the string contains the word "cherry"
const result = /cherry/.test(fruitNames);
console.log(result); // true

var characterSequence = "abcxyzopkkkklpoqerkktxyz";
const result2 = /op/.test(characterSequence);
console.log(result2); // true