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