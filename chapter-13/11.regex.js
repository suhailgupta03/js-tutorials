// [^abc]$

// $ - end of the string
// ^ - start of the string
// [^abc] - any character except a, b, or c

const pattern = /[^abc]at/ 
const string = "vat"
console.log(string.match(pattern));

// [^abc]$ means that the string should 
// end with any character except a, b, or c
const pattern1 = /[^abc]$/
const string1 = "vat"
console.log(string1.match(pattern1));
const string2 = "aaa"
console.log(string2.match(pattern1));