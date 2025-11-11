let sitat = "I aint praying for that new vet I'd rather have ma daaawgs back";
document.getElementById("thanksgiving").innerText = sitat;
console.log(sitat.toUpperCase());

// let sted1 = (prompt("Skriv et stedsnavn:")).length;
// let sted2 = (prompt("Skriv et til stedsnavn:")).length;

// let toiletrizz = Math.abs(sted1-sted2);

// console.log(toiletrizz);

// document.getElementById("diff").innerText = "Differansen mellom bokstavene til stedsnavnene du har oppgitt er " + toiletrizz;

let start = prompt("Nå skal du få vite hvordan du ligger an til å ta førerkort. Vennligst oppgi alder:");
start = parseInt(start)

while (!Number.isInteger(start)) {
    start = prompt("Skriv et tall, blud...");
    start = parseInt(start);
}

if (start === 67) {
    document.getElementById("alder").innerText ="SIX SEVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEN (Du kan ta bussførerkortet, lastebilførerkortet, bilførerkortet OG mopedførerkortet btw)";
    }   
    else if (start >= 70) {
    document.getElementById("alder").innerText = "Man getchyo old ahhhhh";
    } 
    else if (start >= 24)  {
    document.getElementById("alder").innerText = "Du kan ta bussførerkortet, lastebilførerkortet, bilførerkortet OG mopedførerkortet!";        
    } 
    else if (start >= 21) {
    document.getElementById("alder").innerText = "Du kan ta lastebilførerkortet, bilførerkortet OG mopedførerkortet!";    
    } 
    else if (start >= 18) {
    document.getElementById("alder").innerText = "Du kan ta bilførerkortet og mopedførerkortet!";        
    } 
    else if (start >= 16) {
        document.getElementById("alder").innerText = "Du kan bare ta mopedførerkortet :/";
    } 
    else {
    document.getElementById("alder").innerText = "Du er ikke gammel nok til å ta et førerkort...";
    }

