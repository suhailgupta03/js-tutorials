var string = "#1234567abcdef123jklopmnwerabcdefghipklabcmno/98+-@#^*?abc";

const pattern = /abc/g;
var result;

// In javascript 'null' is a FALSY value
while(result = pattern.exec(string)) {
    console.log(result);
}