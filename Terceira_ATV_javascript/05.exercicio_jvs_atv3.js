// Atividade 2, Exercicio 5

const ler = require('readline-sync');

let somaDasIdades = 0;
let quantidadeDeIdades = 0;
let idade ;



do {
    idade =  ler.questionInt("Digite uma idade ou -1 para sair: ");

    if (idade >= 0) {
        somaDasIdades += idade;
        quantidadeDeIdades++;
    }
} while (idade > 0);

if (quantidadeDeIdades > 0) {
    let mediaDasIdades = somaDasIdades / quantidadeDeIdades;
    console.log("A média das idades é:", mediaDasIdades.toFixed(2));
} else {
    console.log("Nenhuma idade válida foi fornecida.");
}

