function greet(yourName){
  return "Hello " + yourName + ", my name is " + this.name;
}

function Person(name) {
   this.name = name;
}

Person.prototype.greet = greet;