"use strict";

/* --------------- !!! ØVELSE 11 !!! ------------------- */

window.addEventListener("load", start);

/*


import { courses } from "./courses.js";

function start() {
  console.log(courses);
  showCourses();
}

function showCourses() {
  for (const course of courses) {
    const html = `
    <li>Name: ${course.name} -
    ECTS point: ${course.ectsPoints} -
    Teacher: ${course.teacher}</li>
    `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function addCourse(name, ectsPoints, teacher) {
  const course = {
    name: name,
    ectsPoints: ectsPoints,
    teacher: teacher,
  };
  courses.push(course);
}

addCourse("livredning", 10000, "Gustav");

*/

/* --------------- !!! ØVELSE 12 !!! ------------------- */

/*

import { courses } from "./courses.js";

function start() {
  console.log(courses);
  showCourses();
}

function showCourses() {
  courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
  for (const course of courses) {
    const html = `
    <li>Name: ${course.name} - ECTS Points: ${course.ectsPoints}</li>
    `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

*/

/* --------------- !!! ØVELSE 13 !!! ------------------- */

/*

import { courses } from "./courses.js";

function start() {
  console.log(courses);
  showCourses();
}

function showCourses() {
  for (const course of courses) {
    const html = `
    <li>Name: ${course.name} - ECTS Points: ${course.ectsPoints}</li>
    `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

// HER SKAL LAVES EN FUNKTION DER SORTERER EFTER VALGTE OPTION I HTML-FILEN

*/

/* --------------- !!! ØVELSE 14 !!! ------------------- */

/*

import { courses } from "./courses.js";

function start() {
  console.log(courses);
  showCourses();
}

function showCourses() {
  courses.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  for (const course of courses) {
    const html = `
    <li>Name: ${course.name} - Start Date: ${course.startDate} - ECTS Points: ${course.ectsPoints}</li>
    `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

*/
