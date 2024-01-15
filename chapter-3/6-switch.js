var x = 1;

switch (x) {
    case 1:
    case 2:
    case 3:
        console.log('The value of x is 1,2 or 3');
        break;
    case 100:
        console.log('The value of x is 100');
        break;
    default:
        console.log('The value of x is something else');
        break;
}