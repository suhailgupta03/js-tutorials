const string = "abcaasdkaks;dk;askdababablsdfjsjdfjsdlfjlsdf";
const pattern = /[ab]+/g;
// Here [ab]+ means that the pattern should match one or more of a or b
// + means one or more
console.log(string.match(pattern));

const repeatedPattern = /a+/;
// Here a+ means that the pattern should match one or more of a
const repeatedString = "aaaaaaaabbbbc";
console.log(repeatedString.match(repeatedPattern));
// [a-z0-9_]+
// This means 
// 1. match one or more of a-z, any sequence of characters from a to z
// 2. match one or more of 0-9, any sequence of characters from 0 to 9
// 3. match one or more of _, any sequence of characters _
const emailPattern = /[a-z0-9_]+@gmail.com/
const email1 = "john@gmail.com";
const email2 = "abc@hotmail.com";
const email3 = "rahul123@gmail.com";
const email4 = "rahul_123@gmail.com";

console.log(email1.match(emailPattern));
console.log(email2.match(emailPattern));
console.log(email3.match(emailPattern));
console.log(email4.match(emailPattern));