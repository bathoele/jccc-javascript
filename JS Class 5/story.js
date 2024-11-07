// Declare variables
let choice1;
let choice2;
let isHappyEnding = false;

// Get user input (using a prompt or other input method)
choice1 = prompt("Do you want to go through the forest (1) or the meadow (2)?");

// Use a do-while loop to ensure user makes a choice
do {
  if (choice1 !== "1" && choice1 !== "2") {
    choice1 = prompt("Invalid choice. Please enter 1 or 2: ");
  }
} while (choice1 !== "1" && choice1 !== "2");

// Conditional logic based on user choices (using if statements)
if (choice1 === "1") {
  // Encounter in the forest (scary)
  choice2 = prompt("You encounter a villain (1) or a talking animal (2)?");
  // Logic for encountering villain or animal
  isHappyEnding = false; // Adjust based on interaction with animal/villain
} else {
  // Encounter in the meadow (peaceful)
  choice2 = prompt("You encounter a friendly person (1) or a beautiful flower (2)?");
  // Logic for encountering person or flower
  isHappyEnding = true; // Adjust based on interaction with person/flower
}

// Print the story ending based on the choices
if (isHappyEnding) {
  console.log("You lived happily ever after!");
} else {
  console.log("You faced challenges but learned valuable lessons.");
}
