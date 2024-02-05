var studentList = ["Manoj", "Raj", "Rahul", "Rohit", "Rajesh"];
// var firstStudent = studentList[0];
// var secondStudent = studentList[1];
// var thirdStudent = studentList[2];
// var [firstStudent, secondStudent, thirdStudent] = studentList;
var [x, y, ...remainingStudents] =  studentList;
console.log(x, y, remainingStudents);