    class Animal {
        /**
         * This will be called when the object is created
         * using the new keyword. 
         * 
         * We call this as a "constructor" function
         */
        constructor(name, sc) {
            /**
             * this refers to the "CURRENT OBJECT"
             * The object that is being created
             */
            this.myName = name
            this.skinColor = sc;
            /**
             * Here myName and skinColor are regular object
             * attributes. It is exactly similar when create 
             * an object in the following way:
             * var xyz = {
             *    myName: "Lion",
             *    skinColor: "Brown"
             * }
             */
        }

        eat() {
            console.log(this.myName + " eats food");
        }

        sleep() {
            console.log(this.myName + " sleeps");
        }
    }

    const lion = new Animal("Lion", "Brown");
    console.log(lion);
    lion.eat(); // we use the dot operator to access the attributes as well as the functions
    lion.sleep();

    const tiger = new Animal("Tiger", "White");
    console.log(abc);
    tiger.eat();
    tiger.sleep();