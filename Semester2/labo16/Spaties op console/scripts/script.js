const setup = () => {
    let knop = document.getElementById("button");
    knop.addEventListener("click", toonTekst);
}

const toonTekst = () => {

    let tekst = document.getElementById("input").value;
    let resultaat = "";

    for (let i = 0; i < tekst.length; i++) {

        if (tekst[i] !== " ") {
            resultaat += tekst[i] + " ";
        }

    }

    resultaat = resultaat.trim();

    console.log(resultaat);

    document.getElementById("output").innerHTML = resultaat;
}

window.addEventListener("load", setup);