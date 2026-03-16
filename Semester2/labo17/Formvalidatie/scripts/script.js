const setup = () => {
    document.getElementById("valideer").addEventListener("click", valideer);
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const valideer = () => {

    let allesCorrect = true;

    // VOORNAAM
    let voornaam = document.getElementById("voornaam").value.trim();
    let errorVoornaam = document.getElementById("errorVoornaam");
    let veldVoornaam = document.getElementById("voornaam");

    errorVoornaam.innerText = "";
    veldVoornaam.classList.remove("fout");

    if (voornaam.length > 30){
        errorVoornaam.innerText = "max. 30 karakters";
        errorVoornaam.classList.add("error");
        veldVoornaam.classList.add("fout");
        allesCorrect = false;
    }

    // FAMILIENAAM
    let familienaam = document.getElementById("familienaam").value.trim();
    let errorFamilie = document.getElementById("errorFamilienaam");
    let veldFamilie = document.getElementById("familienaam");

    errorFamilie.innerText = "";
    veldFamilie.classList.remove("fout");

    if (familienaam === ""){
        errorFamilie.innerText = "verplicht veld";
        veldFamilie.classList.add("fout");
        allesCorrect = false;
    }
    else if (familienaam.length > 50){
        errorFamilie.innerText = "max 50 karakters";
        veldFamilie.classList.add("fout");
        allesCorrect = false;
    }

    // GEBOORTEDATUM
    let geboorte = document.getElementById("geboorte").value.trim();
    let errorGeboorte = document.getElementById("errorGeboorte");
    let veldGeboorte = document.getElementById("geboorte");

    errorGeboorte.innerText = "";
    veldGeboorte.classList.remove("fout");

    if (geboorte === ""){
        errorGeboorte.innerText = "verplicht veld";
        veldGeboorte.classList.add("fout");
        allesCorrect = false;
    }
    else{
        if (geboorte.length !== 10 ||
            geboorte[4] !== "-" ||
            geboorte[7] !== "-"){
            errorGeboorte.innerText = "formaat is niet jjjj-mm-dd";
            veldGeboorte.classList.add("fout");
            allesCorrect = false;
        }
        else{
            let jaar = geboorte.substring(0,4);
            let maand = geboorte.substring(5,7);
            let dag = geboorte.substring(8,10);

            if (!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)){
                errorGeboorte.innerText = "formaat is niet jjjj-mm-dd";
                veldGeboorte.classList.add("fout");
                allesCorrect = false;
            }
        }
    }

    // EMAIL
    let email = document.getElementById("email").value.trim();
    let errorEmail = document.getElementById("errorEmail");
    let veldEmail = document.getElementById("email");

    errorEmail.innerText = "";
    veldEmail.classList.remove("fout");

    if (email === ""){
        errorEmail.innerText = "verplicht veld";
        veldEmail.classList.add("fout");
        allesCorrect = false;
    }
    else{
        let atIndex = email.indexOf("@");

        if (atIndex === -1 || atIndex !== email.lastIndexOf("@") || atIndex === 0 || atIndex === email.length-1){
            errorEmail.innerText = "geen geldig email adres";
            veldEmail.classList.add("fout");
            allesCorrect = false;
        }
    }

    // KINDEREN
    let kinderen = document.getElementById("kinderen").value.trim();
    let errorKinderen = document.getElementById("errorKinderen");
    let veldKinderen = document.getElementById("kinderen");

    errorKinderen.innerText = "";
    veldKinderen.classList.remove("fout");

    if (!isGetal(kinderen) || kinderen < 0){
        errorKinderen.innerText = "is geen positief getal";
        veldKinderen.classList.add("fout");
        allesCorrect = false;
    }
    else if (kinderen >= 99){
        errorKinderen.innerText = "max 20 kinderen.";
        veldKinderen.classList.add("fout");
        allesCorrect = false;
    }

    // SUCCES
    if (allesCorrect){
        alert("ingelogd!");
    }
}

window.addEventListener("load", setup);