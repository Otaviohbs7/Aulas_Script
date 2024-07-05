// Atividade 01, Exercicio 03

const ler = require('readline-sync');

let valorA = ler.questionInt("Digite valor A: ");
let valorB = ler.questionInt("Digite valor B: ");

if (valorA == valorB) {
    let valorC = valorA + valorB;
    console.log("Resultado: " + valorC);
} else {
 let valorC = valorA * valorB;
 console.log("Resultado: " + valorC);   
}
//Eu sou legal

