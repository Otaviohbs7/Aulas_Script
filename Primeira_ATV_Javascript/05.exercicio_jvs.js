// Atividade 01, Exercicio 05

const ler = require('readline-sync');

let num1 = ler.questionInt("Digite um Numero: ");
let num2 = ler.questionInt("Digite mais um Numero: ");
let num3 = ler.questionInt("Digite outro Numero: ");

if (num1 > num2> num3) {
    console.log("A ordem decrescente é: " + num1 + num2 + num3);
} else if (num3 > num2 > num1) {
    console.log("A ordem decrescente é: " + num1 + num3 + num2);
 } else if (num2 > num1 > num3) {
    console.log("A ordem decrescente é: " + num2 + num1 + num3);
} else if (num2 > num3 > num1) {
    console.log("A ordem decrescente é: " + num2 + num3 + num1);
} else if (num3 < num2 < num1) {
    console.log("A ordem decrescente é: " + num3 + num2 + num1);
} else {
    console.log("A ordem decrescente é: " + num3 + num1 + num2);

    
  }  
    
