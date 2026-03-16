const setup = () => {

    let knop = document.getElementById("knop");
    knop.addEventListener("click", berekenTrigram);

}

const berekenTrigram = () => {
    let tekst = document.getElementById("invoer").value;

    let resultaat = "";

    for (let i = 0; i < tekst.length-2; i++) {
            resultaat += tekst.substring(i, i+3) + " - ";
    }


    resultaat = resultaat.slice(0,-3);
    document.getElementById("resultaat").innerText = resultaat;
    console.log(resultaat);

}
window.addEventListener("load", setup);