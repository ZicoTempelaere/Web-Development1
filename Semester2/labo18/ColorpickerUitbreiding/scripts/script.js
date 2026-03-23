const setup = () => {

    let colorPicker = document.getElementsByClassName("colorPicker");

    for (let i = 0; i < colorPicker.length; i++) {
        colorPicker[i].addEventListener("input", update);
    }

    document.getElementById("saveBtn").addEventListener("click", saveColor);
}

const update = () => {
    let sliders = document.getElementsByClassName("colorPicker");

    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;

    let kleur = `rgb(${rood}, ${groen}, ${blauw})`;

    document.getElementById("colorBlock").style.backgroundColor = kleur;

    document.getElementById("roodvalue").textContent = "Rood: " + rood;
    document.getElementById("groenvalue").textContent = "Groen: " + groen;
    document.getElementById("blauwvalue").textContent = "Blauw: " + blauw;
}

//save functie
const saveColor = () => {

    let sliders = document.getElementsByClassName("colorPicker");

    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;

    let kleur = `rgb(${rood}, ${groen}, ${blauw})`;

    // container (voor positie X knop)
    let container = document.createElement("div");
    container.classList.add("colorContainer");

    // vierkantje
    let blok = document.createElement("div");
    blok.classList.add("colorBox");
    blok.style.backgroundColor = kleur;

    // 👉 klik op blok = kleur terugzetten
    blok.addEventListener("click", () => {
        sliders[0].value = rood;
        sliders[1].value = groen;
        sliders[2].value = blauw;
        update();
    });

    // delete knop
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation(); 
        container.remove();
    });

    container.appendChild(blok);
    container.appendChild(deleteBtn);

    document.getElementById("savedColors").appendChild(container);
}

window.addEventListener("load", setup);