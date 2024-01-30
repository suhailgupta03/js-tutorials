// Plan for representing users using OOP in JavaScript:

// Create a base class User with properties for name, age, city, and last booking.
// Extend the User class to create SuperAdmin, RegisteredUser, and GuestUser classes.
// Add a method to retrieve user details including the 'type' of each user.

class User {
    constructor(name, age, city, lastBooking) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.lastBooking = lastBooking;
      this.type = 'User'; // Default type
    }
  
    getLastBooking() {
      return this.lastBooking;
    }
  
    getUserDetails() {
      return {
        name: this.name,
        age: this.age,
        city: this.city,
        type: this.type
      };
    }
  }
  
  class SuperAdmin extends User {
    constructor(name, age, city, lastBooking) {
      super(name, age, city, lastBooking);
      this.type = 'SuperAdmin';
    }
  }
  
  class RegisteredUser extends User {
    constructor(name, age, city, lastBooking) {
      super(name, age, city, lastBooking);
      this.type = 'RegisteredUser';
    }
  }
  
  class GuestUser extends User {
    constructor(name, age, city) {
      super(name, age, city, null); // Guest users may not have bookings
      this.type = 'GuestUser';
    }
  }
  
  // Example usage:
  const superAdmin = new SuperAdmin('Alice', 30, 'Wonderland', '2023-04-01');
  const registeredUser = new RegisteredUser('Bob', 25, 'Springfield', '2023-03-24');
  const guestUser = new GuestUser('Charlie', 28, 'Gotham');
  
  console.log(superAdmin.getUserDetails());
  console.log(registeredUser.getLastBooking());
  console.log(guestUser.type);
  