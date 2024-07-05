// Atividade 01 Exercício 16

const ler = require('readline-sync');

let nome = ler.question("Digite o nome do funcionario: ");
let qtdprod = ler.questionInt("Digite a quantidade de produtos vendidos: ");

var comissao = 5;

if (qtdprod >= 200 && qtdprod <= 449) {
    let comissao = 7.5;
    let final = qtdprod * comissao;
    console.log("Funcionário - " + nome + " - sua comissão é: R$ " + final);
} else if (qtdprod >= 450) {
    let comissao = 10;
    let final = qtdprod * comissao;
    console.log("Funcionário - " + nome + " - sua comissão é: R$ " + final);
} else {
    let final = qtdprod * comissao;
    console.log("Funcionário - " + nome + " - sua comissão é: R$ " + final);
}


