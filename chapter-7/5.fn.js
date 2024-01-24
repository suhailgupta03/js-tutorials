function sum(a, b = 100) {
  return a + b
}

console.log(sum(1)) // here it will use the default value of b = 100
console.log(sum(3)) // here it will use the default value of b = 100
console.log(sum(200, 300)) // here  it will not use the default value of b = 100 
// because we have passed the value of b as 300