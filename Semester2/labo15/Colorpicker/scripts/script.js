const setup = () => {

    let colorPicker = document.getElementsByClassName("colorPicker");

    for (let i = 0; i < colorPicker.length; i++) {
        colorPicker[i].addEventListener("input", update);
    }
}

    const update = () => {
    let rood = document.getElementsByClassName("colorPicker")[0].value;
    let groen = document.getElementsByClassName("colorPicker")[1].value;
    let blauw = document.getElementsByClassName("colorPicker")[2].value;

    let kleur = "rgb(" + rood + "," + groen + "," + blauw + ")";

    let colorBlock = document.getElementById("colorBlock");
    colorBlock.style.backgroundColor = kleur;

    document.getElementById("roodvalue").textContent = "Rood: " + rood;
    document.getElementById("groenvalue").textContent = "Groen: " + groen;
    document.getElementById("blauwvalue").textContent = "Blauw: " + blauw;
    }

window.addEventListener("load", setup);