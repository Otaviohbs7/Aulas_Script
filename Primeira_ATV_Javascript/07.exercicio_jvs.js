// Atividade 01, Exercicio 07

const ler = require('readline-sync');

console.log("---------Mercado Do tião ---------");
let prod = ler.question(" Digite o produto: ");
let preco = ler.questionFloat("Digite o preço: R$ ");
let pag = ler.questionInt("DIGITE A FORMA DE PAGAMENTO: \n 1- A vista Dinheiro ou Cheque \n 2- A vista cartão de crédito \n 3- 2x s/ juros \n 4- 2x c/ juros \n Digite o código: ");
console.log("--------------------------------------");

if (pag == 1) {
    let pagfinal = preco - ((preco* 10) / 100);
    console.log("Produto com desconto em dinheiro/cheque: R$ " + pagfinal);
} else if( pag == 2) {
    let pagfinal =preco -((preco * 15) / 100);
    console.log("Produto com desconto no credito a vista: R$ " + pagfinal);

} else if (pag == 3) {
    console.log("Preço final 2x s/ juros no cartão: R$ " + preco);

    
} else {
    let pagfinal = preco + ((preco * 10) / 100);
    console.log("Preço final 2x com juros no cartão: R$ " + pagfinal);
    
}