var list = ["apple", "guava", "orange"];

function printFruitNames(arg) {
    var listCopy = arg; // this assignment is copy by reference
    listCopy[0] = "banana";
    for (var i = 0; i < list.length; i++) {
        console.log(list[i], "..", i);
    }

}

printFruitNames(list);
console.log(list);

function deepCopy(arg) {
    const stringForm = JSON.stringify(arg); // copy by value
    // because JSON.stringify returns a new string
    // and strings are copy by value
    const objectForm = JSON.parse(stringForm);
    // convert this string back to object (new object is created in memory)
    return objectForm
}

var list2 = ["apple", "guava", "orange"];
var list2Copy = deepCopy(list2);
list2Copy[0] = "banana";
console.log(list2); 