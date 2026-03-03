const setup = () => {

    let knoppen = document.getElementsByClassName("button");

    for(let i = 0; i < knoppen.length; i++){
        knoppen[i].addEventListener("click", veranderKleur);
    }
}

const veranderKleur = (event) => {
    let knop = event.target;

    if(knop.style.backgroundColor === "blue"){
        knop.style.backgroundColor = "white";
    } else {
        knop.style.backgroundColor = "blue";
    }
}

window.addEventListener("load", setup);