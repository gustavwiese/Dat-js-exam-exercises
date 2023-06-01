"use strict";

/* --------------- !!! ØVELSE 3 !!! ------------------- */

window.addEventListener("load", start);

/*


let animals = [];

function start() {
  console.log("js kører");
  document.querySelector("#create-form").addEventListener("submit", addAnimal);
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(animal);
  return;
}

function addAnimal(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  createAnimal(name, type, age);
  console.log(animals);
  showAnimals();
}

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  animals.sort(sortAnimals);
  for (const animal of animals) {
    const html = `
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
        `;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}

function sortAnimals(a, b) {
  return a.name.localeCompare(b.name);
}

*/

/* --------------- !!! ØVELSE 5 !!! ------------------- */

/*

function start() {
  console.log("det virker");
  document.querySelector("#create-form").addEventListener("submit", formClicked);

  showAnimals();
}

let animals = [
  {
    name: "Peter",
    type: "cat",
    age: 39,
  },
  {
    name: "Rasmus",
    type: "dog",
    age: "32",
  },
  {
    name: "Oscar",
    type: "mouse",
    age: 88,
  },
];

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  animals.sort((a, b) => a.age - b.age);
  for (const animal of animals) {
    const html = `
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
        `;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(animal);
  return animal;
}

function formClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;
  createAnimal(name, type, age);
  showAnimals();
}

*/
