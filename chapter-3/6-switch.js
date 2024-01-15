var x = 100;

switch(x) {
    case "100": // This is always a strict comparison
        console.log("x is 100 in string");
        break;
    case 20:
        console.log("x is 20");
        break;
    case 5:
        console.log("x is 100");
        break;
    default:
        console.log("x is not 10, 20 or 30");
        break;
}