// const proto = {
//   hello() {
//     return `Hello, my name is ${this.name}`;
//   },
// };

// const greeter = name => Object.assign(Object.create(proto), { name });

// const eggie = greeter('Eggie');
// const msg = eggie.hello();

// console.log(msg);

// Concatenative Inheritance / Cloning / Mixins

const proto = {
  hello: function hello() {
    return `Hello, my name is ${this.name}`;
  },
};

const eggie = Object.assign({}, proto, { name: 'Eggie' });

const msg = eggie.hello();

console.log(msg); // Hello, my name is George
