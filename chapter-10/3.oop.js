class Animal {
    constructor(name) {
        this.name = name;
    }    

    sleep() {
        console.log(this.name + ' sleeps.');
    }

    walk() {
        console.log(this.name + ' walks.');
    }
}

class Herbivore extends Animal{
    constructor(name) {
        super(name); // this is required to call the parent constructor
        // super is mandatory if you want to use this in the constructor
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats plants.`);
    }
}

class Carnivore extends Animal{
    constructor(name) {
        super(name);
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats meat.`);
    }
}

const rabbit = new Herbivore('Rabbit');
rabbit.eat();
rabbit.sleep();
rabbit.walk();


const lion = new Carnivore('Lion');
lion.eat();
lion.sleep();
lion.walk();
  
  
