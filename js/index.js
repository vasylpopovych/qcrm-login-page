/* 
BUGS:
- зробити щоб розмір зображень був однаковий і вони не розтягувались коли змінюються.
- move images array to another file
*/

const images = [
    "https://images.unsplash.com/photo-1553080608-195dfe15293c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
    "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    "https://images.unsplash.com/photo-1600699260196-aca47e6d2125?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80",
    "https://images.unsplash.com/photo-1623680423092-aa96f4c45da8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80",
    "https://images.unsplash.com/photo-1698209237983-00fc4b302749?auto=format&fit=crop&q=80&w=1579&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672871236340-5213252ef010?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697658741356-b662d0389890?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1684600157622-771ba70313f8?auto=format&fit=crop&q=80&w=1444&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698090739317-33d6ba66b662?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698117030662-2a5c5243efee?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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
