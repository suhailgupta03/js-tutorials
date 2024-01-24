var employee = {
    name: "John Smith",
    age: 23,
    department: "Software"    
}

console.log(employee)
console.log(typeof employee)
// /**
//  * If we convert an object to string, it will be a JSON
//  */
console.log(JSON.stringify(employee)) // use stringify to convert object to string
// difference between an object and a json is that json is a string
// and the keys and values are wrapped in double quotes
// excluding the numbers
// example: {"name":"John Smith","age":23,"department":"Software"}
const converted = JSON.stringify(employee) // converts object to string
const parsed = JSON.parse(converted) // converts string back to object

console.log(converted)
console.log(parsed)