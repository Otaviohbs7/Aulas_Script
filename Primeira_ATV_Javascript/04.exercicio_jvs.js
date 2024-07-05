// Atividade 01, Exercicio 04

const ler = require('readline-sync');

let num = ler.questionInt("Digite um Numero: ");

if (num  % 2 == 0) {
    let result = num + 8;
    console.log("Resultado: " + result);
} else {
    let result = num + 10;
    console.log("Resultado: " + result);
}