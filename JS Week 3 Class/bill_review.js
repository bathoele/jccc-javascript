let bill = parseFloat(prompt("what's the bill?"));
let tax = 0.093 * bill;
let tip = Number(bill) * 0.2;

let total = bill + tip + tax;

if (total > 20) {
  alert(`Oops! that's too much! You have to wash dishes.`);
}

// const formatttedTotal = total.toLocaleString('en-us', minimumFractionDigits, 2);

alert(`The tip is $${tip.toFixed(2)}, the tax is $${tax.toFixed(2)}, 
and the total bill is $${total.toFixed(2)}.`);