const setup = () => {
    document.getElementById("button").addEventListener("click", toon);
}

const toon = () => {

    let tekst = document.getElementById("input").value;

    let resultaat = maakMetSpaties(tekst);

    console.log(resultaat);

    document.getElementById("output").innerHTML = resultaat;
}

const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {

        if (inputText[i] !== " ") {
            result += inputText[i] + " ";
        }

    }

    return result.trim();
}

window.addEventListener("load", setup);