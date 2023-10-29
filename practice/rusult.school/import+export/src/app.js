import { getRandomColor } from './utils/utils';

export default function initApp() {
    console.log('Hello world!');

    const body = document.body;
    const btn = document.createElement('button');

    btn.textContent = 'Изменить цвет страницы';
    btn.className = 'button'

    body.append(btn);

    btn.addEventListener('click', (event) => {
        event.preventDefault()
        const color = getRandomColor();
        console.log(color);
        body.style.background = color;
    });
}