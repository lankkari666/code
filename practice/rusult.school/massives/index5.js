let clientsEstimations = [];

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation()
}

function askClientToGiveEstimation() {
    let estimation = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    if (estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation)
    }
}
const goodEstimations = clientsEstimations.filter((item => {
    return item > 5;
}))
console.log(goodEstimations)
const badEstimations = clientsEstimations.filter((item => {
    return item < 5;
}))
console.log(badEstimations)

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${badEstimations.length}`);




