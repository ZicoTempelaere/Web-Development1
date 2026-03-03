const setup = () => {

    let bereken = document.getElementById("bereken");
    bereken.addEventListener("click", berekenPrijs);
}

    const berekenPrijs = () => {
        let prijzen = document.getElementsByClassName("prijs");
        let aantallen = document.getElementsByClassName("aantal");
        let btws = document.getElementsByClassName("btw");
        let subtotalen = document.getElementsByClassName("subtotaal");

        let totaal = 0;

        for (let i = 0; i < prijzen.length; i++) {
            let prijs = parseInt(prijzen[i].innerHTML);
            let aantal = parseInt(aantallen[i].children[0].value);
            let btw = parseInt(btws[i].innerHTML);
            let subtotaal = prijs * aantal * (1 + (btw / 100));

            subtotalen[i].innerHTML = subtotaal.toFixed(2);

            totaal += subtotaal;

        }
        document.getElementById("totaal").innerHTML = totaal.toFixed(2);
    }
window.addEventListener("load", setup);