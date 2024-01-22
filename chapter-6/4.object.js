var employee = {
    name: 'John',
    name: "Atik",
    name: "Manas",
    name: "Shreya"
};
/**
 * keys in an object must be unique. If we have multiple keys
 * with the same name, the last key will be used.
 */
console.log(employee);


var employeeDetails = {
    name: 'John',
    age: 30,
    designation: 'Manager',
    salary: 50000,
    officeAddress: 'Bangalore',
    mailingAddress: 'Bangalore',
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
    }
};
var results = [];
for(var key in employeeDetails) {
    const value = employeeDetails[key];
    if(value == "Bangalore") {
        results.push(key);
    }
}

console.log(results);