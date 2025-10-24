let sitat = "I aint praying for that new vet I'd rather have ma daaawgs back";
document.getElementById("thanksgiving").innerText = sitat;
console.log(sitat.toUpperCase());

let sted1 = (prompt("Skriv et stedsnavn:")).length;
let sted2 = (prompt("Skriv et til stedsnavn:")).length;

let toiletrizz = Math.abs(sted1-sted2);

console.log(toiletrizz);

document.getElementById("diff").innerText = "Differansen mellom bokstavene til stedsnavnene du har oppgitt er " + toiletrizz;