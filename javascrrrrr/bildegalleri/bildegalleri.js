const bilde = document.querySelector("#bilde");

let bildeGalleri = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6N0GpKL_XPHmC2lJwF-8pRjyqDAhno_WlQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqVcarbvQyOPZWBEOu-qhKipyBj9pnjoNZwfsaz-th50PPKjRbk_xqZTero9O4-rRswU&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbrFxOpTVpj3VDLY3PDI0pOxgv0kH7eQ3ieUf01EowB1RkxPLMCrC0iaHIoeBpLCq9Rk&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbjsaziiqoNTtpZWqnwDciN9RxL5OcIU7Vw&s","https://i.pinimg.com/236x/4a/54/5f/4a545f96b059d653eb2edc276cbe6bae.jpg"];

let bildeNummer = 0;

bilde.src = bildeGalleri[bildeNummer]

const venstre = document.querySelector("#left")

venstre.addEventListener("click",klikkVenstre)


function klikkVenstre() {
    bildeNummer = bildeNummer - 1;

    if (bildeNummer < 0) {
        bildeNummer = bildeGalleri.length - 1
    }

    bilde.src = bildeGalleri[bildeNummer]
}


const hoyre = document.querySelector("#right");

hoyre.addEventListener("click",klikkHoyre)

function klikkHoyre() {
    bildeNummer = bildeNummer + 1

    if (bildeNummer >= bildeGalleri.length) {
        bildeNummer = 0
    }

    bilde.src = bildeGalleri[bildeNummer]
}