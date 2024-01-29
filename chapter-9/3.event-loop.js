console.log("First");

setTimeout(function() {
    console.log("Second");
}, 1000);

/**
 * The above is same as :
 * 
 * function callback() {
 *  console.log("Second");
 * }
 * 
 * setTimeout(callback, 2000);
 */

let i = 0
while(i < 1000000) {
    console.log(i++);
}