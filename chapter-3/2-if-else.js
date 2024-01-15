var x = 100;
var y = -1;
/**
 * Else always comes after if block
 * It cannot come alone or before if block
 */
if (y > x) { // -1 > 100 --> FALSE
    console.log('y is greater than x');
    console.log("INSIDE IF BLOCK");
    console.log("HELLO WORLD!!");
}else {
    console.log("Inside else block");
    console.log('y is less than x'); 
}

console.log("..Done with if-else block");
var yy = 3 + 2;
console.log(yy);