/*Allison Hanna functions practice */

"use strict"

const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
let age = document.getElementById("ageInput");
let costume = document.getElementById("costumeInput");

function trickOrTreat(age, costume) {
  if (age <= 12) {
    const randomMessages = ["...there's something behind you...", "Trick or treat!", "BoooooOOOooooooOOoooooOOOooOoOoOoooOOoo...", "O __ O"];
    const randomCandies = ["Toothpaste", "Beer", "Butterfingers", "straight up peanut butter"];
  
    const randomMessageIndex = Math.floor(Math.random() * randomMessages.length);
    const randomCandyIndex = Math.floor(Math.random() * randomCandies.length);
  
    const randomMessage = randomMessages[randomMessageIndex];
    const randomCandy = randomCandies[randomCandyIndex];
  
    result.textContent = `Happy Halloween, little ${costume}! ${randomMessage} Want some ${randomCandy}?`;
      
    return
  } else if (age <= 18) {
      const randomMessages = ["Oh no", "Okay.", "OK"];
      const randomCandies = ["Toothpaste", "Beer", "Butterfingers", "straight up peanut butter"];

      const randomMessageIndex = Math.floor(Math.random() * randomMessages.length);
      const randomCandyIndex = Math.floor(Math.random() * randomCandies.length);

      const randomMessage = randomMessages[randomMessageIndex];
      const randomCandy = randomCandies[randomCandyIndex];

      result.textContent = `You're a teenager! ${randomMessage} A ${costume} is a great idea! Do you like ${randomCandy}?`;

      return
  } else {
      result.textContent = "OK";
  }
}

checkButton.addEventListener("click", trickOrTreat(age, costume));

/* you can use this for testing if you want
  let youngTreatMessage = trickOrTreat(4,"witch");
  console.log(youngTreatMessage);

  let teenTreatMessage = trickOrTreat(13,"zombie");
  console.log(teenTreatMessage);

  let adultTreatMessage = trickOrTreat(34,"ghostbuster");
  console.log(adultTreatMessage);
  */