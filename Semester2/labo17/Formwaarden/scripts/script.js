const setup = () => {
    document.getElementById("toon").addEventListener("click", toonResultaat);
}

const toonResultaat = () => {

    // checkbox
    let roker = document.getElementById("roker").checked;
    console.log("Is roker:", roker);

    // radiobuttons
    let talen = document.getElementsByName("taal");
    let moedertaal;

    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            moedertaal = talen[i].value;
        }
    }

    console.log("Moedertaal:", moedertaal);

    // select (enkelvoudig)
    let buurlandSelect = document.getElementById("buurland");
    let buurland = buurlandSelect.options[buurlandSelect.selectedIndex].text;

    console.log("Favoriete buurland:", buurland);

    // multi-select
    let bestelling = document.getElementById("bestelling");

    console.log("Bestelling:");

    for (let i = 0; i < bestelling.options.length; i++) {
        if (bestelling.options[i].selected) {
            console.log(bestelling.options[i].text);
        }
    }

}

window.addEventListener("load", setup);