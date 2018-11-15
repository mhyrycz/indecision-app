class Person {
  constructor(name="Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  };
  getDescritpion() {
    return `${this.name} is ${this.age} years old.`
  };
}

const me = new Person('Maciej Hyrycz', 26);
console.log(me.getDescritpion());


// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
