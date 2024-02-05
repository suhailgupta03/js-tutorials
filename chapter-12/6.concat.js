var list1 = [1,2,3];
var list2 = [4,5,6];
var list3 = list1.concat(list2); // merges list1 and list2
console.log(list3); // [1, 2, 3, 4, 5, 6]

var list3_ = [...list1, ...list2];
console.log(list3_); // [1, 2, 3, 4, 5, 6]