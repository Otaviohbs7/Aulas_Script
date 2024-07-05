// Atividade 01 Exercício 18

const ler = require('readline-sync');

let time1 = ler.question("Digite nome do 1° Time: ");
let gol1 = ler.questionInt("Digite quantidade de gols do 1° Time: ");

let time2 = ler.question("Digite nome do 2° Time: ");
let gol2 = ler.questionInt("Digite quantidade de gols do 2 °Time: ");

if (gol1 > gol2) {
    console.log("Time Vencedor: " + time1);
} else if (gol2 > gol1) {
    console.log("Time Vencedor: " + time2);
} else {
    console.log("EMPATE!!!");
}