// Atividade 01,  Exercicio 01

const ler = require('readline-sync');


let numA = ler.questionInt("Digite um valor: ");

let numB = ler.questionInt("Digite outro valor: ");

let numC = ler.questionInt("Digite mais um valor: ");


let soma = numA + numB;

if (soma < numC) {

    console.log("O resultado da soma é " + soma + " e esse valor é menor que " + numC );
    
} else if (soma > numC){

    console.log("O resultado da soma é " + soma + " e esse valor é maior que " + numC );
    
} else {
    console.log("O resultado da soma é " + soma + " e esse valor é  igual a " + numC );

}





