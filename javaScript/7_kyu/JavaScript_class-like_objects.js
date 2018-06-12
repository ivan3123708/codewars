class Animal {
  constructor(name, type) {
	this.type = type;
	this.name = name;
  }

  toString() {
	return `${this.name} is a ${this.type}`;
  }
};