//Have someone enter a letter grade and use a switch statement to
//return a comment based on their grade.

/* Switch statement info:
The switch statement compares the grade variable to each of the 
case values.
        -Each case value represents a possible letter grade.
        -The code block associated with each case displays a message 
        based on the grade.
        -If a match is found, the corresponding code block is executed.

The break statement is used to exit the switch statement 
after a match is found.   
*/

const grade = prompt(
  "Enter your letter grade (A, B, C, D, or F):"
).toUpperCase();

switch (grade) {
  case "A":
    console.log("Excellent job! You got an A.");
    break;
  case "B":
    console.log("Good job! You got a B.");
    break;
  case "C":
    console.log("You got a C. Keep working hard.");
    break;
  case "D":
    console.log("You got a D. You may want to consider some extra help.");
    break;
  case "F":
    console.log(
      "You got an F. Please reach out to your instructor for support.");
    break;
  default:
    console.log("Invalid grade. Please enter A, B, C, D, or F.");
}
