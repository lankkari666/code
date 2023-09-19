const numbers = [10, 4, 100, -5, 54, 2];

let sumFor = 0
for (let i = 0; i < numbers.length; i++) {
    sumFor+= numbers[i]**3
}
console.log(sumFor)

let sumForOf = 0;
for (let number of numbers) {
    sumForOf+= number**3
}
console.log(sumForOf)

let sumForEach = 0;
numbers.forEach((number) => {
    sumForEach+= number**3
})
console.log(sumForEach)

let sumReduce = 0;
numbers.reduce((acc, number) => {
    return sumReduce = acc + number**3;
});

console.log(sumReduce)