/**
 * \w - any word character (a-z, A-Z, 0-9, _)
 */

// We want to match 
// - gmail.com
// - hotmail.com
// - rediff.com
// - yahoo.com

const pattern = /\w+@(gmail|hotmail|rediff|yahoo)\.com/g;
// /\w+@gmail\.com/g
// /\w+@hotmail\.com/g

const email1 = "manas@gmail.com";
const email2 = "himani@yahoo.com";
const email3 = "dev@rediff.com"
const email4 = "shreya@hotmail.com"
const email5 = "renuka@outlook.com"

console.log(email1.match(pattern))
console.log(email2.match(pattern))
console.log(email3.match(pattern))
console.log(email4.match(pattern))
console.log(email5.match(pattern));
