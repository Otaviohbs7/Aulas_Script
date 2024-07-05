// Atividade 06, Exercicio 02

let sujeitos = [
    "O cachorro",
    "O gato",
    "O pássaro",
    "O coelho",
    "A vaca",
    "O cavalo",
    "UM peixe",
    "A tartaruga"
];

let verbos = [
    "Comeu",
    "bebeu",
    "pegou",
    "mastigou",
    "pastou",
    "comeu",
    "nadou",
    "mordeu",
];

let objetos = [
    "ração",
    "leite",
    "uma minhoca",
    "cenoura",
    "grama",
    "feno",
    "no aquário",
    "uma folha"
];

const ler = require('readline-sync');

let posicao1 = ler.questionInt("Informe um número entre 0 e 7: ");
let posicao2 = ler.questionInt("Informe outro número entre 0 e 7: ");
let posicao3 = ler.questionInt("Informe mais um número entre 0 e 7: ");

console.log("Frase aleatória:");
console.log(`${sujeitos[posicao1]} ${verbos[posicao2]} ${objetos[posicao3]}`);