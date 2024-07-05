// Atividade 01, Exercicio 02const ler = require('readline-sync');

const ler = require('readline-sync');

let nome = ler.question("Digite o nome: ");
let sexo = ler.question("Digite o sexo M ou F: ");
let estcivil = ler.question("Digite o estado civil, Casado(a) ou Solteiro(a): ")

if ((sexo == "f" ) && (estcivil == "casada")) {

    let anos = ler.questionInt("Digite os anos de casada: ")
    
} else {

    console.log("Digite o nome: " + nome);
    console.log("Digite o sexo: " + sexo);
    console.log("Digite o estado civil: " + estcivil);
    
}