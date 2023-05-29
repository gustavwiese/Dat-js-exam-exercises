"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("js running");
  const userList = await getUsers("users.json");
  for (const user of userList) {
    showUsers(user);
  }
}

async function getUsers(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

function showUsers(user) {
  const html = /*html*/ `
    <li>${user.name}</li>
    <p>User active ${user.active}</p> 
    `;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}
