// Atividade 2, Exercicio 7

const ler = require('readline-sync');

let totalProdutos = 15;
    let valorTotal = 0;
    let produtoMaisCaro = "";
    let valorMaisCaro = -1;
    let produtoMaisBarato = "";
    let valorMaisBarato = Number.MAX_VALUE;
    let contador = 0;

    do {
        contador++;
        let nomeProduto = ler.question(`Digite o nome do produto ${contador}:`);
        let valorProduto = ler.questionFloat(`Digite o valor do produto ${contador}:`);

        valorTotal += valorProduto;

       
        if (valorProduto > valorMaisCaro) {
            valorMaisCaro = valorProduto;
            produtoMaisCaro = nomeProduto;
        }


        if (valorProduto < valorMaisBarato) {
            valorMaisBarato = valorProduto;
            produtoMaisBarato = nomeProduto;
        }

    } while (contador < totalProdutos);

 
    console.log("Valor total dos produtos:", valorTotal.toFixed(2));
    console.log("Produto mais caro:", produtoMaisCaro, "- Valor:", valorMaisCaro.toFixed(2));
    console.log("Produto mais barato:", produtoMaisBarato, "- Valor:", valorMaisBarato.toFixed(2));
