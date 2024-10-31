//Extra Credit solution for Week 4 -switch statements

let choice;
let num1;
let num2;

choice = parseInt(
  prompt(`
    Enter your choice:
    Menu:
    1. Add two numbers
    2. Subtract two numbers
    3. Multiply two numbers
    4. Divide two numbers
    5. Exit`)
);

switch (choice) {
  case 1:
    num1 = parseInt(prompt("Enter the first number:"));
    console.log(num1);
    num2 = parseInt(prompt("Enter the second number:"));
    let sum = num1 + num2;
    console.log(sum);
    alert(`Sum: ${sum}`);
    break;
  case 2:
    num1 = parseFloat(prompt("Enter the first number:"));
    num2 = parseFloat(prompt("Enter the second number:"));
    let difference = num1 - num2;
    alert(`Difference:${difference}`);
    break;
  case 3:
    num1 = parseFloat(prompt("Enter the first number:"));
    num2 = parseFloat(prompt("Enter the second number:"));
    let product = num1 * num2;
    alert(`Product: ${product}`);
    break;
  case 4:
    num1 = parseFloat(prompt("Enter the first number:"));
    num2 = parseFloat(prompt("Enter the second number:-NOT A ZERO"));
    let quotient = num1 / num2;
    alert(`Quotient: ${quotient}`);
    break;
  case 5:
    alert("Exiting the program.");
    break;
  default:
    alert("Invalid choice. Please try again.");
}
