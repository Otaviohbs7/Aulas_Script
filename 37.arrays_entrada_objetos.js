// Utilizando o Readline para capturar dados para um Objeto Array Matriz

const ler = require('readline-sync');

let cliente = [{}];

let check = true;

while (check) {
    let nome = ler.question("Digite seu nome: ");
    let idade = ler.questionInt("informe sua idade: ");
    let email = ler.question("Digite seu e-mail: ");
    let carteira = ler.questionFloat("Quanto ele tem de dinheiro? ");

    cliente.push({nome : nome, idade : idade,  email : email, carteira : carteira});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outro cliente ou 'sair' para finalizar.").toLowerCase();
    if (x === 'sair') {
        check = false;
        console.log("Sistema finalizado!!");
        
    }
    
}
console.table(cliente);
console.log("Informe uma das opções: ");
console.log("1- Listar Carteira do cliente com valor menor que 100 reais.");
console.log("2- Listar clientes em ordem alfabética.");
console.log("3- Sair.");

let opt = ler.questionInt("=> ");

if (opt == 1) {

    cliente.filter( c => c.carteira < 100);
    console.table(cli_cart);
    
} else if (opt == 2){
    ordem_alfa = cliente.sort((a, b) => a.nome.localeCompare(b.nome));
    console.table(ordem_alfa);
}else{

    console.log("Sistema finalizado!");
}