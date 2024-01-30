var tiger = {
    name: "Tiger",
    age: 3,
    eat: function() {
        console.log(this.name + " eats food");
    }
}

tiger.eat(); // Like all other properties, we use the 
// dot operator to access the function property also

/**
 * tiger is an object. 
 * It has a property called eat. The eat property is a function.
 */