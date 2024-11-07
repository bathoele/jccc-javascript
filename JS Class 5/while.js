/* a while loop will run as long as the condition is true -- 
Do this activity first then have them do sheepWhile.js on their own.
Lastly do adding script together.*/

let num = 0;
let sum = 0;

while (num >= 0) {
  sum += num;
  num = parseInt(prompt("Enter a number: "));
}

console.log("You entered a negative number.");
console.log(`The sum is ${sum}`);