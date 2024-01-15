var studentName = "John";
var studentAge = 20;
var studentGrade = "A";

if(studentAge >= 20) {
    console.log("Student is eligible for admission");
    if(studentGrade == "A") {
        console.log("Student is eligible for scholarship");
    }else {
        console.log("Student is not eligible for scholarship");
    }

    if(studentName == "John") {
        console.log("Student is John");
    }else {
        console.log("Student is not John");
    }
}else {
    console.log("Student is not eligible for admission");
}