var names = ['John', 'Jane', 'Mark', 'James', 'Mary', 'Thomas'];
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/**
 * To remove last element from array, use pop() method.
 */
// names.pop();
// console.log(names);
names.splice(2,1); // 2 represents the index number from where to start
// and 1 represents the number of elements to be removed
console.log(names);

names.splice(2, 0, 'Smith'); // 2 represents the index number from where
// to start
// 0 represents the number of elements to be removed
console.log(names);