var i = 0;
var interval;
function callbackFunction() {
    console.log('callbackFunction', i, "..");
    i++;
    if(i > 5) {
        clearInterval(interval);
        /**
         * clearInterval is used to stop the interval
         * 
         * The argument is the interval variable returned by the setInterval function
         */
    }
}

interval = setInterval(callbackFunction, 1000);
/**
 * setInterval is used to call a function at a regular interval
 * 
 * Here it will call the callbackFunction every 1s
 * 
 * until the clearInterval is called (which stops the interval)
 */