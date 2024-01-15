var x = 0;

/**
 * if-else chain:
 * The if-else chain is used to check multiple conditions.
 * The best use case for if-else chain is when you want to 
 * check multiple conditions.
 * 
 * else if -> will always occur after if statement and cannot occur alone
 * else -> will be optional and can be added if required to handle the last condition
 * 
 * There can be as many else if statements as required.
 */

if(x > 20) { // 0 > 20 -> false
    console.log("x is greater than 20");
} else if(x > 10) {
    console.log("x is greater than 10 but less than 20");
}else if(x > 5) {
    console.log("x is greater than 5 but less than 10");
}else {
    console.log("x is less than 5");
}
