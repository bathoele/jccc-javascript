let price = 9.99,
    shipping = 2.99;
    let total = price + shipping;
    console.log(`price (${price}) + shipping (${shipping}) = total (${total})`);

    let discount = total * .2;

    let newTotal = total - discount;
    console.log(newTotal.toFixed(2));