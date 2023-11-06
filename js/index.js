import { imagePaths } from "./images.js";

const container = document.querySelector(".container");

function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

const preloadImages = async (imagePaths) => {
    const imageObjects = await Promise.all(imagePaths.map(preloadImage));
    return imageObjects;
};

const applyBackgroundImage = (image) => {
    container.style.backgroundImage = `url(${image.src})`;
    sessionStorage.setItem("lastDisplayedImage", image.src);
};

const setRandomBackgroundImage = async () => {
    try {
        const preloadedImages = await preloadImages(imagePaths);

        const lastDisplayedImage = sessionStorage.getItem("lastDisplayedImage");
        if (lastDisplayedImage) {
            const cachedImage = preloadedImages.find((image) => image.src === lastDisplayedImage);
            if (cachedImage) {
                applyBackgroundImage(cachedImage);
            } else {
                applyBackgroundImage(preloadedImages[0]);
            }
        } else {
            applyBackgroundImage(preloadedImages[0]);
        }

        const rotationInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * preloadedImages.length);
            applyBackgroundImage(preloadedImages[randomIndex]);
        }, 10000);

        setTimeout(() => {
            clearInterval(rotationInterval);
        }, 60000);
    } catch (error) {
        console.error("Error preloading images:", error);
    }
};

setTimeout(() => {
    setRandomBackgroundImage();
}, 2000);
