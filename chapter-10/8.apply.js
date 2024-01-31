function updateCoordinates(x, y, z) {
    this.x = x; // setting key as 'x' and value as x
    this.y = y; // setting key as 'y' and value as y
    this.z = z; // setting key as 'z' and value as z

    // Here this means coordinates object

    console.log(this);
}

var coordinates = {name: "manish"}; // inital values
updateCoordinates.call(coordinates, 2, 2, 2);
updateCoordinates.apply(coordinates, [2, 2, 2]);

/**
 * the differnce between call and apply is that apply takes an array of arguments
 * and call takes a list of arguments.
 */