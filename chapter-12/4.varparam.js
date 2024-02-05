function greet(greetMessage, greetEmoji, ...names) {
    // ...names denotes variable number of arguments
    // or rest parameter
    // Rest parameter (...) must be last formal parameter
    console.log(greetMessage, greetEmoji);
    console.log(names);
}

greet("Hello ", ":)", "Manav", " Dev", " Atik", " Shreya", " Ankit", " Anshul");