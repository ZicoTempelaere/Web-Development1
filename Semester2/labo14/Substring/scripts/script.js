const setup = () => {

let button = document.getElementById("btnSubstring");
button.addEventListener("click", woordsubstring);

}

    const woordsubstring = () => {
    let txtInput = document.getElementById("txtInput").value;
    let beginIndex = parseInt(document.getElementById("beginIndex").value);
    let endIndex = parseInt(document.getElementById("endIndex").value);

    let output = txtInput.substring(beginIndex, endIndex);
    document.getElementById("txtOutput").innerText = output;
    }

window.addEventListener("load", setup);