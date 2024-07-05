// Atividade 2, Exercicio 6

const ler = require('readline-sync');

let totalUsuarios = 0;
let totalHomens = 0;
let totalMulheres = 0;
let nome;
let sexo;

while (true) {
    nome = ler.question("Digite o nome do usuário (ou digite 0 para encerrar):");

    if (nome === '0') {
        break;
    }

    sexo = ler.question("Digite o sexo do usuário (M para masculino, F para feminino):").toUpperCase();

  
    if (sexo === 'M') {
        totalHomens++;
    } else if (sexo === 'F') {
        totalMulheres++;
    }

    totalUsuarios++;
}

let porcentagemHomens = (totalHomens / totalUsuarios) * 100;
let porcentagemMulheres = (totalMulheres / totalUsuarios) * 100;

console.log("Total de usuários:", totalUsuarios);
console.log("Porcentagem de homens:", porcentagemHomens.toFixed(2) + "%");
console.log("Porcentagem de mulheres:", porcentagemMulheres.toFixed(2) + "%");
