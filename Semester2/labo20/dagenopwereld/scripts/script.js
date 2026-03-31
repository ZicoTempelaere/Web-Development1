const setup = () => {

    let date = new Date();
    let geboorteDatum = new Date(2007, 6, 13);
    console.log(date);
    console.log(geboorteDatum);

    let resultaat = date - geboorteDatum;
    console.log("Aantal dagen op de aarde: " + Math.floor(resultaat / (1000 * 60 * 60 * 24)));
}
window.addEventListener("load", setup);