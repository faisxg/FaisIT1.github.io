let arrayTall = [];

for (let i = 0; i < 10; i++){
    arrayTall.push(Math.floor(Math.random()*10) + 1);
}

console.log(arrayTall);

let tallOver5 = 0;
let antall4 = 0;
let sum = 0;
let gjennomsnitt = 0;
let høyesteTall = -10;
let lavesteTall = Infinity

for (let i = 0; i < arrayTall.length; i++) {
    if (arrayTall[i] > 5) {
        tallOver5++;
    }
    
    if (arrayTall[i] == 4) {
        antall4++;
    }
    
    sum = sum + arrayTall[i];
    
    gjennomsnitt = gjennomsnitt + (arrayTall[i]/10)

    if (arrayTall[i] > høyesteTall) {
        høyesteTall = arrayTall[i];
    }

    if (arrayTall[i] < lavesteTall) {
        lavesteTall = arrayTall[i];
    }
}

console.log(tallOver5);
console.log(antall4);
console.log(sum);
console.log(gjennomsnitt);
console.log(høyesteTall);
console.log(lavesteTall);