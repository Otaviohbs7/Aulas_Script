// Atividade 02, Exercicio 01

const ler = require('readline-sync');

let valor = ler.questionFloat("Digite o valor da compra: ");

console.log("Selecione o comprador: ");
console.log(" 1. Clinte comum \n 2. Funcionário \n 3. VIP ");
let opc = ler.questionInt(" => ");
let desconto = 0;

switch (opc) {
    case 1:
        console.log("valor: " + valor);

        break;

    case 2:
        desconto = valor - ((valor * 10) / 100);
        console.log("A sua compra com desconto é: " + desconto);        
        break;

    case 3:
        desconto = valor -(( valor * 5) / 100);
        console.log("A sua compra com desconto é: " + desconto);
        
        break;

    default:
        console.log("Opção Invalida!!!");
        break;
}