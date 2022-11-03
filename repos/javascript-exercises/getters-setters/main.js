// https://javascript.info/property-accessors

// Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

// That’s good, because if we for..in over an object, we usually don’t want its class methods.

// Classes always use strict. All code inside the class construct is automatically in strict mode.

// let user = {
//   name: 'John',
//   surname: 'Smith',
// };

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
// });

// console.log(user.fullName); // John Smith

// for (let key in user) console.log(key); // name, surname
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short, need at least 4 characters');
      return;
    }
    this._name = value;
  },
};

user.name = 'Pete';
console.log(user.name); // Pete

user.name = ''; // Name is too short...
