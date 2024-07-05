// Atividade 01 Exercício 12

const ler = require('readline-sync');
console.log("---------Qual é o dia da semana--------------");
let num = ler.questionInt("- Digite um numero inteiro entre 1 e 7: ");

if (num == 1) {
    console.log("Esse número corresponde ao Domingo!");
} else if (num == 2) {
    console.log("Esse número corresponde a Segunda-Feira!");
} else if (num == 3) {
    console.log("Esse número corresponde a Terça Feira!");
} else if (num == 4) {
    console.log("Esse número corresponde a Quarta-Feira!");
} else if (num == 5) {
    console.log("Esse número corresponde a Quinta-Feira!");
} else if (num == 6) {
    console.log("Esse número corresponde a Sexta_Feira!");
} else if (num == 7) {
    console.log("Esse número corresponde ao Sábado!");
} else {
    console.log("Não existe dia da semana com esse número! Tente Novamente!");
}