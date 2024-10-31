//Allison Hanna Logical Oprators -- AND

"use strict"

let age = parseInt(prompt("How old are you?"));
let hasCostume = confirm("Do you have a costume? (OK(Yes)/Cancel (No)");

// Logical conditions for trick or treat
let getsTreat = (age >= 5 && age <= 21) && hasCostume;

if (getsTreat) {
  confirm("Trick or treat! You get a candy!");
} else {
  confirm("Oh no! You got a trick!");
}