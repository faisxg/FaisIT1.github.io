let personer = ["Faisal", "Thomas", "Magnus", "Oskar G", "Oskar H", "Bakir", "Ronnie", "Ulrik", "Lucas", "Snorre"]

const button = document.getElementById("knapp");

function tilfeldigTall(x) {
    return Math.floor(Math.random() * x);
}

button.addEventListener("click", function () {
    console.log(personer[tilfeldigTall(personer.length)])
    console.log(personer[tilfeldigTall(personer.length)])
})