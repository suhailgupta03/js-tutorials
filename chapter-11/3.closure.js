function addByX(x) {
    return function(y) {
        return x + y;
    }
}

const addByTwo = addByX(2);
console.log(addByTwo(1)); // should return 3
console.log(addByTwo(2)); // should return 4
console.log(addByTwo(3)); // should return 5

const addByHundred = addByX(100);
console.log(addByHundred(1)); // should return 101
console.log(addByHundred(2)); // should return 102
console.log(addByHundred(3)); // should return 103
