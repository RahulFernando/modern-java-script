"use strict";

// Class expression
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

// Class declaration
class Rectangle extends Person {
  #width;
  #height;

  constructor(name, age, width, height) {
    super(name, age);
    this.#width = width;
    this.#height = height;
  }

  set width(value) {
    this.#width = value;
  }

  get width() {
    return this.#width;
  }

  set height(value) {
    this.#height = value;
  }

  get height() {
    return this.#height;
  }
}
