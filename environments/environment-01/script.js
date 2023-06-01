"use strict"; /*

/* --- !!! ØVELSE 1 !!! --- */

window.addEventListener("load", start);
/*
async function start() {
  console.log("js running");
  const users = await getUsers();
  showUsers(users);
  usersByRole(users);
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
}

function usersByRole(users) {
  let roleCount = {
    admin: 0,
    user: 0,
    guest: 0,
  };

  for (const user of users) {
    if ((user.role === "user", "admin", "guest")) {
      roleCount[user.role]++;
    }
  }
  document.querySelector("#admin-count").textContent = roleCount.admin;
  document.querySelector("#user-count").textContent = roleCount.user;
  document.querySelector("#guest-count").textContent = roleCount.guest;
}*/

/* --- !!! ØVELSE 2 !!! --- */

/*

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
    if (user.role === "admin") {
      const html = `
  <li>${user.name}</li>
  <p>User active:${user.active}</p>
  `;
      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}
*/

/* --- !!! ØVELSE 4 !!! --- */

/*

let users = [];

async function start() {
  console.log("js kører");
  await getUsers();
  console.log(users);
  showActiveUsers(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  users.push(...data);
  return data;
}

function showActiveUsers(users) {
  for (const user of users) {
    if (user.active === true) {
      const html = `
        <li>User name: ${user.name} - Role: ${user.role}</li>
      `;
      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}

function addUser(name, active, role) {
  const user = {
    name: name,
    active: active,
    role: role,
  };
  users.push(user);
}

addUser("Peter", true, "admin");
addUser("Rasmus", true, "guest");
*/
