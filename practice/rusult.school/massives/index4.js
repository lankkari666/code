const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => {
    return price + 0.5;
});

coffees.forEach((coffee, index) => {
    const price = updatedPrices[index];
    alert(`Кофе ${coffee} сейчас стоит ${price} евро`);
});

// coffeeIndex = coffees.findIndex(coffee => {
//     return coffee
// });
// updatedPriceIndex = updatedPrices.findIndex(price => {
//     return price
// });
/*

console.log(updatedPrices)*/
