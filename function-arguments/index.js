"use strict";

const max = function (a, b, ...values) {
  return a > b ? a : b;
};

// console.log(max(10, 20));
// console.log(max(20, 10));
max(9, 2, 3, 4, 5);

const sayHello = function (name1, name2) {
  console.log("Hello " + name1 + " and " + name2);
};

const names1 = ["Sam", "Rahul"];
const names2 = ["John", "Doe"];

const n = names1.concat(names2);
const names = [...names1, ...names2];

const sortByTitle = function (books = [], ascending = true) {
  if (!books) return;

  const multiplier = ascending ? 1 : -1;

  const byTitle = function (book1, book2) {
    return book1.localeCompare(book2) * multiplier;
  };

  return books.slice().sort(byTitle);
};

const books = ["Book1", "Book2", "Book3"];
const sortedBooks = sortByTitle(books);
// console.log(sortedBooks);

const person = { id: 0, name: "Sam", age: 30, city: "New York", country: "USA" };
// const { id, ...sam } = person;

console.log(person.name);
const person2 = { ...person, id: 1 }

const [book1, ...restBooks] = books;

console.log(books[0]);
console.log(book1);
console.log(person2);
