z// Atividade 01 Exercício 14

const ler = require('readline-sync');

let letra = ler.question("Digite uma Letra: ").toUpperCase();

const vogal = ['A', 'E', 'I', 'O', 'U'];

if (vogal.includes(letra)) {
    console.log("A Letra - " + letra + " - é uma Vogal!");
} else {
    console.log("A Letra - " + letra + " - é uma Consoante!");
}
