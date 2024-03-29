var x = 1;

/**
 * Cases are evaluated with strict equality (===)
 * Multiple cases can be clustered together
 * 
 * Break is mandatory to prevent other cases from being evaluated
 */
switch (x) {
    case 1:
    case 2:
    case 3:
        console.log('The value of x is 1,2 or 3');
        break;
    case 100:
        console.log('The value of x is 100');
        if(4 > 3) {
            console.log('4 is greater than 3');
        }
        break;
    default:
        console.log('The value of x is something else');
        break;
}