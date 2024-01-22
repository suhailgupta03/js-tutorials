const car = {
    brand: 'Ford',
    model: 'Fiesta',
    yearOfManufacture: 2019,
    color: 'red',
    fuel: 'petrol',
    numberOfDoors: 5,
}
console.log(car.color);
// change the color of the car
car.color = 'blue'; // can also be written as car['color'] = 'blue';
console.log(car.color);
// use the delete keyword to remove a property
delete car.numberOfDoors; // can also be written as delete car['numberOfDoors'];
console.log(car);
// add a new property
car.hasTouchscreen = true; // can also be written as car['hasTouchscreen'] = true;
console.log(car);