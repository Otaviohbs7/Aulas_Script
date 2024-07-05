// Atividade 2, Exercicio 8

const ler = require('readline-sync');


let soma = 0;
    const quantidadeNumeros = 18;

    
    for (let i = 1; i <= quantidadeNumeros; i++) {
        let numero = ler.questionFloat(`Digite o ${i}º número:`);
        
        
        while (isNaN(numero)) {
            numero = ler.questionInt(`Entrada inválida. Digite o ${i}º número novamente:`);
        }

        soma += numero;
    }

    
    if (soma > 500) {
        soma -= 100;
    }

    console.log("A soma dos números é:" + soma);