var list = [1,2,3,4,1,6,7,7];
list.push(1);
list.push(1);
list.push(3);
list.push(4);
console.log(list);

var set = new Set([1,2,3,4,1,6,7,7]);
var fruitSet = new Set(["apple", "apple", "pinaapple", "apple"])
console.log(set, fruitSet);
console.log(fruitSet.size)

var newSet = new Set(list);
console.log(list.length, "..", newSet.size, "..", newSet);

// We can also add new elements to the set using the add() method.
var s = new Set();
s.add(1);
s.add(2);
s.add(1);
s.add(2);
console.log(s, "..", s.size);