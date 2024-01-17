for(var i = 0; i < 5; i++) {
    if( i < 3) {
        continue;
        // continue is used to skip the current iteration
    }else {
        console.log(i);
    }
    console.log("After if-else block")
}

// 1st iteration -> i = 0; 0 < 3 (TRUE); CONTINUE; i = 1
// 2nd iteration -> i = 1; 1 < 3 (TRUE); CONTINUE; i = 2
// 3rd iteration -> i = 2; 2 < 3 (TRUE); CONTINUE; i = 3
// 4th iteration -> i = 3; 3 < 3 (FALSE);  i = 4
// 5th iteration -> i = 4; 4 < 3 (FALSE);  i = 5