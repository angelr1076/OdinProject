// function Car(wheels, sunroof) {
//   this.wheels = wheels;
//   this.sunroof = Boolean(sunroof);

//   this.vroom = function () {
//     console.log('vrooooooom!');
//   };
// }

// const ferrari = new Car(4, true);
// console.log(ferrari.vroom());
// console.log(ferrari);

const cat = {
  init: function (eyes, fangs, legs, sound) {
    this.eyes = eyes;
    this.fangs = Boolean(fangs);
    this.legs = legs;
    this.sound = sound;
    return this;
  },
  makeSound: function () {
    console.log(this.sound);
  },
};

const baxter = Object.create(cat).init(2, true, 3, 'rrrraaaafffff!');
// baxter.sound = 'rrrraaaafffff!';
// baxter.eyes = 2;
// baxter.fangs = true;
// baxter.legs = 3;

baxter.makeSound();
console.log('Is baxter a cat?', cat.isPrototypeOf(baxter));
console.log(baxter);
