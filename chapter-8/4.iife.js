// function process() {
//     let list = [];
//     for(let i = 0; i < 10; i++) {
//         list.push(i); // add to the end of the array
//     }

//     return list;
// }

// const processedData = process();
// console.log(processedData);

const pd = (function() {
    let list = [];
    for(let i = 0; i < 10; i++) {
        list.push(i); // add to the end of the array
    }
    return list;
})()
console.log(pd);

const multipleOfThree = (function() {
    let list = [];
    for(let i = 0; i < 10; i++) {
        if(i % 3 === 0) {
            list.push(i);
        }
    }
    return list;
})()

console.log(multipleOfThree);

(function(a, b, c) {
    console.log(a, b, c);
})(1, 2, 3)