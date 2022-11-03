const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name),
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed),
});

const eater = state => ({
  eat: () =>
    console.log(state.name + ' is so hungry he can eat ' + state.eatObject),
});

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
bruno.bark(); // "Woof, I am Bruno"
eddie.eat();
