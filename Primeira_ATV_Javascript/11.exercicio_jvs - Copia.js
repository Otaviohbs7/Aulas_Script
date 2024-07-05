// Atividade 01 Exercício 11

const ler = require('readline-sync');

let num = ler.questionInt("Digite um Numero: ");

if (num % 10 == 0) {
    console.log("Esse número é Divisível por 10!");
} else if (num % 5 == 0) {
    console.log("Esse número é Divisível por 5!");
} else if (num % 2 == 0) {
    console.log("Esse número é Divisível por 2!");
} else {
    console.log("Esse número não é Divisível por 10, 5 ou 2!");
}