"use strict";

const max = 100; // Allowed
const ok = true; // Allowed
const first = "Sam";
const sam = { first, age: 26 }; // Allowed

sam.first = "Rahul";

const rahul = Object.freeze({ first: "Rahul", age: 26 });

console.log(greeting);
console.log(myName);
var greeting = "Hello World";
let myName = "Sam";

// Avoid var
// use let or const
// if you want to change value use _let_ otherwie _const_
// var is hoisted with default value undefined but let and const define without initialization.
