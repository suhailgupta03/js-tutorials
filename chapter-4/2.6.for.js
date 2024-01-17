var i = 0; // Initialization
for(;;) {
    if(i < 3) { // Condition
        console.log(i);
        console.log("....")
        i++; // Increment
    }else {
        break;
        // break will stop the loop
    }
}

// after first iteration -> i = 1
// after second iteration -> i = 2
// after third iteration -> i = 3
// after fourth iteration -> loop will stop