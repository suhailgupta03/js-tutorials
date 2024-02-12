class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    printName() {
        console.log(this._name);
    }
}

const pranshu = new Student("Pranshu");
pranshu.printName();
pranshu._name = "Pranshu Jain";  // setting the name directly (name: key)
pranshu.name = "Pranshu Jain"; // setting the name using the setter

pranshu.printName();
console.log(pranshu._name) // accessing the name directly (name: key)
console.log(pranshu.name) // accessing the name using the getter