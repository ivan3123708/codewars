class Cat extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Cat.prototype.speak = function() {
  return `${this.name} meows.`;
};