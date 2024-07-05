// Atividade 03, Exercicio 03

const ler = require('readline-sync');

let quantidadeMaioresQue5 = 0;
    let quantidadeMenoresQue5 = 0;
    let i = 0;


    while (i < 10) {
        let numero = ler.questionInt("Digite um número:");

        if (numero > 5) {
            quantidadeMaioresQue5++;
        } else if (numero < 5) {
            quantidadeMenoresQue5++;
        }

        i++;
    }

    console.log("Quantidade de números maiores que 5:", quantidadeMaioresQue5);
    console.log("Quantidade de números menores que 5:", quantidadeMenoresQue5);


