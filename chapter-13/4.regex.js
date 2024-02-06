var string = "dfhsyabc;awy8xqry a-z (*&#^@%@#^&(@#*@_#)R&(R024r2r9";
var pattern = /abc/;
// /abc/.exec withouyt t
while(result = pattern.exec(string)) {
    console.log(result);
}

// var string = "dfhsyabc;awy8xqry a-z (*&#^@%@#^&(@#*@_#)R&(R024r2r9";
// var pattern = /abc/;
// // /abc/.exec without the global flag will always return the first match
// // no matter how many times you call it 

// // but when you add a global flag it will 
// // return all the matches and once it has returned all the matches
// // it will simply return null
// while(result = pattern.exec(string)) {
//     console.log(result);
// }