import './index.css';
import JS_PNG from './assets/js-png.png';



console.log("hello!")

const jsImageHTML = document.createElement("img");
jsImageHTML.className = "js-image";
jsImageHTML.src = JS_PNG;

document.body.append(jsImageHTML);