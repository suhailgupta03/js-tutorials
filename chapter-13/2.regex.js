var fruitNames = "apple, banana, cherry, date, fig, grape";

var fruitNamesToCheck = [
    "orange",
    "cherry",
    "mango",
    "grape",
];

for(let fruitName of fruitNamesToCheck) {
    // We use the RegExp when the pattern that we
    // want to test is stored in a variable
    const pattern = new RegExp(fruitName); 
    // /orange/
    // /cherry/
    // /mango/
    // /grape/
    const result = pattern.test(fruitNames);
    // Here /fruitName/.test(fruitNames) would not work
    // because in that case fruitName itself will become a 
    // pattern and not the value of the fruitName variable
    console.log("Result for " + fruitName + " is " + result);
}

