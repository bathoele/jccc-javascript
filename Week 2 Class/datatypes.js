/* Brendan Thoele, 10.17.2024 */

// Numbers

let problem = 11 + 11;
console.log("The answer is " + problem);

let problem2 = "11 + 11";
console.log("The answer is " + problem2);

let apples = 2;
let oranges = 3;

let ApplePrice = 1.99;
let OrangePrice = .99;

let totalPrice = ((apples * ApplePrice) + (oranges * OrangePrice)).toFixed(2);
console.log(`The total is $${totalPrice}`);

let salary = "98,000";
console.log(salary);

// Strings

const firstName = "Brendan";
const lastName = "Thoele";
let favFood = "Orange Chicken";

console.log(`${firstName} ${lastName}'s favorite food is ${favFood}.`);
console.log("Your name is",firstName,lastName,"and your favorite food is",favFood,".");

console.log(typeof firstName);

//Boolean

let online = false;
let student = true;

console.log(`You are ${test()}.`)

function test() {
    if (student === true) {
        if (online === true) {
        return "an online student";
        } else {
            return "a student";
        };
    } else {
        return "not a student";
    }
}