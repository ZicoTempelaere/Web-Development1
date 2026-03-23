const setup = () => {

    let items = document.querySelectorAll('li');

    for (let item of items) {
        item.classList.add('listitem');
    }

    let img = document.createElement('img');

    img.setAttribute("src", "images/linus.png");

    document.body.appendChild(img);
}
window.addEventListener("load", setup);