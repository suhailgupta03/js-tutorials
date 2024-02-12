/**
 * [a-z0-9]
 * The above regular expression means one of a-z or one of 0-9
 */
const pattern = /[a-z0-9\_]+@gmail\.com/g;
const email = "manas@gmail.com";

const result = email.match(pattern);
console.log(result);

const email1 = "shreya99@hotmail.com"
const result1 = email1.match(pattern);
console.log(result1);