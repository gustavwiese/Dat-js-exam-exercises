"use strict"; /*
/* --- !!! ØVELSE 1 !!! --- */

/*

window.addEventListener("load", start);

async function start() {
  console.log("js running");
  const users = await getUsers();
  showUsers(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = response.json();
  return data;
}

function showUsers(users) {
  for (const user of users) {
    const html = `
    <li>${user.name}</li>
    <p>User active: ${user.active}</p> 
    <p>Role: ${user.role}</p>
    `;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}*/
