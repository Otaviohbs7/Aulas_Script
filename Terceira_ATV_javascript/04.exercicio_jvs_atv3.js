// Atividade 03, Exercicio 04

const ler = require('readline-sync');

let moradoresBH = 0;
let moradoresForaBH = 0;
let i = 0;

while (i < 20) {
    let nome = ler.question("Digite o nome do usuário:");
    let cidade = ler.question("Digite a cidade natal do usuário:");
    if (cidade.toLowerCase() === "bh" || cidade.toLowerCase() === "belo horizonte") {
        moradoresBH++;
    } else {
        moradoresForaBH++;
    }

    i++;
}

console.log("Quantidade de moradores em BH:", moradoresBH);
console.log("Quantidade de moradores fora de BH:", moradoresForaBH);
