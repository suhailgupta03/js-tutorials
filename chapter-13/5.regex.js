// For refernce and help use: https://regex101.com/
const string = "banana";
const pattern = /[abc]/g;
const result = string.match(pattern);
console.log(result); 

const patternForAllEnglishAlphabets = /[a-z]/g;
console.log(string.match(patternForAllEnglishAlphabets));

const patternX = /^wednesday/;
// string must always start with wednesday
const stringX = "...wednesday is a good day";
const stringY = "wednesday is a good day";
console.log(stringX.match(patternX));
console.log(stringY.match(patternX));