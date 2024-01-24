function temperature() {
    return 1
}

function greet() {
    const t = temperature()
    if(t <= 5) {
        return "cold"
    }else {
        return "hot"
    }
}

const message = greet()
console.log(message);