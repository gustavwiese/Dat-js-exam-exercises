"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
  console.log("js kører");
  document.querySelector("#create-student-form").addEventListener("submit", formClicked);
}

function formClicked(event) {
  console.log("den virker");
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;

  students.push(name, email, age);
  showStudents(students);
}

function showStudents(student) {}
