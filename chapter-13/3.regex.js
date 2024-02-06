var string = "1234567abcdef123jklopmnwerabcdefghipklabcmno98+-@#^*?abc";
// console.log(/abc/.test(string)); // true    
console.log(string.match(/abc/));
// The above code will return the first match of the pattern
// to get all the matches we can use the global flag
// as shown below:
const result = string.match(/abc/g);
// g is a flag for global search
console.log(result); // [ 'abc', 'abc', 'abc', 'abc' ]