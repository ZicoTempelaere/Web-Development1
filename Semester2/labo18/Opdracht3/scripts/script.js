const setup = () => {

    let knop = document.querySelector("button");
    knop.addEventListener("click", voegtoe)

}
const voegtoe = () => {
    let element = document.createElement("p");
    element.textContent = "Nieuw stukje tekst"
    let div = document.querySelector("#myDIV");
    div.appendChild(element);
}
window.addEventListener("load", setup);