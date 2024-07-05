// Atividade 05, Exercicio 06

const ler = require('readline-sync');

let compras=[];

let check = true;

while (check) {
    
    let produto = ler.question("Informe o que deseja comprar ou tecle 1 para sair: ").toLowerCase();
    if (produto == 1) {
        
        check=false;
    } else {
        
        compras.push(produto);
    }
}

let comprasordem= compras.sort((a,b) => a.localeCompare(b));
console.clear();
console.log("--------COMPRAS-------");
console.table(comprasordem);