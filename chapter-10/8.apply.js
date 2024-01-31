function updateCoordinates(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    console.log(this);
}

var coordinates = { x: 0, y: 0, z: 0};
updateCoordinates.call(coordinates, 2, 2, 2);
updateCoordinates.apply(coordinates, [2, 2, 2]);

/**
 * the differnce between call and apply is that apply takes an array of arguments
 * and call takes a list of arguments.
 */