let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    score: 0,
    timeoutId: 0
};

const setup = () => {
    const foto = document.querySelector('img');
    const startBtn = document.getElementById('startBtn');

    // klikken op afbeelding
    foto.addEventListener('click', verplaats);
    foto.addEventListener('click', veranderFoto);

    // klik op startknop
    startBtn.addEventListener('click', startSpel);
};

const startSpel = () => {
    const foto = document.querySelector('img');

    // start automatisch bewegen en veranderen van afbeelding elke seconde
    global.timeoutId = setInterval(() => {
        verplaats();
        veranderFoto();
    }, 1000);
};

const verplaats = () => {
    const foto = document.querySelector('img');

    const maxX = window.innerWidth - global.IMAGE_SIZE;
    const maxY = window.innerHeight - global.IMAGE_SIZE;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    foto.style.left = randomX + "px";
    foto.style.top = randomY + "px";
};

const veranderFoto = () => {
    const foto = document.querySelector('img');
    const randomGetal = Math.floor(Math.random() * global.IMAGE_COUNT) + 1;

    foto.src = global.IMAGE_PATH_PREFIX + randomGetal + global.IMAGE_PATH_SUFFIX;
};

window.addEventListener("load", setup);