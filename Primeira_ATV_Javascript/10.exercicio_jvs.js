// Atividade 01, Exercicio 09

const ler = require('readline-sync');

console.log("---------------prefitura de NL---------");
let nome = ler.question("Digite o nome do funcionario: ");
let salbruto = ler.questionFloat("Digite o salario bruto:  R$ ");
let prest= ler.questionFloat("Digite o valor da prestação:  R$ ");
console.log("-----------------------------------");

let valmax =(salbruto * 25) / 100;

if (prest > valmax) {
console.log( " O funcionario: " + nome + " não tem direito a linha de crédito!");
    
} else {
console.log("O funcionário: " + nome + " tem direito a requerer a linha de crédito!: ");    
}