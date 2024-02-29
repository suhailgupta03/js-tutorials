function callback(resolve, reject) {
    const value = Math.floor(Math.random() * 10);
    if(value > 5) {
        resolve("Value is greater than 5!");
    }else {
        reject("OOPS! Value was less than 5");
    }
}
// loads data from the server
function loadFromServer() {
    const pro = new Promise(callback);
    return pro;
}

// simply prints the log message
function greetMe() {
    console.log("Inside greet me");
}

loadFromServer() // this is an ASYNC function
// which means that it will only be executed if there is no
// sync function to be executed on the call stack
    .then(r => {
        console.log("INSIDE THEN ", r)
    })
    .catch(err => { // catch any error that occured
        // due to which the promise failed to resolve
        console.log("INSIDE ERROR ", err);
    })

greetMe();