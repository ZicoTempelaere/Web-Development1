const setup = () => {
    document.getElementById("button").addEventListener("click", telZoekwoord);
}

const telZoekwoord = () => {

    let tekst = document.getElementById("inputTekst").value;
    let zoek = document.getElementById("zoekTekst").value;

    let positie = tekst.indexOf(zoek);
    let aantal = 0;

    while (positie !== -1) {
        aantal++;
        positie = tekst.indexOf(zoek, positie + 1);
    }

    console.log(aantal);

    document.getElementById("output").innerHTML =
        "Aantal keer gevonden: " + aantal;
}

window.addEventListener("load", setup);