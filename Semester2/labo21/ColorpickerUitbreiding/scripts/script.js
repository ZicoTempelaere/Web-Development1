const setup = () => {
    let colorPicker = document.getElementsByClassName("colorPicker");

    for (let i = 0; i < colorPicker.length; i++) {
        colorPicker[i].addEventListener("input", update);
    }

    document.getElementById("saveBtn").addEventListener("click", saveColor);

    loadState(); // 👉 belangrijk: alles terug ophalen
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

    // 👉 sliders opslaan
    saveSliders();
}

const saveSliders = () => {
    let sliders = document.getElementsByClassName("colorPicker");

    let data = {
        r: sliders[0].value,
        g: sliders[1].value,
        b: sliders[2].value
    };

    localStorage.setItem("sliderValues", JSON.stringify(data));
}

const saveColor = () => {
    let sliders = document.getElementsByClassName("colorPicker");

    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;

    let kleur = `rgb(${rood}, ${groen}, ${blauw})`;

    let container = document.createElement("div");
    container.classList.add("colorContainer");

    let blok = document.createElement("div");
    blok.classList.add("colorBox");
    blok.style.backgroundColor = kleur;

    blok.addEventListener("click", () => {
        sliders[0].value = rood;
        sliders[1].value = groen;
        sliders[2].value = blauw;
        update();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        container.remove();
        saveFavorites(); // 👉 update storage
    });

    container.appendChild(blok);
    container.appendChild(deleteBtn);

    document.getElementById("savedColors").appendChild(container);

    saveFavorites(); //opslaan na toevoegen
}

// FAVORIETEN OPSLAAN
const saveFavorites = () => {
    let containers = document.querySelectorAll(".colorBox");
    let colors = [];

    containers.forEach(box => {
        colors.push(box.style.backgroundColor);
    });

    localStorage.setItem("favorites", JSON.stringify(colors));
}

//STATE TERUG INLADEN
const loadState = () => {

    // sliders terugzetten
    let sliderData = JSON.parse(localStorage.getItem("sliderValues"));

    if (sliderData) {
        let sliders = document.getElementsByClassName("colorPicker");

        sliders[0].value = sliderData.r;
        sliders[1].value = sliderData.g;
        sliders[2].value = sliderData.b;

        update();
    }

    // favorieten terugzetten
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites) {
        favorites.forEach(kleur => {

            let container = document.createElement("div");
            container.classList.add("colorContainer");

            let blok = document.createElement("div");
            blok.classList.add("colorBox");
            blok.style.backgroundColor = kleur;

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList.add("deleteBtn");

            deleteBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                container.remove();
                saveFavorites();
            });

            container.appendChild(blok);
            container.appendChild(deleteBtn);

            document.getElementById("savedColors").appendChild(container);
        });
    }
}

window.addEventListener("load", setup);