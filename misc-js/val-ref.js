function sum(a, b) {
    a = 100;
    b = 200;
    return a + b;
}

var x1 = 2;
var x2 = 3;
console.log(sum(x1,x2))
console.log(x1, "...", x2);

// The above call to sum function is call by value
// because the value of x1 and x2 are passed to the function

function sumRef(list) {
    list[0] = 100;
    list[1] = 200;
    return list[0] + list[1];
}

var list = [2,3];
console.log(sumRef(list));
console.log(list);
// The above call to sumRef function is call by reference
// because the reference of list is passed to the function

function printInformation(o) {
    o.city = "San Francisco";
    console.log(o.city);
}

var person = {
    name: "John",
    city: "New York"
};

printInformation(person);
console.log(person.city)