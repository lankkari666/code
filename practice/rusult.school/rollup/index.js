import "./index.css";
import JS_IMAGE from "./assets/js-png.png";

console.log("hello!")

const jsImageHTML = document.createElement("img");
jsImageHTML.className = "js-image";
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);