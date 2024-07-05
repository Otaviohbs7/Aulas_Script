// Atividade 01, Exercicio 09

const ler = require('readline-sync');

let num = ler.questionInt("Digite um numero: ");

if (num % 3 == 0) {
    console.log("Esse numero é multiplo de 3.");
    
} else {
console.log("Esse numero não é multiplo de 3.");    
}