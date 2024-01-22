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
if(employee.address.city === 'Bangalore') {
    console.log('Employee is from Bangalore');
}

console.log(employee.motherName); // If the key does not exist, 
// undefined is returned (printed in the console)

// To check if a particular key exists in an object, 
// we can use the in operator, for example:
if("address" in employee) {
    console.log('Employee has an address');
}

if("country" in employee.address) {
    console.log('Employee has a country in his address');
}