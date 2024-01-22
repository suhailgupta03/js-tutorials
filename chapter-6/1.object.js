/**
 * object is a collection of key-value pairs
 * key means the name of the property
 * value means the value of the property
 */
var employee = {
    name: 'John',
    age: 30,
    designation: 'Manager',
    salary: 50000,
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
    }
};
// console.log(employee);
// use dot notation to access object property
console.log(employee.designation);
console.log(employee.age);
console.log(employee.address.country);