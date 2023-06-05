"use strict";

window.addEventListener("load", start);

/* --------------- !!! ØVELSE 9 !!! ------------------- */

/*

import { teachers } from "./teachers.js";

function start() {
  console.log(teachers);
  showTeachers();
}

function showTeachers() {
  teachers.sort(sortByName);
  teachers.sort(sortByEmail);
  for (const teacher of teachers) {
    const html = `
    <li>Name: ${teacher.name} - Email: ${teacher.email}</li>
    `;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function sortByEmail(a, b) {
  return a.email.localeCompare(b.email);
}

*/

/* --------------- !!! ØVELSE 10 !!! ------------------- */

/*

import { teachers } from "./teachers.js";

function start() {
  console.log(teachers);
  showTeachers();
}

function showTeachers() {
  for (const teacher of teachers) {
    const html = `
    <li>Name: ${teacher.name} - Email: ${teacher.email}</li>
    `;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function addTeacher(name, email) {
  const teacher = {
    name: name,
    email: email,
  };
  teachers.push(teacher);
}

addTeacher("peter", "petl@kea.dk");

*/
