let arr = [];
function getSumOfSequence(number) {
    for (let i = 1; i <= number; i++) {
        arr.push(i)
    }
    let firstNumberInArray = arr.shift()
    let lastNumberInArray = arr.pop();
    return firstNumberInArray + lastNumberInArray;
}

// console.log(getSumOfSequence(), arr)
console.log(getSumOfSequence(665))