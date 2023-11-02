import { imagePaths } from "./images.js";

const container = document.querySelector(".container");

const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    container.style.backgroundImage = `url(${imagePaths[randomIndex]})`;
    sessionStorage.setItem("lastDisplayedImage", imagePaths[randomIndex]);
};

const lastDisplayedImage = sessionStorage.getItem("lastDisplayedImage");

setTimeout(() => {
    if (lastDisplayedImage) {
        container.style.backgroundImage = `url(${lastDisplayedImage})`;
    } else {
        changeBackgroundImage();
    }

    const rotationInterval = setInterval(changeBackgroundImage, 10000);

    setTimeout(() => {
        clearInterval(rotationInterval);
    }, 60000);
}, 2500);
