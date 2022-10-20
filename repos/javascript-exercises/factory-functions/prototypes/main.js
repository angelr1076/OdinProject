const Person = name => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = name => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return { sayName, doSomethingNerdy };
};

const Jock = name => {
  const { sayName } = Person(name);
  const { doSomethingNerdy } = Nerd(name);
  const sayAJockThing = () => console.log(`Uh, uh, let's goooooo!`);
  return { sayName, doSomethingNerdy, sayAJockThing };
};

const jeff = Nerd('jeff');
const meatHead = Jock('Meathead');

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
meatHead.sayName();
meatHead.doSomethingNerdy();
meatHead.sayAJockThing();
