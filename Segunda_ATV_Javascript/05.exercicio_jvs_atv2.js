// Atividade 02, Exercicio 05

const ler = require('readline-sync');

let dia = ler.questionInt("Digite um dia: ");
let estacoes = ler.questionInt("Digite um mês: ");
let ano = ler.questionInt("Digite um ano: ");

console.log("Data registrada: " + dia + "/" + estacoes + "/" + ano);
console.log("Confirma?  \n 1. Sim \n 2. Não");
let conf = ler.questionInt(" => ");
console.clear;

if (conf == 1) {
    switch (estacoes) {
        case 1:
        case '01':

            console.log("A estação do ano referente ao mês de Janeiro é Verão: ");   

        break;

        case 2:
        case '02':
            
            console.log("A estação do ano referente ao mês de Fevereiro é Verão: ");  

        break;

        case 3:
        case '03':

            console.log("A estação do ano referente ao mês de Março é Verão: ");

        break;

        case 4:
        case '04':

            console.log("A estação do ano referente ao mês de Abril é Outono: ");

        break;

        case 5:
        case '05':

            console.log("A estação do ano referente ao mês de Maio é Outono: ");

        break;

        case 6:
        case '06':

             console.log("A estação do ano referente ao mês de Junho é Outono: ");
            
        break;

        case 7:
        case '07':

            console.log("A estação do ano referente ao mês de Julho é Inverno: ");
            
        break;

        case 8:
        case '08':

            console.log("A estação do ano referente ao mês de Agosto é Inverno: ");
            
        break;

        case 9:
        case '09':

            console.log("A estação do ano referente ao mês de Setembro é Inverno: ");

        break;

        case 10:
        case '10':

            console.log("A estação do ano referente ao mês de Outubro é primavera: ");

        break;

        case 11:
        case '11':

            console.log("A estação do ano referente ao mês de Novembro é primavera: ");

        break;

        case 12:
        case '12':

            console.log("A estação do ano referente ao mês de Dezembro é Primavera: ");

        break;
    
        default:
            console.log("Mês invalido!!!");
            break;
    }
} else {
    console.log("Sistema encerrado!");
}
