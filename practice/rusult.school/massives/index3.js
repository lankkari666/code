// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const lowerCaseCoffees = coffees.map(e => e.toLowerCase())
// const capitalizeFirstLetter = s => s && s[0].toUpperCase() + s.slice(1)
//
// let coffeeName = prompt('Поиск кофе по названию:').toLowerCase();
// let coffeeNumber = lowerCaseCoffees.findIndex((name) => {
//     return name === coffeeName;
// });
//
//
// for (let i = 0; i < lowerCaseCoffees.length; i++) {
//     if (lowerCaseCoffees[i] === coffeeName) {
//         alert(`Держите ваш любимый кофе ${capitalizeFirstLetter(coffeeName)}. Он ${coffeeNumber + 1} по популярности в нашей кофейне.`)
//     } else if (coffeeName !== lowerCaseCoffees[i]) {
//         alert('К сожалению, такого вида кофе нет в наличии')
//     }
//
// }

const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt("Поиск кофе по названию:");

const index = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());

if (index !== -1) {
    const coffee = coffees[index];
    const number = index + 1;
    alert(`Держите ваш любимый кофе ${coffee}. Он ${number}-й по популярности в нашей кофейне.`);
} else {
    alert("К сожалению, такого вида кофе нет в наличии");
}