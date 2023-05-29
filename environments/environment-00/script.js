"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører");
  RegisterClick();
  hideResults();
}

function hideResults() {
  document.querySelector("#result_failure").classList.add("hide");
  document.querySelector("#result_success").classList.add("hide");
}

function RegisterClick() {
  document.querySelector("#btn-knap").addEventListener("click", btnClicked);
}

function btnClicked() {
  console.log("Det virker");
  document.querySelector("#result_failure").classList.add("hide");
  document.querySelector("#result_success").classList.remove("hide");
}
