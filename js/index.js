import { imagePaths } from "./images.js";

const container = document.querySelector(".container");

const images = [];

function preloadImages(imgs, callback) {
    for (let imgPath of imgs) {
        const image = new Image();
        image.src = imgPath;
        images.push(image);
    }

    callback();
}

preloadImages(imagePaths, () => {
    const changeBackgroundImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        container.style.backgroundImage = `url(${images[randomIndex].src})`;
        sessionStorage.setItem("lastDisplayedImage", images[randomIndex].src);
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
    }, 2000);
});
