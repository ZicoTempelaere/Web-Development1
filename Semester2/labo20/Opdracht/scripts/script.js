// const setup = () => {
//         let student1 = {
//             voornaam: "Jan",
//             familienaam: "Janssens",
//             geboorteDatum: new Date("1993-12-31"),
//             adres: {
//                 straat: "Kerkstraat 13",
//                 postcode: "8500",
//                 gemeente: "Kortrijk"
//             },
//             isIngeschreven: true,
//             namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
//             aantalAutos: 2
//         };
//
        // Object omzetten naar JSON string
//         let jsonString = JSON.stringify(student1);
//
//         console.log(jsonString);
//     };
//     window.addEventListener("load", setup);

const setup = () => {

    let jsonString = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';

    let student2 = JSON.parse(jsonString);

    console.log(student2.voornaam);
    console.log(student2.adres.gemeente);
};

window.addEventListener("load", setup);