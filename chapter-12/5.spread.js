var studentList = ["Manoj", "Raj", "Rahul", "Rohit", "Rajesh"];
// var firstStudent = studentList[0];
// var secondStudent = studentList[1];
// var thirdStudent = studentList[2];
// var [firstStudent, secondStudent, thirdStudent] = studentList;
var [x, y, ...remainingStudents] =  studentList; // Array destructuring
console.log(x, y, remainingStudents);

var student = {
    name: "Manoj",
    age: 25,
    address: "Kathmandu",
    email: "abc@def.com",
    phone: "1234567890"
}

// var name = student.name;
// var age = student.age;
// var address = student.address;
var {age, address, name, ...rest} = student; // Object destructuring
console.log(name, age, address, rest);