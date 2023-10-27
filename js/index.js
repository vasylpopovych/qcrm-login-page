import { images } from "./images.js";

const container = document.querySelector(".container");

const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    container.style.backgroundImage = `url(${images[randomIndex]})`;
    sessionStorage.setItem("lastDisplayedImage", images[randomIndex]);
};

const lastDisplayedImage = sessionStorage.getItem("lastDisplayedImage");

if (lastDisplayedImage) {
    container.style.backgroundImage = `url(${lastDisplayedImage})`;
} else {
    changeBackgroundImage();
}

const rotationInterval = setInterval(changeBackgroundImage, 10000);

setTimeout(() => {
    clearInterval(rotationInterval);
}, 60000);
