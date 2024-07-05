// Atividade 01, Exercicio 06

const ler = require('readline-sync');

let peso = ler.questionFloat(" Digite o seu peso: ");
let altura = ler.questionFloat("Digite sua altura: ");

let imc = peso /(altura * 2);

if (imc < 18.5) {
    console.log("Você esta abaixo do peso ideal para um adulto! Seu Imc: " + imc);
    
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você esta com o peso ideal para um adulto! Seu imc: " + imc);

} else if (imc >= 25 && imc <= 30) {
    console.log("Você esta acima do peso ideal para um adulto: " + imc);
        
} else {
    console.log("você esta obeso! Seu imc: " + imc);
        
    }
    

