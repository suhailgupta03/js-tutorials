function Employee(name, age) {

    let employeeDetailString = "Name: " + name + ", Age: " + age;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    return {
        getName,
        getAge,
        employeeDetailString
    } // we here return an object
    // which has the keys as the function names
    // and value as the function itself
}

const employee = Employee('John', 30);
console.log(employee)
console.log(employee.getName())
console.log(employee.employeeDetailString)