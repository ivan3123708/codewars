class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = this.getInfo();
  }

  getInfo() {
    return `${this.name}s age is ${this.age}`; 
  }
};