const setup = () => {

    let gemeenten = [];
    let invoer = prompt("Geef een gemeente (stop om te stoppen)");

    while (invoer !== null && invoer.toLowerCase() !== "stop") {

        if (invoer.trim() !== "") {
            gemeenten.push(invoer);
        }

        invoer = prompt("Geef een gemeente (stop om te stoppen)");
    }

    gemeenten.sort((a, b) => a.localeCompare(b));

    let lijst = document.getElementById("gemeenten");

    for (let i = 0; i < gemeenten.length; i++) {

        let option = document.createElement("option");
        option.text = gemeenten[i];

        lijst.appendChild(option);
    }
}

window.addEventListener("load", setup);