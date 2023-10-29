import './index.css';

const btn = document.querySelector('.cookie-consent__button')
const textDiv = document.querySelector('.cookie-consent');
const isButtonClicked = localStorage.getItem('isButtonClicked');

if (isButtonClicked) {
    textDiv.classList.add('hide');
} else {
    textDiv.classList.remove('hide');
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    textDiv.classList.add('hide');
    localStorage.setItem('isButtonClicked', true)
})