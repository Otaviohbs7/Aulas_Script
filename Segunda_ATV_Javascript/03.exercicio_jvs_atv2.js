// Atividade 02, Exercicio 03

const ler = require('readline-sync');

let num = ler.questionFloat("Digite um numero: ");

console.log("--------Calculadora---------");
console.log(" 101. Raiz quadrada \n 102. A Metade \n 103. 10% do numero \n 104. O dobro");
let opt = ler.questionInt(" => ");
let calc = 0;

switch (opt) {
    case 101:
        
    calc = Math.sqrt (num);
    console.log("Resultado: " + calc);

        break;

    case 102:

        calc = num / 2;
        console.log("Resultado: " + calc);
        
        break;

    case 103:

        calc = num - ((num * 10) / 100);
        console.log("Resultado: " + calc);
        
        break;

    case 104:
        
    calc = num * 2;
    console.log("Resulta: " + calc);

        break;

    default:
        console.log("Opção Invalida!!!!");
        break;
}