const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name),
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed),
});

// const eater = state => ({
//   eat: () =>
//     console.log(state.name + ' is so hungry he can eat ' + state.eatObject),
// });

barker({ name: 'karo' }).bark();
// Woof, I am karo

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    eatObject: 'pig',
  };
  return Object.assign({}, barker(state), driver(state), eater(state));
};

const bruno = murderRobotDog('bruno');
const eddie = murderRobotDog('eddie');
console.log({ bruno, eddie });
bruno.bark(); // "Woof, I am Bruno"
// eddie.eat();

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function eater({ name }) {
  return {
    eat: () => console.log(`${name} ate voraciously`),
  };
}

function swimmingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...swimmer(monster),
  };
}

function flyingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...swimmer(monster),
    ...flyer(monster),
  };
}

function eatingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...swimmer(monster),
    ...flyer(monster),
    ...eater(monster),
  };
}

// const muriel = swimmer({ name: 'Eagle' });
// muriel.swim();
// const wiggly = swimmingMonsterCreator('Wiggly');
// const booger = flyingMonsterCreator('Booger');
const godzilla = eatingMonsterCreator('Godzilla');
godzilla.swim();
godzilla.fly();
godzilla.eat();
