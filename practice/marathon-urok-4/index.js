const board = document.querySelector('#board')
// const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const SQUARE_NUMBER = 500;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
            setColor(square);
    })
    square.addEventListener('mouseleave', () => {
            removeColor(square);
    })

    board.append(square)
}

function setColor(el) {
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}

// function getRandomColor() {
//     const index =  Math.floor(Math.random() * colors.length)
//
//     return colors[index]
// }

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}