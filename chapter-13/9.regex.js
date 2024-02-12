/**
 * \w - any word character (a-z, A-Z, 0-9, _)
 */
const pattern = /\w+@gmail\.com/g;
const email = "manas@gmail.com";

const result = email.match(pattern);
console.log(result);

const email1 = "shreya99@hotmail.com"
const result1 = email1.match(pattern);
console.log(result1);

const pattern2 = /[\w#$%\.]+/g;
const money = "10$"
const percentage = "99.99%";
console.log(money.match(pattern2));
console.log(percentage.match(pattern2));

const onlyNumberPattern = /\d+/g;
const numberX = "99abc32xyz887";
console.log(numberX.match(onlyNumberPattern));
