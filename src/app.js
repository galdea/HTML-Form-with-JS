/* eslint-disable */
import "bootstrap";
import "./style.css";

// create a couple of elements in an otherwise empty HTML page

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const ccn = document.getElementById("ccn");
const cvc = document.getElementById("cvc");
const money = document.getElementById("money");
const city = document.getElementById("city");
const state = document.getElementById("inputState");
const zip = document.getElementById("inputZip");
const comment = document.getElementById("comment");

form.addEventListener("submit", e => {
  let messages = [];

  //ccn
  if (ccn.value === "" || ccn.value == null) {
    messages.push("Credit Card number required");
    ccn.classList.add("alert-danger");
  }
  //cvc
  if (cvc.value === "" || cvc.value == null) {
    messages.push("CVC number required");
    cvc.classList.add("alert-danger");
  }
  //money
  if (money.value === "" || money.value == null) {
    messages.push("Amount required");
    money.classList.add("alert-danger");
  }
  //firstname
  if (firstname.value === "" || firstname.value == null) {
    messages.push("Name required");
    firstname.classList.add("alert-danger");
  }
  //lastname
  if (lastname.value === "" || lastname.value == null) {
    messages.push("Last name required");
    lastname.classList.add("alert-danger");
  }
  //city
  if (city.value === "" || city.value == null) {
    messages.push("City required");
    city.classList.add("alert-danger");
  }
  if (state.value == "..." || state.value == "null") {
    messages.push("State required");
    state.classList.add("alert-danger");
  }

  //zip
  if (zip.value === "" || zip.value == null) {
    messages.push("Zip required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    comment.classList.add("alert-danger");
    zip.classList.add("alert-danger");
    errorElement.style.display = "block";
  }
});
