var i = 0; // Initialization
for(;;) {
    if(i < 3) { // Condition (But not a terminating condition)
        console.log(i);
        console.log("....")
        i++; // Increment
    }else {
        break;
    }
}

// after first iteration -> i = 1
// after second iteration -> i = 2
// after third iteration -> i = 3
// after fourth iteration -> loop will stop