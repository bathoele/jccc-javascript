let favCandy = prompt("What is your favorite candy?!?!").toLowerCase();

switch (favCandy) {
    case "reeses":
        confirm("Peanutbutter and chocolate: nothing better.");
        break;
    case "skittles":
        confirm("Wrong answer. Thank you for your time...");
        break;
    case "apples":
        confirm("You're weird...");
        break;
    case "snickers":
        confirm("You must not be you... O_o");
        break;
    default:
        confirm("o    ____    o");
}