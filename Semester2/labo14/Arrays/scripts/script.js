const setup = () => {

    const familieleden = ["Opa", "Oma", "Vader", "Moeder", "Broer"];

    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);

    const VoegNaamToe = (naam) => {
        familieleden.push(naam);
    }
    VoegNaamToe('zico');
    console.log(familieleden.toString());
}
window.addEventListener("load", setup);