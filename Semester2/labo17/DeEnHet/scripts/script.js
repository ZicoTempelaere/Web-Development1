const setup = () => {

    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    for (let i = 0; i < zin.length; i++) {

        if (zin.substring(i, i + 2) === "de") {
            console.log("het");
            i++; // sla de e over
        } else {
            console.log(zin[i]);
        }

    }

}

window.addEventListener("load", setup);