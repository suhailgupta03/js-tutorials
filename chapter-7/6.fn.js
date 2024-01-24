function temperature() {
    return "1deg"
}

function greet() {
    const t = temperature()
    if(t === "1deg") {
        return "cold"
    }else {
        return "hot"
    }
}

const message = greet()
console.log(message);