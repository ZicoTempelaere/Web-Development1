const setup = () => {

    document.getElementById('Wijzig').addEventListener('click', wijzigTekst);

};
    const wijzigTekst = () => {
        document.getElementById("txtOutput").innerHTML = "Welkom!";


}
window.addEventListener("load", setup);