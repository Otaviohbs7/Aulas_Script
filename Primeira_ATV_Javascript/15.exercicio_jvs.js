
// Atividade 01 Exercício 15

const ler = require("readline-sync");

var meta = 1000;

let nome = ler.question("Digite o nome do funcionario: ");
let venda = ler.questionFloat("Digite o valor da vendas: ");

if (venda >= meta) {
    console.log("Funcionário(a) " + nome + ", VOCÊ GANHOU!!!");
} else {
    console.log("Funcionário(a) " + nome + ", VOCÊ NÃO GANHOU!!!");
    console.log("Meta do Mês: R$ " + meta);
}
