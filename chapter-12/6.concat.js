var list1 = [1,2,3];
var list2 = [4,5,6];
var list3 = list1.concat(list2); // merges list1 and list2
console.log(list3); // [1, 2, 3, 4, 5, 6]

var list3_ = [...list1, ...list2];
console.log(list3_); // [1, 2, 3, 4, 5, 6]

var obj1 = {name: 'John', address: 'abc'};
var obj2 = {age: 25, country: 'USA'};
var obj3 = {name: 'Doer', address: 'xyz'}
var newObject = {...obj1, ...obj2, ...obj3};
console.log(newObject);